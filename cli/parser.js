const _ = require("lodash");
const { isArray } = require("util");
const { ALL_SKILLS } = require("../data/rulesets/eon/starting_skills");
const lättlärdMatch = require("./rules/lättlärd.js");
const egenskaperMatch = require("./rules/egenskaper.js");
const enheterMatch = require("./rules/enheter.js");
const expertisMatch = require("./rules/expertis.js");
const känneteckenMatch = require("./rules/kännetecken.js");
const avtrubbningsMatch = require("./rules/avtrubbning.js");
const fokusMatch = require("./rules/fokus.js");
const bakgrundsMatch = require("./rules/bakgrund.js");
const pengarMatch = require("./rules/pengar.js");
const hantverkMatch = require("./rules/hantverk.js");
const karaktärsdragMatch = require("./rules/karaktärsdrag.js");
const händelsetabellMatch = require("./rules/händelsetabell.js");
const doserMatch = require("./rules/doser.js");
const mysterierMatch = require("./rules/mysterier.js");

// MOVE TO CENTRAL FILE
const regexes = {
  multiple_stat: new RegExp(/\s?Välj:?\s(\+\d|\–\d|\+\dT6)/gi),
  stat: new RegExp(/(\+\d|\–\d|\+\dT6)/gi),
  lättlärd: new RegExp(/\s?(Lättlärd|Svårlärd)\s?/gi),
  skillValue: new RegExp(/(enhet|enheter)/gi),
  expertis: new RegExp(/\s?Expertis(en)?\s?/gi),
  hantverk: new RegExp(/\s?Hantverk(et)?\s?/gi),
  kännetecken: new RegExp(/Känneteck(en|net)?/gi),
  avtrubbning: new RegExp(/\s?(\d?)\s?Avtrubbningskryss\s?(för)?\s?(\D*)/gi),
  fokus: new RegExp(/Fokus/g),
  bakgrund: new RegExp(/(bakgrundstabellen|bakgrund)/gi),
  händelsetabell: new RegExp(/(händelsetabell)/gi),
  pengar: new RegExp(/(\+\d|\–\d|\dT6|\d+).*(silver)/gi),
  karaktärsdrag: new RegExp(/Karaktärsdrag/gi),
  doser: new RegExp(/(\d+)\sdoser/gi),
  mysterier: new RegExp(/(\d+|ett|en)\smysterier?/i)
};

const ruleDefinitionSplitter = ".";

const exceptions = [
  "Ignorerar efterverkningen Faller då denne genast kommer upp på fötter igen",
  "Bestäm dessutom en lämplig ålder på barnet",
  "Rollpersonen kan introducera bosättningen under en vildmarksfärd om de behöver tid att återhämta sig, införskaffa proviant och kanske läka skador",
  "Välj en passande färdighet som varken är Undvika, en Stridsfärdighet eller Mystikfärdighet",
  "Till denna färdighet ger föremålet +1T6 i bonus när man använder det till vad det är menat för",
  "Rollpersonen får välja en av de två enhetsgrupperna, detta är sådant som rollpersonen lärt sig av främlingen",
  "Rollpersonen kan etablera gömstället i spel när denna finner det lämpligt",
  "Exceptionellt föremål i gåva",
  "Inga mystiska verk kan ha rollpersonen som direkt mål, oavsett magnitud",
  "Dock påverkas rollpersonen indirekt av verk som lagts på ett område",
  "Rollpersonen har dock dragit på sig en underlig sjukdom eller blivit skadad i ett överfall eller olycka",
  "Rollpersonen blir endast väckt av någon om denne aktivt försöker väcka rollpersonen, och trots detta får rollpersonen tidigast agera 3 stridsrundor senare",
  "En gång per spelmöte kan spelaren slå om ett valfritt färdighetsslag som denne just misslyckats med eller om denne blivit missnöjd över resultatet",
  "Rollpersonen får en Tvångshandling",
  "Rollpersonen kan etablera värdshuset då det passar i spel",
  "Ignorerar efterverkningen Omtöcknad och får en bonus på +3T6 när det gäller att hålla andan eller uthärda syrebrist, exempelvis vid dykning eller strypning",
  "Denne hatar rollpersonen",
  "Rollpersonen har lärt känna en dryckeskamrat",
  "Spelaren kan etablera denne i spel när det passar",
  "Spelaren kan introducera fastigheten i spelet när denna finner det lämpligt",
  "Spelaren kan etablera favorithaket i spel när det är lämpligt och om spelledaren bedömer det troligt"
];

