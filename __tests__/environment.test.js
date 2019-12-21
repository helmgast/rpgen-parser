import test from "ava";
import { generateEnvironment } from "../lib/generator";

test.skip("can generate environment", t => {
  const result = generateEnvironment();
  t.pass();
});
