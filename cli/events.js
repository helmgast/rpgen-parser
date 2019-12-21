const { promisify } = require("util");
const { writeFile } = require("fs");
const path = require("path");
const generateHandelse = require("../tmp/handelse");
const _ = require("lodash");
const { parseLineForRuleDefinitions } = require("./parser");

const pathToRuleSet = path.resolve("data", "rulesets", "eon", "events.json");

const writeFileAsync = promisify(writeFile);

const transformAnton = (tabellresultat, index) => {
  let clone = tabellresultat;

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

const parseRuleDefinition = event => {
  const { beskrivninghak: effect } = event;
  // console.log(effect);
  const defs = parseLineForRuleDefinitions(effect);
  // console.log("----------------");
  return defs;
};

const getEventSubInfo = ev => {
  const raw = _.flattenDeep(ev.subval);
  return raw;
};

const writeSubEffects = subEvent => {
  const subChoices = subEvent
    .map(r => {
      if (r.antalsubval) {
        return {
          choices: r.antalsubval,
          effects: []
        };
      }
      return null;
    })
    .filter(Boolean);

  let subcategoriesSeen = 0;
  subEvent.forEach(r => {
    if (r.antalsubval) {
      subcategoriesSeen += 1;
    }

    if (!subChoices[subcategoriesSeen]) {
      subChoices[subcategoriesSeen] = {
        choices: 1,
        effects: []
      };
    }

    delete r.valdasub;
    delete r.vald;
    subChoices[subcategoriesSeen].effects.push(r);
  });

  return subChoices;
};

const writeEffectInfo = ev => {
  return {
    rubrik: ev.rubrik,
    beskrivning: ev.beskrivning,
    effekt: ev.beskrivninghak,
    tabell: ev.tabellnamn,
    nummer: ev.nummer
  };
};

const writeEvents = () => {
  console.log("Writing events");
  return new Promise(async (resolve, reject) => {
    const eventsResult = {};
    const events = generateHandelse();

    const newEvents = events.farderaventyr.map(ev => {
      const subEvents = getEventSubInfo(ev);
      const description = writeEffectInfo(ev);
      // const subChoices = writeSubEffects(subEvents);
      // description.choices = subChoices;
      return description;
    });

    await writeFileAsync(pathToRuleSet, JSON.stringify(newEvents));

    //   }
    // });
    // console.log(events);
    // const eventArr = Object.values(events);
    // for (let event of eventArr) {
    //   event.map(parseRuleDefinition);
    // }

    // Start with färder & äventyr
    // events.farderaventyr.map(parseRuleDefinition);

    // eventsResult.farder = events.farderaventyr
    //   .map(transformAnton)
    //   .filter(Boolean);

    // await writeFileAsync(pathToRuleSet, JSON.stringify(eventsResult));
    resolve(true);
  });
};

(async () => {
  await writeEvents();
})();

module.exports = {
  parseRuleDefinition,
  parseLineForRuleDefinitions
};
