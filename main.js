import mermaid from "https://cdn.jsdelivr.net/npm/mermaid@10/dist/mermaid.esm.min.mjs";
import { chapters } from "./data.js";

const slider = document.getElementById("timeline");
const sliderValue = document.getElementById("timeline-value");
const diagramEl = document.getElementById("diagram");
const chapterDetailsEl = document.getElementById("chapter-details");

mermaid.initialize({
  startOnLoad: false,
  theme: "base",
  themeVariables: { fontFamily: "Delius Swash Caps", edgeLabelBackground: "#ecf0f7" },
});
let renderCounter = 0;
let cleanupPanZoom = null;

function buildGraph(stopIndex) {
  const highlightChapter = Math.min(stopIndex, chapters.length - 1);
  const lines = [
    "graph LR",
    "  classDef highlight fill:#cedcef,stroke:#5886cb,color:#193153;",
  ];

  const seenNodes = new Set();
  const highlightNodes = new Set();
  const highlightEdges = new Set();

  function addBlock(block, indent, shouldHighlight) {
    if (!block) return;
    block.split("\n").forEach((rawLine) => {
      const line = rawLine.trim();
      if (!line) return;

      const arrowMatch = line.match(
        /^([A-Za-z][\w]*)\s*<?[-.]+.*?>\s*(?:\|[^|]*\|\s*)?([A-Za-z][\w]*)/
      );
      const edgeKey = arrowMatch ?  `${arrowMatch[1]}-${arrowMatch[2]}` : "";

      if (arrowMatch) {
        const modifiedLine = line.replace(/\|([^|]*)\|/, (match, p1) => {
          return `|<span data-arrow='${edgeKey}' ${shouldHighlight ? "style='color:#193153'" : ""}>${p1}</span>|`;
        });
        if (shouldHighlight) {
          highlightEdges.add(edgeKey);
        }
        lines.push(`${indent}${modifiedLine}`);
      } else {
        lines.push(`${indent}${line}`);
      }

      const nodeMatch = line.match(/^([A-Za-z][\w]+)/);
      if (nodeMatch) {
        const nodeId = nodeMatch[1];
        if (shouldHighlight && !seenNodes.has(nodeId)) {
          highlightNodes.add(nodeId);
        }
        seenNodes.add(nodeId);
      }
    });
  }

  const cappedIndex = Math.min(stopIndex, chapters.length - 1);
  const includedChapters = chapters.slice(0, cappedIndex + 1);

  lines.push("  subgraph People");
  lines.push("    direction LR");
  includedChapters.forEach((chapter, idx) => {
    addBlock(
      chapter.diagrams?.peopleDiagrams,
      "    ",
      idx === highlightChapter,
    );
  });
  lines.push("  end");

  lines.push("  subgraph Artifacts");
  lines.push("    direction LR");
  includedChapters.forEach((chapter, idx) => {
    addBlock(
      chapter.diagrams?.artifactDiagrams,
      "    ",
      idx === highlightChapter,
    );
  });
  lines.push("  end");

  includedChapters.forEach((chapter, idx) => {
    addBlock(chapter.diagrams?.betweenDiagrams, "  ", idx === highlightChapter);
  });

  if (highlightNodes.size) {
    lines.push(`  class ${Array.from(highlightNodes).join(",")} highlight;`);
  }

  return [lines.join("\n"), highlightEdges];
}

async function render(stopValue) {
  const stopIndex = Number(stopValue) - 1;
  sliderValue.textContent = stopValue;

  const [graph, highlightEdges] = buildGraph(stopIndex);
  const callId = ++renderCounter;
  const { svg } = await mermaid.render(`diagram-${callId}`, graph);
  if (callId !== renderCounter) return;
  diagramEl.innerHTML = svg;
  const svgEl = diagramEl.querySelector("svg");
  if (svgEl) {
    const edgeMap = buildEdgeMap(svgEl);
    enablePanZoom(svgEl);
    connectEdgeHover(svgEl, edgeMap);
    applyEdgeHighlights(svgEl, highlightEdges);
  }

  const cappedIndex = Math.min(stopIndex, chapters.length - 1);
  const chapter = chapters[cappedIndex];
  if (!chapter) {
    chapterDetailsEl.textContent = "No chapter data yet.";
    return;
  }
  chapterDetailsEl.textContent = `${chapter.name} (${chapter.year}${chapter.bo ? ', B.O. ' + chapter.bo : ''}) — ${chapter.author}`;
  if (chapter.notes) {
    const notesEl = document.createElement("details");
    const summaryEl = document.createElement("summary");
    summaryEl.textContent = "Notes";
    notesEl.appendChild(summaryEl);
    const notesContentEl = document.createElement("p");
    notesContentEl.innerHTML = chapter.notes;
    notesEl.appendChild(notesContentEl);
    chapterDetailsEl.appendChild(notesEl);
  }
}

slider.addEventListener("input", (event) => {
  render(event.target.value);
});
render(slider.value);

