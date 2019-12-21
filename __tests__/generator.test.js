import test from "ava";
import {
  generateArchetype,
  generateBackground,
  generateEnvironment,
  mergeTemplateWithResult
} from "../lib/generator";
import generateCharacterTemplate from "../data/rulesets/eon/character_generation";

test.skip("can generate a random character", t => {
  const archetype = generateArchetype();
  const environment = generateEnvironment();
  const background = generateBackground();

  const result = mergeTemplateWithResult(archetype, environment, background);
  t.pass();
});
