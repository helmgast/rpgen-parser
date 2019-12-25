import test from "ava";
import { isArray } from "util";
const print = require("prettyoutput");
const { parseRuleDefinition } = require("../cli/events");
const { getPossibleRulesFromLine } = require("../cli/parser");
const generateHandelse = require("../tmp/handelse");
const events = require("../data/rulesets/eon/events");

const path = require("path");
const { promisify } = require("util");
const { readFile, writeFile } = require("fs");
const writeFileAsync = promisify(writeFile);

test.skip("check Färder & Äventyr coverage", async t => {
  const events = generateHandelse();

  // Start with Färder & Äventyr
  const result = events.farderaventyr
    .map((rule, index) => {
      if (index === 0) {
        return null;
      }
      return parseRuleDefinition(rule);
    })
    .filter(Boolean);
  const identifiedCount = result.length;
  const percentage = `${(
    (identifiedCount / events.farderaventyr.length) *
    100
  ).toFixed(2)}% of Färder & Äventyr covered`;
  console.log(percentage);
  // TODO: ACTUALLY LOOK AT HOW MANY UNIDENTIFIED/EXCEPTIONS WE HAVE.
  // await writeFileAsync(
  //   path.join(".", "tmp", "events.json"),
  //   JSON.stringify(result)
  // );
  t.pass();
});

test.skip("Färder & Äventyr", async t => {
  const events = generateHandelse();

  const rules = events.farderaventyr;
  for (let rule of rules) {
    if (rule.nummer) {
      const numberOfRules = getPossibleRulesFromLine(rule).length;
      const defs = parseRuleDefinition(rule);
      t.assert(
        defs.effects.length === numberOfRules,
        "Correct amount of effects"
      );
    }
  }
});

test.skip("Intriger & Illgärningar", async t => {
  const events = generateHandelse();

  const rules = events.intrigerillgarningar;
  for (let rule of rules) {
    if (rule.nummer) {
      const numberOfRules = getPossibleRulesFromLine(rule).length;
      const defs = parseRuleDefinition(rule, false);
      t.assert(
        defs.effects.length === numberOfRules,
        "Correct amount of effects"
      );
    }
  }
});

test.skip("Kunskap & Mysterier", async t => {
  const events = generateHandelse();

  const rules = events.kunskapmysterier;
  for (let rule of rules) {
    if (rule.nummer) {
      const numberOfRules = getPossibleRulesFromLine(rule).length;
      const defs = parseRuleDefinition(rule, false);
      t.assert(
        defs.effects.length === numberOfRules,
        "Correct amount of effects"
      );
    }
  }
});

test.only("Strider & Drabbningar", async t => {
  const events = generateHandelse();

  const rules = events.striderdrabbningar;
  for (let rule of rules) {
    if (rule.nummer) {
      const numberOfRules = getPossibleRulesFromLine(rule).length;
      const defs = parseRuleDefinition(rule, false);
      t.assert(
        defs.effects.length === numberOfRules,
        "Correct amount of effects"
      );
    }
  }
});

test.skip("can use effect creator", t => {
  console.log(events[1].choices);
});
