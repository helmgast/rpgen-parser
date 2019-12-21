const Random = require("random-js");
const raw_backgrounds = require("../data/rulesets/eon/backgrounds.js");
const raw_archetypes = require("../data/rulesets/eon/archetype.js");
const raw_environments = require("../data/rulesets/eon/environment.js");
const generateCharacterTemplate = require("../data/rulesets/eon/character_generation");

const lengths = {
  backgrounds: 100,
  archetype: raw_archetypes.length,
  environment: raw_environments.length
};

const engine = Random.nodeCrypto;

const generateBackground = (type = "jargien") => {
  const rnd = Random.integer(0, lengths.backgrounds);
  const idx = rnd(engine);
  return raw_backgrounds[type].find(x => x.resultat === idx);
};

const generateArchetype = (dlc = []) => {
  const rnd = Random.integer(0, lengths.archetype - 1);
  const idx = rnd(engine);
  return raw_archetypes[idx];
};

const generateEnvironment = (dlc = []) => {
  const rnd = Random.integer(0, lengths.environment - 1);
  const idx = rnd(engine);
  return raw_environments[idx];
};

const mergeTemplateWithResult = (archetype, environment, background) => {
  const template = generateCharacterTemplate();

  function mergeFardigheter() {
    for (let [fardighet, value] of Object.entries(archetype.fardigheter)) {
      template.fardigheter[fardighet] += value;
    }

    for (let [fardighet, value] of Object.entries(environment.fardigheter)) {
      template.fardigheter[fardighet] += value;
    }

    for (let [fardighet, value] of Object.entries(background.fardigheter)) {
      template.fardigheter[fardighet] += value;
    }
  }

  function mergeTabeller() {
    for (let [tabell, value] of Object.entries(archetype.tabell)) {
      template.tabeller[tabell] += value;
    }

    for (let [tabell, value] of Object.entries(environment.tabell)) {
      template.tabeller[tabell] += value;
    }

    for (let [tabell, value] of Object.entries(background.tabell)) {
      template.tabeller[tabell] += value;
    }
  }

  template.miljö = environment.namn;
  template.arketyp = archetype.namn;
  template.bakgrund = background.rubrik;

  mergeFardigheter();
  mergeTabeller();

  console.log(template);
};

module.exports = {
  generateBackground,
  generateArchetype,
  generateEnvironment,
  mergeTemplateWithResult
};
