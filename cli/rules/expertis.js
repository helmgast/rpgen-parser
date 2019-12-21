const regexes = {
  expertis: new RegExp(/\s?^Expertis(en)?\s?(\D*)(\dT6)/i),
  expertis_poäng: new RegExp(/\s?(\d)\s?poäng\s?Expertiser/i)
};

const match = rule => {
  if (regexes.expertis_poäng.test(rule)) {
    const match = rule.match(regexes.expertis_poäng);
    return {
      identified: true,
      expertise: true,
      points: match[1]
    };
  }
  const match = rule.match(regexes.expertis);
  if (match) {
    return {
      identified: true,
      expertise: match[2],
      value: match[3]
    };
  } else {
    return {
      identified: false,
      rule: rule
    };
  }
};

module.exports = match;
