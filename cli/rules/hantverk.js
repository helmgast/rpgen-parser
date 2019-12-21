const regexes = {
  hantverk: new RegExp(/\s?^Hantverk(et)?\s?(\D*)(\dT6)/i),
  hantverk_poäng: new RegExp(/\s?(\d)\s?poäng\s?Hantverk/i)
};

const match = rule => {
  if (rule.match(regexes.hantverk_poäng)) {
    const match = rule.match(regexes.hantverk_poäng);
    return {
      identified: true,
      hantverk: true,
      points: match[1]
    };
  }
  const match = rule.match(regexes.hantverk);
  if (match) {
    return {
      identified: true,
      hantverk: match[2],
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
