const chapter1 = {
  name: "The Winter Journey",
  name_fr: "Le Voyage d'hiver",
  author: "Georges Perec",
  year: 1979,
  diagrams: {
    peopleDiagrams: `VincentDegrael["Vincent Degraël"]
DenisBorrade["Denis Borrade"]
HugoVernier["Hugo Vernier"]
VincentDegrael -->|best friends| DenisBorrade`,
    artifactDiagrams: `VoyageDhiver["Le Voyage d'hiver"]`,
    betweenDiagrams: `HugoVernier -->|writes, and in 1864, publishes| VoyageDhiver
VincentDegrael -->|discovers, in 1939| VoyageDhiver`,
  },
};

const chapter2 = {
  name: "Yesterday's Journey",
  name_fr: "Le Voyage d'hier",
  author: "Jacques Roubaud",
  year: 1992,
  bo: 53,
  diagrams: {
    peopleDiagrams: `DennisBorrade["Dennis Borrade Jr."]
DennisBorrade -->|son of| DenisBorrade
Louviers["'Louviers'"]
Louviers -->|betrays during WWII| DennisBorrade
Perec["Georges Perec"]
VincentDegrael -->|taught| Perec
VirginieHelene["Virginie Hélène"]
VirginieHelene <-->|siblings| DenisBorrade
VirginieHelene <-->|pre-war relationship| VincentDegrael
TheophileGautier["Théophile Gautier"]
HugoVernier -->|begins frequenting| TheophileGautier
TheophileGautier -->|hires as governess| VirginieHuet
VirginieHuet["Virginie Huet"]
HugoVernier <-->|marries| VirginieHuet
Baudelaire["Charles Baudelaire"]
Baudelaire -->|borrows and plagiarizes| HugoVernier
VirginieHuet -->|remarries and gives birth to| DenisBorrade`,
    artifactDiagrams: `FTJours["Borrade Sr.'s 53 Jours Manuscript"]
VoyageHier["Le voyage d'hier"]
VoyageHier -->|intended title, mispublished as| VoyageDhiver`,
    betweenDiagrams: `Perec -->|receives from Borrade Sr.| FTJours`,
  },
  notes:
    "The 'announcement' that 'the month of May will have fifty-three days' matches Perec's publication <em>53 jours</em>. Dennis was also born in 1953. This story was additionally published in B.O. 53. Finally, Vernier sends his letter to Gautier in May 1853.",
};

const chapter3 = {
  name: "Hitler's Journey",
  name_fr: "Le Voyage d'Hitler",
  author: "Hervé Le Tellier",
  year: 1999,
  bo: 105,
  diagrams: {
    peopleDiagrams: `WolfgangGauger["Wolfgang Gauger"]
HeinrichNiggemeyer["Heinrich Niggemeyer"]
HeinrichNiggemeyer -->|uncle of| WolfgangGauger
HugoGruppe["Hugo Gruppe"]
HeinrichNiggemeyer -->|in| HugoGruppe
KlaraJagers["Klara Jägers"]
WolfgangGauger <-->|in relationship with| KlaraJagers
KlaraJagers -->|daughter of housekeeper of| HeinrichNiggemeyer
RudolfGanshofer["Rudolf Ganshofer"]
KlaraJagers -->|sets up an elaborate trap for| RudolfGanshofer`,
    artifactDiagrams: `BernhardList["Bernhard List"]
VoyageDhiver -->|on| BernhardList`,
    betweenDiagrams: `HugoGruppe -->|steals| VoyageDhiver`,
  },
  notes:
    "The description of Niggemeyer states 'one is extremely serious at the age of twenty-seven', which echoes Vernier's letter to Gautier: 'One is not serious at the age of seventeen.' By the intermediate value theorem:",
};