const addToEffects = (effects, result) => {
  if (isArray(result)) {
    return effects.concat(result);
  } else {
    return effects.concat([result]);
  }
};

const identifyTokenFromRule = (rule, line) => {
  // console.log("identify", rule);
  if (!Object.keys(line).length || !rule.length) {
    throw new Error("IdentiyTokenFromRule received empty rule and line");
  }

  // TODO: Make a specific function for each matcher that does multiple checks (and not just using .test)
  let effects = [];
  if (rule.match(regexes.lättlärd)) {
    const result = lättlärdMatch(rule);
    effects = addToEffects(effects, result);
  }

  if (rule.match(regexes.stat) || rule.match(regexes.multiple_stat)) {
    const result = egenskaperMatch(rule);
    effects = addToEffects(effects, result);
  }

  if (rule.match(regexes.skillValue) || rule.includes("enheter")) {
    const result = enheterMatch(rule);
    effects = addToEffects(effects, result);
  }

  if (rule.match(regexes.expertis)) {
    const result = expertisMatch(rule);
    effects = addToEffects(effects, result);
  }

  if (rule.match(regexes.kännetecken)) {
    const result = känneteckenMatch(rule);
    effects = addToEffects(effects, result);
  }

  if (rule.match(regexes.avtrubbning)) {
    const result = avtrubbningsMatch(rule);
    effects = addToEffects(effects, result);
  }

  if (rule.match(regexes.fokus)) {
    const result = fokusMatch(rule);
    effects = addToEffects(effects, result);
  }

  if (rule.match(regexes.bakgrund)) {
    const result = bakgrundsMatch(rule);
    effects = addToEffects(effects, result);
  }

  if (rule.match(regexes.pengar)) {
    const result = pengarMatch(rule);
    effects = addToEffects(effects, result);
  }

  if (rule.match(regexes.hantverk)) {
    const result = hantverkMatch(rule);
    effects = addToEffects(effects, result);
  }

  if (rule.match(regexes.karaktärsdrag)) {
    const result = karaktärsdragMatch(rule);
    effects = addToEffects(effects, result);
  }

  if (rule.match(regexes.händelsetabell)) {
    const result = händelsetabellMatch(rule);
    effects = addToEffects(effects, result);
  }

  if (rule.match(regexes.doser)) {
    const result = doserMatch(rule);
    effects = addToEffects(effects, result);
  }

  if (rule.match(regexes.mysterier)) {
    const result = mysterierMatch(rule);
    effects = addToEffects(effects, result);
  }

  if (!effects.length) {
    console.log("Could not parse rule: ", JSON.stringify(rule));
    effects.push({
      identified: false,
      input: rule
    });
  }

  return effects;
};

const getPossibleRulesFromLine = line => {
  const { beskrivninghak: effect } = line;

  if (!line || !effect) {
    console.log(line);
    throw new Error(`Passed an invalid rule ('${effect}')`);
  }
  const possibleRules = effect.split(ruleDefinitionSplitter);
  if (possibleRules.length <= 0) {
    throw new Error(`Could not parse any rules from line: ('${effect}')`);
  }

  return possibleRules.map(rule => rule.trim()).filter(Boolean);
};

const parseLineForRuleDefinitions = line => {
  const possibleRules = getPossibleRulesFromLine(line);

  const effects = possibleRules
    .map(rule => identifyTokenFromRule(rule, line))
    .map(effect => {
      if (effect.length && effect.map(i => i.identified)) {
        return effect[0];
      }
      return null;
    })
    .filter(Boolean);

  if (effects && effects.length) {
    // console.log("effects", effects);
  }
  return effects;
};

module.exports = {
  parseLineForRuleDefinitions,
  getPossibleRulesFromLine
};
