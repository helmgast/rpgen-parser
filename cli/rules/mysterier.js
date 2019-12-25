const regexes = {
  mysterier: new RegExp(/(\d+|ett|en)\smysterier?/i)
};
const match = rule => {
  const match = rule.match(regexes.mysterier);
  if (match) {
    return {
      identified: true,
      mystery: true,
      points: match[1],
      input: rule
    };
  } else {
    return {
      identified: false,
      input: rule
    };
  }
};

module.exports = match;
