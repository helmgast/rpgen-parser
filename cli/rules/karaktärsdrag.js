const match = rule => {
  return {
    identified: true,
    karaktärsdrag: true,
    input: rule,
    notAvailable: true
  };
};

module.exports = match;
