const regexes = {
  doser: new RegExp(/(\d+)\sdoser/gi)
};

const match = rule => {
  return {
    identified: true,
    doser: rule,
    input: rule
  };
};

module.exports = match;
