const { promisify } = require("util");
const { readFile, writeFile } = require("fs");
const path = require("path");
const generateBakgrund = require("../tmp/bakgrund");

const pathToRuleSet = path.resolve(
  "data",
  "rulesets",
  "eon",
  "backgrounds.json"
);

const readFileAsync = promisify(readFile);
const writeFileAsync = promisify(writeFile);

const transformAnton = (tabellresultat, index) => {
  let clone = tabellresultat;

  // Get rid of first
  if (clone.subval) {
    return null;
  }

  clone.resultat = index;
  clone.tabell = {};
  clone.fardigheter = {};
  clone.extra = {};

  if (clone.kunskapmysterier) clone.tabell.kunskap = clone.kunskapmysterier;
  if (clone.farderaventyr) clone.tabell.aventyr = clone.farderaventyr;
  if (clone.intrigerillgarningar)
    clone.tabell.intriger = clone.intrigerillgarningar;
  if (clone.striderdrabbningar) clone.tabell.strider = clone.striderdrabbningar;

  if (clone.valfriatabellslag) clone.tabell.valfri = clone.valfriatabellslag;

  if (clone.kunskapsfardigheterenheter)
    clone.fardigheter.kunskap = clone.kunskapsfardigheterenheter;

  if (clone.socialafardigheterenheter)
    clone.fardigheter.sociala = clone.socialafardigheterenheter;

  if (clone.rorelsefardigheterenheter)
    clone.fardigheter.rorelse = clone.rorelsefardigheterenheter;

  if (clone.stridsfardigheterenheter)
    clone.fardigheter.strid = clone.stridsfardigheterenheter;

  if (clone.vildmarksfardigheterenheter)
    clone.fardigheter.vildmark = clone.vildmarksfardigheterenheter;

  if (clone.mystikfardigheterenheter)
    clone.fardigheter.mystik = clone.mystikfardigheterenheter;

  if (clone.valfriaenheter) clone.fardigheter.valfria = clone.valfriaenheter;

  if (clone.hantverkpoang) clone.extra.hantverk = clone.hantverkpoang;
  if (clone.kannetackenpoang) clone.extra.kannetecken = clone.kannetackenpoang;
  if (clone.expertispoang) clone.extra.expertis = clone.expertispoang;
  if (clone.sprakenheter) clone.extra.sprak = clone.sprakenheter;

  // Fix for damarien?
  if (clone.kunskapsfardigheter)
    clone.fardigheter.kunskap = clone.kunskapsfardigheter;

  if (clone.kanneteckenpoang) clone.extra.kannetecken = clone.kanneteckenpoang;

  delete clone.kunskapmysterier;
  delete clone.farderaventyr;
  delete clone.intrigerillgarningar;
  delete clone.striderdrabbningar;
  delete clone.valfriatabellslag;

  delete clone.kunskapsfardigheterenheter;
  delete clone.socialafardigheterenheter;
  delete clone.rorelsefardigheterenheter;
  delete clone.stridsfardigheterenheter;
  delete clone.vildmarksfardigheterenheter;
  delete clone.mystikfardigheterenheter;
  delete clone.valfriaenheter;

  delete clone.hantverkpoang;
  delete clone.kannetackenpoang;
  delete clone.expertispoang;
  delete clone.sprakenheter;

  // Fix for damarien
  delete clone.kunskapsfardigheter;
  delete clone.kanneteckenpoang;

  // Validation
  validateExtraProperties(clone);

  return clone;
};

const existingProperties = {};

const validateExtraProperties = item => {
  const existingKeys = Object.keys(existingProperties);
  const keys = Object.keys(item);

  keys.forEach(key => {
    if (!existingKeys.includes(key)) {
      existingProperties[key] = true;
    }
  });
};

const writeBackgrounds = () => {
  return new Promise(async (resolve, reject) => {
    const bakgrundsResultat = {};
    bakgrundsResultat.jargien = [];
    const bakgrund = generateBakgrund();
    bakgrundsResultat.jargien = bakgrund.jargiensbefolkning
      .map(transformAnton)
      .filter(Boolean);

    bakgrundsResultat.vildmark = bakgrund.vildmark
      .map(transformAnton)
      .filter(Boolean);

    bakgrundsResultat.nermada = bakgrund.nermadasbefolkning
      .map(transformAnton)
      .filter(Boolean);

    bakgrundsResultat.damarien = bakgrund.damarien
      .map(transformAnton)
      .filter(Boolean);

    bakgrundsResultat.jarvskogen = bakgrund.jarvskogen
      .map(transformAnton)
      .filter(Boolean);

    bakgrundsResultat.ghor = bakgrund.ghor.map(transformAnton).filter(Boolean);
    await writeFileAsync(pathToRuleSet, JSON.stringify(bakgrundsResultat));
    resolve(true);
  });
};

(async () => {
  await writeBackgrounds();
})();