const chapter4 = {
  name: "Hinterreise",
  name_fr: "Hinterreise",
  author: "Jacques Jouet",
  year: 1999,
  bo: 108,
  diagrams: {
    peopleDiagrams: `MikhailGorliouk["Mikhaïl Gorliouk"]
Kramponov["Commandant Kramponov"]
Gorliouk -->|tracks down| Kramponov
Perec -->|also plagiarizes| HugoVernier
JurgenRetti["Jürgen Retti"]
Gorliouk -->|discusses 'Good Night' hypotheses with| JurgenRetti
HugoWernier["Hugo Wernier"]`,
    artifactDiagrams: `Hinterreise["Hinterreise"]`,
    betweenDiagrams: `Kramponov -->|finds in Hitler's bunker| VoyageDhiver
HugoWernier -->|publishes and typesets| Hinterreise`,
  },
  notes:
    "Hugo Vernier is depicted as actively in on the musical anticipatory plagiarism world.",
};

const chapter5 = {
  name: "Hoover's Journey",
  name_fr: "Le Voyage d'Hoover",
  author: "Ian Monk",
  year: 1999,
  bo: 110,
  diagrams: {
    peopleDiagrams: `JohnScale["John Scale"]
PeterScale["Peter Scale"]
PeterScale -->|uncle of| JohnScale
DollyHaze["Dolly Haze"]
JohnScale -->|with Borrade Jr, meets| DollyHaze
Moses["Moses"]
JohnScale -->|from introduction by Dolly Haze, meets| Moses
Shakespeare['William Shakespeare']
WH["'Waw He', W.H."]`,
    artifactDiagrams: `WintersTale["The Winter's Tale"]`,
    betweenDiagrams: `Shakespeare -->|plagiarizes| WintersTale
WH -->|wrote, in 1444| WintersTale`,
  },
};

const chapter6 = {
  name: "Arvers's Journey",
  name_fr: "Le Voyage d'Arvers",
  author: "Jacques Bens",
  year: 1999,
  bo: 112,
  diagrams: {
    peopleDiagrams: `ApollonDumoulin["Apollon Dumoulin"]
DonatienBourrasol["Donatien Bourrasol"]
ApollonDumoulin -->|befriends a student's father| DonatienBourrasol
HuguesAuvernier["Hugues Auvernier"]
FelixArvers["Félix Arvers"]
Fidele["Sister Fidèle de la Résurrection"]
FelixArvers <-->|wrote more or less famous sonnets about the other| Fidele`,
    artifactDiagrams: `Estampes["Vers provençaux et français"]`,
    betweenDiagrams: `HuguesAuvernier -->|writes| Estampes
FelixArvers -->|is inspired by| Estampes`,
  },
  notes:
    "The esteemed 'Jorgi Peiresc' wrote the cited bibliography of Auvernier",
};

const chapter7 = {
  name: "A Divergent Journey",
  name_fr: "Un Voyage divergent",
  author: "Michelle Grangaud",
  year: 2001,
  bo: 113,
  diagrams: {
    peopleDiagrams: `AntoineHuet["Antoine Huet"]
MichelleGrangaud["Michelle Grangaud"]
MichelleGrangaud <-->|distant cousins| AntoineHuet
Eugophernes["Eugophernes"] -->|perhaps distant relative of| HugoVernier`,
    artifactDiagrams: `KalamosTablets["Kálamos tablets"]`,
    betweenDiagrams: `AntoineHuet -->|tells Michelle Grangaud about| KalamosTablets`,
  },
};

const chapter8 = {
  name: "The Worm's Journey",
  name_fr: "Le Voyage du ver",
  author: "François Caradec",
  year: 2001,
  bo: 114,
  diagrams: {
    peopleDiagrams: `Worm["The Worm"]
VernierHugo["Vernier Hugo"]
VernierHugo -->|correct name of| HugoVernier
VictorHugo["Victor Hugo"]
VernierHugo <-->|brothers| VictorHugo
HM["'H.M.'"]
HM -->|owns bookshelf in which resides| Worm`,
    betweenDiagrams: `Worm -->|eats| Estampes
Worm -->|is raising family in| VoyageDhiver
VictorHugo -->|collaborates with brother to write| VoyageDhiver`,
  },
};

