const regexes = {
  choice: new RegExp(/(valfria|valfri)/gi)
};

const match = rule => {
  if (rule.match(regexes.choice)) {
    const match = rule.match(regexes.choice);
    return {
      identified: true,
      händelse: match[1],
      input: rule,
      value: 1,
      notAvailable: true
    };
  }
  return {
    identified: false,
    input: rule
  };
};

module.exports = match;
