const match = rule => {
  return {
    identified: true,
    background: true,
    input: rule,
    notAvailable: true
  };
};

module.exports = match;
