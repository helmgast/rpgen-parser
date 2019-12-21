const {
  ALL_SKILLS,
  SKILL_CATEGORIES
} = require("../../data/rulesets/eon/starting_skills");

const regexes = {
  l_alla: new RegExp(/\salla\s/gi),
  l_one: new RegExp(/\sen\s/gi),
  l_choice: new RegExp(/\svalfri\s/gi),
  svårlärd: new RegExp(/\s?Svårlärd\s?/i)
};

const matches = (array, match) => {
  return array
    .filter(item => {
      if (match.toLowerCase().includes(item.toLowerCase())) {
        return item;
      }
      return null;
    })
    .filter(Boolean);
};

const match = rule => {
  if (rule.match(regexes.svårlärd)) {
    const exists = matches(SKILL_CATEGORIES, rule);
    return exists.map(exist => ({
      identified: true,
      input: rule,
      skill: exist,
      difficult: true
    }));
  }
  if (rule.search(regexes.l_alla) !== -1) {
    // it matches a sub skill set (ie. Rörelsefärdigheter)
    const exists = matches(SKILL_CATEGORIES, rule);
    return exists.map(exist => ({
      identified: true,
      input: rule,
      skill: exist,
      cheap: true
    }));
  } else if (rule.search(regexes.l_one) !== -1) {
    const exists = matches(SKILL_CATEGORIES, rule);
    return exists.map(exist => ({
      identified: true,
      input: rule,
      skill: exist,
      cheap: true
    }));
    // It a subset of a sub skill, ie. Pick one skill from the subset Rörelsefärdigheter
  } else if (rule.search(regexes.l_choice) !== -1) {
    const exists = matches(SKILL_CATEGORIES, rule);
    return exists.map(exist => ({
      identified: true,
      input: rule,
      skill: exist,
      cheap: true
    }));
  } else {
    const exists = matches(ALL_SKILLS, rule);
    return exists.map(exist => ({
      identified: true,
      input: rule,
      skill: exist,
      cheap: true
    }));
    // It's a plain skill, we hope.
  }
};

module.exports = match;
