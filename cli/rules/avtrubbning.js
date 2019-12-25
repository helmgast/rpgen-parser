const regexes = {
  avtrubbning: new RegExp(/\s?(\d?)\s?Avtrubbningskryss\s?(för)?\s?(\D*)/i),
  valfri: new RegExp(/\svalfria?\s/gi)
};

const match = rule => {
  const match = rule.match(regexes.avtrubbning);
  if (match) {
    const any = rule.match(regexes.valfri);
    if (any) {
      return {
        identified: true,
        avtrubbning: "Valfri",
        value: match[1]
      };
    }

    return {
      identified: true,
      avtrubbning: match[3],
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
