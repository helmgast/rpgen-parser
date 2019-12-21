import test from "ava";
import { generateBackground } from "../lib/generator";

test.skip("can generate background", t => {
  const result = generateBackground();
  t.pass();
});
