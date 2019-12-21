const { SKILL_CATEGORIES } = require("../../data/rulesets/eon/starting_skills");

const regexes = {
  skillValue: new RegExp(/(\d)\senheter/i),
  skillChoice: new RegExp(/välj/i),
  language: new RegExp(/(språk|valfria)/gi)
};

const matches = (array, match) => {
  return array.filter(item => {
    if (match.toLowerCase().includes(item.toLowerCase())) {
      return item;
    }
    return null;
  });
};

const match = rule => {
  const exists = matches(SKILL_CATEGORIES, rule);
  if (exists.length) {
    if (rule.search(regexes.language) !== -1) {
      const match = rule.match(regexes.language);
      console.log(match);
      process.exit(0);
      return {
        identified: true,
        skill: "Språk",
        units: true,
        value: match,
        input: rule
      };
    }

    if (rule.search(regexes.skillChoice) !== -1) {
      const skillValues = rule.match(regexes.skillValue);
      const tmp = exists.map(stat => {
        return {
          identified: true,
          skill: stat,
          units: true,
          value: skillValues[1],
          input: rule,
          choice: true
        };
      });

      return tmp;
    }

    const skillValues = rule.match(regexes.skillValue);
    if (!skillValues) {
      return {
        identified: false,
        input: rule
      };
    }
    const tmp = exists.map(stat => {
      return {
        identified: true,
        skill: stat,
        units: true,
        value: skillValues[1],
        input: rule
      };
    });
    return tmp;
  } else {
    return {
      identified: false,
      input: rule
    };
  }
};

module.exports = match;