function enablePanZoom(svg) {
  if (cleanupPanZoom) {
    cleanupPanZoom();
    cleanupPanZoom = null;
  }

  const inner = svg.querySelector("g");
  if (!inner) return;

  const baseTransform = inner.getAttribute("transform") || "";
  let scale = 1;
  let translateX = 0;
  let translateY = 0;
  let isPanning = false;
  let startX = 0;
  let startY = 0;
  const panSpeed = 1.5;

  function applyTransform() {
    inner.setAttribute(
      "transform",
      `${baseTransform} translate(${translateX},${translateY}) scale(${scale})`
    );
  }

  svg.style.cursor = "grab";
  const onMouseDown = (event) => {
    isPanning = true;
    startX = event.clientX;
    startY = event.clientY;
    svg.style.cursor = "grabbing";
  };
  svg.addEventListener("mousedown", onMouseDown);

  const onMouseMove = (event) => {
    if (!isPanning) return;
    const dx = (event.clientX - startX) * panSpeed;
    const dy = (event.clientY - startY) * panSpeed;
    translateX += dx;
    translateY += dy;
    startX = event.clientX;
    startY = event.clientY;
    applyTransform();
  };
  window.addEventListener("mousemove", onMouseMove);

  const onMouseUp = () => {
    if (!isPanning) return;
    isPanning = false;
    svg.style.cursor = "grab";
  };
  window.addEventListener("mouseup", onMouseUp);

  const onWheel = (event) => {
    event.preventDefault();
    const delta = -event.deltaY;
    const zoomFactor = delta > 0 ? 1.1 : 0.9;
    const newScale = Math.min(5, Math.max(0.2, scale * zoomFactor));
    const rect = svg.getBoundingClientRect();
    const mx = event.clientX - rect.left;
    const my = event.clientY - rect.top;
    const px = (mx - translateX) / scale;
    const py = (my - translateY) / scale;
    translateX = mx - px * newScale;
    translateY = my - py * newScale;
    scale = newScale;
    applyTransform();
  };
  svg.addEventListener("wheel", onWheel);

  cleanupPanZoom = () => {
    window.removeEventListener("mousemove", onMouseMove);
    window.removeEventListener("mouseup", onMouseUp);
    svg.removeEventListener("mousedown", onMouseDown);
    svg.removeEventListener("wheel", onWheel);
  };

  applyTransform();
}

function getEdgeKey(rawId) {
  if (!rawId) return null;
  return rawId.replace(/^#/, "").replace(/^L-/, "").replace(/-\d+$/, "");
}

function applyEdgeHighlights(svgRoot, highlightEdges) {
  highlightEdges.forEach((edgeKey) => {
    const pathElement = svgRoot.querySelector(`path[data-edge-key='${edgeKey}']`);
    if (pathElement) {
      pathElement.classList.add("highlight-edge");
    }
  });
}

function buildEdgeMap(svgRoot) {
  const edgeMap = new Map();

  function registerEdge(key) {
    if (!key) return null;
    if (!edgeMap.has(key)) {
      const [from, to] = key.split("-");
      edgeMap.set(key, {
        key,
        nodes: [from, to],
        paths: new Set(),
        labels: new Set(),
      });
    }
    return edgeMap.get(key);
  }

  svgRoot.querySelectorAll("g.edgePaths path").forEach((path) => {
    const key = getEdgeKey(path.id);
    const edge = registerEdge(key);
    if (!edge) return;
    path.dataset.edgeKey = key;
    edge.paths.add(path);
  });

  svgRoot.querySelectorAll("g.edgeLabels g.edgeLabel").forEach((labelGroup) => {
    let key = null;
    const textPath = labelGroup.querySelector("textPath");
    if (textPath) {
      key = getEdgeKey(
        textPath.getAttribute("href") || textPath.getAttribute("xlink:href")
      );
    }
    if (!key) {
      const span = labelGroup.querySelector("span.edgeLabel");
      if (span) {
        const classKey = Array.from(span.classList)
          .map((cls) => getEdgeKey(cls))
          .find(Boolean);
        key = classKey || key;
      }
    }
    if (!key) {
      key = getEdgeKey(labelGroup.id);
    }
    const edge = registerEdge(key);
    if (!edge) return;
    labelGroup.dataset.edgeKey = key;
    edge.labels.add(labelGroup);
  });

  return edgeMap;
}

function connectEdgeHover(svgRoot, edgeMap) {
  function setNodesHover(ids, add) {
    ids.forEach((id) => {
      const node = svgRoot.querySelector(`[data-id='${id}']`);
      if (!node) return;
      node.classList.toggle("edge-hover", add);
    });
  }

  function setLabelHover(edge, add) {
    const node = svgRoot.querySelector(`[data-arrow='${edge.key}']`);
    if (!node) return;
    node.classList.toggle("edge-hover-label", add);
  }

  edgeMap.forEach((edge) => {
    const [from, to] = edge.nodes;
    const applyHover = () => {
      setNodesHover([from, to], true);
      setLabelHover(edge, true);
    };
    const removeHover = () => {
      setNodesHover([from, to], false);
      setLabelHover(edge, false);
    };
    edge.paths.forEach((path) => {
      path.addEventListener("mouseenter", applyHover);
      path.addEventListener("mouseleave", removeHover);
    });
  });
}
