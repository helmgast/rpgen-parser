const regexes = {
  kännetecken: new RegExp(/\s?^Kännetecknet?\s?(\D*)(\dT6)/i)
};

const match = rule => {
  const match = rule.match(regexes.kännetecken);
  if (match) {
    return {
      identified: true,
      kännetecken: match[1],
      value: match[2]
    };
  } else {
    return {
      identified: false,
      rule: rule
    };
  }
};

module.exports = match;
