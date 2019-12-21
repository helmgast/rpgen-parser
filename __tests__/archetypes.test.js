import test from "ava";
import { generateArchetype } from "../lib/generator";

test.skip("can generate archetype", t => {
  const result = generateArchetype();
  t.pass();
});
