const regexes = {
  avtrubbning: new RegExp(/\s?(\d?)\s?Avtrubbningskryss\s?för\s?(\D*)/i)
};

const match = rule => {
  const match = rule.match(regexes.avtrubbning);
  if (match) {
    return {
      identified: true,
      avtrubbning: match[2],
      value: match[1]
    };
  } else {
    return {
      identified: false,
      rule: rule
    };
  }
};

module.exports = match;
