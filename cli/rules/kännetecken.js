const regexes = {
  kännetecken: new RegExp(/\s?^Kännetecknet?\s?(\D*)(\dT6)/i),
  kännetecken_poäng: new RegExp(/(\d)\spoäng\sKännetecken/i)
};

const match = rule => {
  const match = rule.match(regexes.kännetecken);
  const poäng_match = rule.match(regexes.kännetecken_poäng);

  if (!match && !poäng_match) {
    return {
      identified: false,
      rule: rule
    };
  }

  if (match) {
    return {
      identified: true,
      kännetecken: match[1],
      value: match[2]
    };
  }

  if (poäng_match) {
    return {
      identified: true,
      kännetecken: true,
      points: poäng_match[1]
    };
  }
};

module.exports = match;