const chapter9 = {
  name: "Verse's Journey",
  name_fr: "Le Voyage du vers",
  author: "Reine Haugure",
  year: 2001,
  bo: 117,
  diagrams: {
    peopleDiagrams: `ReineHaugure["Reine Haugure"]
HugoWernier -->|unknown to| HugoVernier
WH -->|is| Shakespeare
HuguesAuvernier <-->|implied parallel life| HugoVernier`,
    artifactDiagrams: `Hinterreise -->|coincidentally named with, and unrelated to| VoyageDhiver`,
    betweenDiagrams: `HM -->|misled Worm's wife to believe existed| VernierHugo`,
  },
  notes:
    "It's alluded to that Jacques Roubaud could have been implicated in the writing of this work.",
};

const chapter10 = {
  name: "A Journey Amidst Glasses",
  name_fr: "Le Voyage des verres",
  author: "Harry Matthews",
  year: 2001,
  bo: 118,
  diagrams: {
    peopleDiagrams: `HarryMatthews["Harry Matthews"]
ParsifalBartlstand["Parsifal Bartlstand III"]
HarryMatthews -->|meets in Key West| ParsifalBartlstand
ParsifalII["Parsifal II"]
ParsifalII -->|father of| ParsifalBartlstand
ParsifalII -->|rescued and fought in Resistance with| DenisBorrade
ParsifalBartlstand <-->|friends, retraced fathers' footsteps| DennisBorrade
ParsifalBartlstand -->|taught| Perec
Perec -->|plagiarizes life story into <em>Life A User's Manual</em>| DennisBorrade
ParsifalBartlstand -->|claims nonexistent| VincentDegrael`,
    betweenDiagrams: `DennisBorrade -->|colludes with Parsifal III to concoct| VoyageDhiver
ParsifalBartlstand -->|recruits| KlaraJagers
ParsifalBartlstand -->|recruits| Kramponov
ParsifalBartlstand -->|recruits| DollyHaze
ParsifalBartlstand -->|recruits| Moses`,
  },
  notes:
    "His wife's news alludes to Bénabou's <em>Why I have Not Written Any of My Books</em>. I'm not clever enough to figure out the rest.",
};

const chapter11 = {
  name: "If on a Night a Winter's Traveller",
  name_fr: "Si par une Nuit un Voyageur d'Hiver",
  author: "Mikhaïl Gorliouk",
  year: 2003,
  bo: 129,
  diagrams: {
    peopleDiagrams: `JacquelineWedderburn["Jacqueline Wedderburn"]
JacquelineWedderburn -->|uses as pseudonym| ReineHaugure
MikhailGorliouk -->|meets and rebukes| ReineHaugure
JacquesRoubaud["Jacques Roubaud"]
ReineHaugure -->|follower of| JacquesRoubaud`,
    artifactDiagrams: `PerecVoyage["Perec's <em>Voyage d'hiver</em>"]`,
    betweenDiagrams: `Perec -->|conceives collaborative project| PerecVoyage
JacquesRoubaud -->|wants to work on| PerecVoyage`,
  },
  notes: "Jacques Jouet seems implicated in the writing of this work.",
};

const chapter12 = {
  name: "The Journey of Dreams",
  name_fr: "Le Voyage des rêves",
  author: "Frédéric Forte",
  year: 2005,
  bo: 139,
  diagrams: {
    peopleDiagrams: `JulioCortazar["Julio Cortázar"]
DouglasBauld["Douglas Bauld"]
DouglasBauld <-->|friends| JulioCortazar
ItaloCalvino["Italo Calvino"]`,
    artifactDiagrams: `Estampes -->|misleads to ignore| VoyageDhiver
KalamosTablets -->|misleads to ignore| VoyageDhiver`,
    betweenDiagrams: `HarryMatthews -->|owns| VoyageDhiver
JulioCortazar -->|recruited for and declines| PerecVoyage
HarryMatthews -->|helps conceive| PerecVoyage
ItaloCalvino -->|helps conceive| PerecVoyage`,
  },
};

