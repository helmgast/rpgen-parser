const regexes = {
  pengar: new RegExp(/(\dT6×\d*).*(silver)/i)
};

const match = rule => {
  const pengar = rule.match(regexes.pengar);
  if (pengar) {
    return {
      identified: true,
      input: rule,
      currency: pengar[2],
      value: pengar[1]
    };
  } else {
    return {
      identified: false,
      input: rule
    };
  }
};

module.exports = match;
