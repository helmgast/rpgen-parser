const STATS = {
  STY: "STY",
  TÅL: "TÅL",
  RÖR: "RÖR",
  UPP: "UPP",
  VIL: "VIL",
  PSY: "PSY",
  VIS: "VIS",
  UTS: "UTS"
};

const SKILL_SETS = {
  STRID: {
    ARMBORST: {
      name: "Armborst",
      skill: 0,
      bonus: 0,
      stat: STATS.UPP,
      initial: true
    },
    BÅGE: {
      name: "Båge",
      skill: 0,
      bonus: 0,
      stat: STATS.UPP,
      initial: true
    },
    DOLK: {
      name: "Dolk",
      skill: 0,
      bonus: 0,
      stat: STATS.RÖR,
      initial: true
    },
    KASTVAPEN: {
      name: "Kastvapen",
      skill: 0,
      bonus: 0,
      stat: STATS.UPP,
      initial: true
    },
    KLUBBA: {
      name: "Klubba",
      skill: 0,
      bonus: 0,
      stat: STATS.STY,
      initial: true
    },
    KEDJEVAPEN: {
      name: "Kedjevapen",
      skill: 0,
      bonus: 0,
      stat: STATS.RÖR,
      initial: true
    },
    SKÖLD: {
      name: "Sköld",
      skill: 0,
      bonus: 0,
      stat: STATS.RÖR,
      initial: true
    },
    SLAGSMÅL: {
      name: "Slagsmål",
      skill: 0,
      bonus: 0,
      stat: STATS.STY,
      initial: true
    },
    SPJUT: {
      name: "Spjut",
      skill: 0,
      bonus: 0,
      stat: STATS.RÖR,
      initial: true
    },
    STAV: {
      name: "STAV",
      skill: 0,
      bonus: 0,
      stat: STATS.RÖR,
      initial: true
    },
    SVÄRD: {
      name: "Svärd",
      skill: 0,
      bonus: 0,
      stat: STATS.RÖR,
      initial: true
    },
    YXA: {
      name: "Yxa",
      skill: 0,
      bonus: 0,
      stat: STATS.STY,
      initial: true
    }
  },
  RÖRELSE: {
    DANSA: {
      name: "Dansa",
      skill: 0,
      bonus: 0,
      stat: STATS.RÖR,
      initial: true
    },
    FINGERFÄRDIGHET: {
      name: "Fingerfärdighet",
      skill: 0,
      bonus: 0,
      stat: STATS.RÖR,
      initial: true
    },
    GÖMMA: {
      name: "Gömma",
      skill: 0,
      bonus: 0,
      stat: STATS.PSY,
      initial: true
    },
    HOPPA: {
      name: "Hoppa",
      skill: 0,
      bonus: 0,
      stat: STATS.RÖR,
      initial: true
    },
    KLÄTTRA: {
      name: "Klättra",
      skill: 0,
      bonus: 0,
      stat: STATS.RÖR,
      initial: true
    },
    LÅSDYRKNING: {
      name: "Låsdyrkning",
      skill: 0,
      bonus: 0,
      stat: STATS.PSY,
      initial: false
    },
    SIMMA: {
      name: "Simma",
      skill: 0,
      bonus: 0,
      stat: STATS.TÅL,
      initial: false
    },
    SMYGA: {
      name: "Smyga",
      skill: 0,
      bonus: 0,
      stat: STATS.RÖR,
      initial: true
    },
    UNDVIKA: {
      name: "Undvika",
      skill: 0,
      bonus: 0,
      stat: STATS.RÖR,
      initial: true
    }
  },
  MYSTIK: {
    CEREMONI: {
      name: "Ceremoni",
      skill: 0,
      bonus: 0,
      stat: STATS.VIS,
      initial: false
    },
    FÖRNIMMA: {
      name: "Förnimma",
      skill: 0,
      bonus: 0,
      stat: STATS.VIS,
      initial: false
    },
    FÖRVRÄNGA: {
      name: "Förvränga",
      skill: 0,
      bonus: 0,
      stat: STATS.VIS,
      initial: false
    },
    KANALISERA: {
      name: "Kanalisera",
      skill: 0,
      bonus: 0,
      stat: STATS.VIS,
      initial: false
    }
  },
  SOCIALA: {
    ARGUMENTERA: {
      name: "Argumentera",
      skill: 0,
      bonus: 0,
      stat: STATS.PSY,
      initial: true
    },
    BERÄTTARKONST: {
      name: "Berättarkonst",
      skill: 0,
      bonus: 0,
      stat: STATS.UTS,
      initial: true
    },
    CHARM: {
      name: "Charm",
      skill: 0,
      bonus: 0,
      stat: STATS.UTS,
      initial: true
    },
    DUPERA: {
      name: "Dupera",
      skill: 0,
      bonus: 0,
      stat: STATS.UTS,
      initial: true
    },
    GENOMSKÅDA: {
      name: "Genomskåda",
      skill: 0,
      bonus: 0,
      stat: STATS.PSY,
      initial: true
    },
    HOVLIV: {
      name: "Hovliv",
      skill: 0,
      bonus: 0,
      stat: STATS.PSY,
      initial: false
    },
    INJAGA_FRUKTAN: {
      name: "Injaga fruktan",
      skill: 0,
      bonus: 0,
      stat: STATS.PSY,
      initial: true
    },
    LEDARSKAP: {
      name: "Ledarskap",
      skill: 0,
      bonus: 0,
      stat: STATS.UTS,
      initial: true
    },
    SKUMRASKAFFÄRER: {
      name: "Skumraskaffärer",
      skill: 0,
      bonus: 0,
      stat: STATS.PSY,
      initial: false
    },
    SPEL_DOBBEL: {
      name: "Spel & Dobbel",
      skill: 0,
      bonus: 0,
      stat: STATS.PSY,
      initial: true
    },
    SÅNG_MUSIK: {
      name: "Sång & Musik",
      skill: 0,
      bonus: 0,
      stat: STATS.UTS,
      initial: true
    }
  },
  KUNSKAP: {
    FILOSOFI: {
      name: "Filosofi",
      skill: 0,
      bonus: 0,
      stat: STATS.VIS,
      initial: false
    },
    GEOGRAFI: {
      name: "Geografi",
      skill: 0,
      bonus: 0,
      stat: STATS.VIS,
      initial: false
    },
    GIFTER_DROGER: {
      name: "Gifter & Droger",
      skill: 0,
      bonus: 0,
      stat: STATS.VIS,
      initial: false
    },
    HANDEL: {
      name: "Handel",
      skill: 0,
      bonus: 0,
      stat: STATS.VIS,
      initial: true
    },
    HISTORIA: {
      name: "Historia",
      skill: 0,
      bonus: 0,
      stat: STATS.VIS,
      initial: false
    },
    KALKYLERA: {
      name: "Kalkylera",
      skill: 0,
      bonus: 0,
      stat: STATS.VIS,
      initial: false
    },
    KIRURGI: {
      name: "Kirurgi",
      skill: 0,
      bonus: 0,
      stat: STATS.VIS,
      initial: false
    },
    KRIGFÖRING: {
      name: "Krigföring",
      skill: 0,
      bonus: 0,
      stat: STATS.VIS,
      initial: false
    },
    KULTURKÄNNEDOM: {
      name: "Kulturkännedom",
      skill: 0,
      bonus: 0,
      stat: STATS.VIS,
      initial: false
    },
    LAGKUNSKAP: {
      name: "Lagkunskap",
      skill: 0,
      bonus: 0,
      stat: STATS.VIS,
      initial: false
    },
    LÄKEKONST: {
      name: "Läkekonst",
      skill: 0,
      bonus: 0,
      stat: STATS.VIS,
      initial: false
    },
    OCKULTISM: {
      name: "Ockultism",
      skill: 0,
      bonus: 0,
      stat: STATS.VIS,
      initial: false
    },
    TEOLOGI: {
      name: "Teologi",
      skill: 0,
      bonus: 0,
      stat: STATS.VIS,
      initial: false
    },
    TEORETISK_MAGI: {
      name: "Teoretisk Magi",
      skill: 0,
      bonus: 0,
      stat: STATS.VIS,
      initial: false
    },
    UNDERVISA: {
      name: "Undervisa",
      skill: 0,
      bonus: 0,
      stat: STATS.VIS,
      initial: false
    }
  },
  VILDMARK: {
    GENOMSÖKA: {
      name: "Genomsöka",
      skill: 0,
      bonus: 0,
      stat: STATS.UPP,
      initial: true
    },
    JAKT_FISKE: {
      name: "Jakt & Fiske",
      skill: 0,
      bonus: 0,
      stat: STATS.PSY,
      initial: false
    },
    KÖRA_VAGN: {
      name: "Köra Vagn",
      skill: 0,
      bonus: 0,
      stat: STATS.RÖR,
      initial: true
    },
    MARSCH: {
      name: "Marsch",
      skill: 0,
      bonus: 0,
      stat: STATS.TÅL,
      initial: true
    },
    NATURLÄRA: {
      name: "Naturlära",
      skill: 0,
      bonus: 0,
      stat: STATS.PSY,
      initial: false
    },
    NAVIGATION: {
      name: "Navigation",
      skill: 0,
      bonus: 0,
      stat: STATS.PSY,
      initial: false
    },
    ORIENTERING: {
      name: "Orientering",
      skill: 0,
      bonus: 0,
      stat: STATS.PSY,
      initial: false
    },
    RIDA: {
      name: "Rida",
      skill: 0,
      bonus: 0,
      stat: STATS.RÖR,
      initial: true
    },
    SJÖMANNASKAP: {
      name: "Sjömannaskap",
      skill: 0,
      bonus: 0,
      stat: STATS.PSY,
      initial: false
    },
    SPEJA: {
      name: "Speja",
      skill: 0,
      bonus: 0,
      stat: STATS.UPP,
      initial: true
    },
    SPÅRA: {
      name: "Spåra",
      skill: 0,
      bonus: 0,
      stat: STATS.UPP,
      initial: true
    },
    VILDMARKSVANA: {
      name: "Vildmarksvana",
      skill: 0,
      bonus: 0,
      stat: STATS.PSY,
      initial: false
    }
  }
};

const ALL_SKILLS = [].concat(
  Object.values(SKILL_SETS["STRID"]).map(i => i.name),
  Object.values(SKILL_SETS["RÖRELSE"]).map(i => i.name),
  Object.values(SKILL_SETS["MYSTIK"]).map(i => i.name),
  Object.values(SKILL_SETS["SOCIALA"]).map(i => i.name),
  Object.values(SKILL_SETS["KUNSKAP"]).map(i => i.name),
  Object.values(SKILL_SETS["VILDMARK"]).map(i => i.name)
);

const SKILL_CATEGORIES = [
  "Rörelsefärdighet",
  "Stridsfärdighet",
  "Kunskapsfärdighet",
  "Vildmarksfärdighet",
  "Mystikfärdighet",
  "Sociala färdighet"
];

module.exports = {
  SKILL_SETS,
  ALL_SKILLS,
  SKILL_CATEGORIES
};