const chapter13 = {
  name: "The Journey of the Large Glass",
  name_fr: "Le Voyage du Grand Verre",
  author: "Jacques Jouet",
  year: 2007,
  bo: 162,
  diagrams: {
    peopleDiagrams: `MohammoudouBakoungou["Mohammoudou Bakoungou"]`,
    artifactDiagrams: `Duchamp["Marcel Duchamp's <em>Nude Descending a Staircase</em>"]
TheLargeGlass["Marcel Duchamp's <em>The Large Glass</em>"]
Duchamp -->|plagiarizes| VoyageDhiver
Vernier["Signed Duchamp Vernier"]
Vernier -->|in paper with| TheLargeGlass`,
    betweenDiagrams: `MohammoudouBakoungou -->|tells story of| Duchamp`,
  },
};

const chapter14 = {
  name: "H… Ver…'s Journey",
  name_fr: "Le Voyage d'H… V…",
  author: "Reine Haugure",
  year: 2008,
  bo: 179,
  diagrams: {
    peopleDiagrams: `Oulipo["Oulipo"]
GustaveDroz["Gustave Droz"]`,
    artifactDiagrams: `HenryJames["Henry James' Story"]
HenryJames -->|inspired by| VoyageDhiver
MMB["Monsieur, Madame et Bébé"]`,
    betweenDiagrams: `Oulipo -->|plagiarizes| VoyageDhiver
Oulipo -->|often references| HenryJames
HugoVernier -->|invents| Oulipo
GustaveDroz -->|writes| MMB
GustaveDroz -->|influences| HenryJames
GustaveDroz -->|sent to Henry James| VoyageDhiver`,
  },
  notes: "Jacques Jouet again would be implicated in the writing of this work.",
};

const chapter15 = {
  name: "Hell's Journey",
  name_fr: "Le Voyage d'Enfer",
  author: "Hugo Vernier",
  year: 2012,
  bo: 200,
  diagrams: {
    peopleDiagrams: `HugoVernier -->|tenders membership application for| Oulipo`,
    betweenDiagrams: `VoyageDhiver -->|will contain all work of| Oulipo`,
  },
  notes:
    "Valérie Beaudouin seems implicated in the performance of this work. There is what I assume to be an extensive use of the conditionnel translated to English.",
};

const chapter16 = {
  name: "IV-R-16",
  name_fr: "IV-R-16",
  author: "Michèle Audin",
  year: 2012,
  bo: 209,
  diagrams: {
    peopleDiagrams: `MicheleAudin["Michèle Audin"]
MicheleAudin -->|annoyed by application of| HugoVernier
RobertPetit["Robert Petit"]
ValeriePetit["Valérie Petit-Huet"]
ValeriePetit -->|daughter of| RobertPetit
RobertPetit -->|lived on street named for| TheophileGautier
PierreVernier["Pierre Vernier"]
RobertPetit -->|researched| PierreVernier`,
    artifactDiagrams: `ReportPage["Page 16 of IV-R"]`,
    betweenDiagrams: `RobertPetit -->|founded seminar which published| ReportPage
MicheleAudin -->|eventually finds| ReportPage`,
  },
};

const chapter17 = {
  name: "Hébert's Journey",
  name_fr: "Le Voyage d'Hébert",
  author: "Paul Fournel",
  year: 2012,
  bo: 211,
  diagrams: {
    peopleDiagrams: `MonsieurHebert["Monsieur Hébert"]
MonsieurHebert -->|taught and humiliates| HugoVernier
Coachman["Coachman"]`,
    betweenDiagrams: `HugoVernier -->|gave copy of to M. Hébert| VoyageDhiver
HugoVernier -->|burns remaining| VoyageDhiver
Coachman -->|finds <em>Poèmes</em> on remains of| MonsieurHebert`,
  },
  notes: "The 'Azure, azure, azure' references in Hinterreise re-manifest.",
};

