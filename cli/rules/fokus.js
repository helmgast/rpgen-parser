const match = rule => {
  return {
    identified: true,
    focus: true,
    input: rule,
    notAvailable: true
  };
};

module.exports = match;
