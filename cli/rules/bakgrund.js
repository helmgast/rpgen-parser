const match = rule => {
  return {
    identified: true,
    background: true,
    input: rule,
    nyi: true,
    notAvailable: true
  };
};

module.exports = match;