const chapter18 = {
  name: "The Forthcoming Journey",
  name_fr: "Le Voyage disert",
  author: "Marcel Bénabou",
  year: 2012,
  bo: 212,
  diagrams: {
    peopleDiagrams: `MarcelBenabou["Marcel Bénabou"]
MarcelBenabou -->|cites 'Vernieral disease' after| ReineHaugure`,
    artifactDiagrams: `Paronyms["Bénabou's Paronym Framework"]`,
    betweenDiagrams: `Paronyms -->|anticipatorily plagiarizes the <em>Winter's Journey</em> series of| Oulipo`,
  },
};

const chapter19 = {
  name: "Various Journeys",
  name_fr: "Divers voyages",
  author: "Étienne Lécroart",
  year: 2013,
  bo: 213,
  diagrams: {
    peopleDiagrams: `JeanPierreMercier["Jean-Pierre Mercier"]`,
    artifactDiagrams: `DiversVoyages["Divers Voyages"]
DiversVoyages -->|entirely unrelated to| VoyageDhiver`,
    betweenDiagrams: `JeanPierreMercier -->|unearths| DiversVoyages
HugoVernier -->|writes, between 1850 and 1902| DiversVoyages
HarryMatthews -->|wife mistook for <em>Voyage d'hiver</em>| DiversVoyages`,
  },
};

const chapter20 = {
  name: "Yvert's Journey",
  name_fr: "Le Voyage d'Yvert",
  author: "Paul Braffort",
  year: 2013,
  bo: 214,
  diagrams: {
    peopleDiagrams: `LouisYvert["Louis Yvert"]
PaulBraffort["Paul Braffort"]
Brouwer["Luitzen E.J. Brouwer"]
Chwistek["Leon Chwistek"]`,
    artifactDiagrams: `CatalogueTimbres["Catalogue prix-courant des timbres-postes"]
Dichome["Dichome"]`,
    betweenDiagrams: `LouisYvert -->|founds| CatalogueTimbres
CatalogueTimbres -->|features| Brouwer 
CatalogueTimbres -->|features| Chwistek
Brouwer -->|develops phenomenology of empty thought with| Dichome
Chwistek -->|proposes Polish notation for| Dichome
CatalogueTimbres -->|does not include proposed stamp by| Oulipo`,
  },
  notes:
    "Note the bolded wordplay. It also seems that Chwistek really loves his wife.",
};

const chapter21 = {
  name: "The Obscure Journey",
  name_fr: "Le Voyage obscur",
  author: "Daniel Levin Becker",
  year: 2013,
  bo: 215,
  diagrams: {
    peopleDiagrams: `DanielLevinBecker["Daniel Levin Becker"]
BrunoDeronda["Bruno Deronda"]
RogerDubois["Roger Dubois"]
BrunoDeronda -->|working for| RogerDubois`,
    artifactDiagrams: `Boutique["La Boutique Obscure"]`,
    betweenDiagrams: `DanielLevinBecker -->|translates| Boutique
BrunoDeronda -->|interns during publishing of| Boutique
PerecVoyage -->|contains clues to| Boutique
RogerDubois -->|stole parts of| Boutique`,
  },
};

export const chapters = [
  chapter1,
  chapter2,
  chapter3,
  chapter4,
  chapter5,
  chapter6,
  chapter7,
  chapter8,
  chapter9,
  chapter10,
  chapter11,
  chapter12,
  chapter13,
  chapter14,
  chapter15,
  chapter16,
  chapter17,
  chapter18,
  chapter19,
  chapter20,
  chapter21,
];
