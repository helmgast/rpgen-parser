import test from "ava";
const { parseRuleDefinition } = require("../cli/events");
const generateHandelse = require("../tmp/handelse");
const events = require("../data/rulesets/eon/events");

test("check Färder & Äventyr coverage", t => {
  const events = generateHandelse();

  // Start with Färder & Äventyr
  const result = events.farderaventyr.map(parseRuleDefinition).filter(Boolean);
  const identifiedCount = result.length;
  const percentage = `${(
    (identifiedCount / events.farderaventyr.length) *
    100
  ).toFixed(2)}% of Färder & Äventyr covered`;
  console.log(percentage);
  // TODO: ACTUALLY LOOK AT HOW MANY UNIDENTIFIED/EXCEPTIONS WE HAVE.
  t.pass();
});

test.skip("can use effect creator", t => {
  console.log(events[1].choices);
});
