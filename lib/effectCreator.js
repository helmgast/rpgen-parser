const createSkillEffect = (skill, value) => ({
  skill: skill,
  value: value
});

const createStatEffect = (stat, value) => ({
  stat,
  value
});

const createChoiceStatEffect = (choices, value) =>
  choices.map(c => createStatEffect(c, value));

const createExpertiseEffect = (name, value) => ({
  skill: name,
  expertise: true,
  value: value
});

module.exports = {
  createSkillEffect,
  createStatEffect,
  createChoiceStatEffect,
  createExpertiseEffect
};
