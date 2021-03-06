const { ALL_STATS } = require("../../data/rulesets/eon/stats");
const skillMatch = require("./enheter");

const regexes = {
  statValue: new RegExp(/(\+\d|\–\d|\+\dT6)\s([a-zA-ZÅÄÖåäö]*)/i),
  hasChoice: new RegExp(/välj/i),
  hasSkills: new RegExp(/\senheter\s/i)
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
  const exists = matches(ALL_STATS, rule);
  if (exists.length) {
    if (rule.search(regexes.hasChoice) !== -1) {
      // Do something here
      const stats = rule.match(regexes.statValue);
      const tmp = exists.map(stat => {
        return {
          identified: true,
          stat: stat,
          value: stats[1],
          input: stats.input,
          choice: true
        };
      });
      return tmp;
    }

    const stats = rule.match(regexes.statValue);
    const tmp = exists.map(stat => {
      return {
        identified: true,
        stat: stat,
        value: stats[1],
        input: stats.input
      };
    });
    return tmp;
  }

  return {
    identified: false,
    input: rule
  };
};

module.exports = match;
