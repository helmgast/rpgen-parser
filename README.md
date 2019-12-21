## Character / Rule Parser

### How a character is made, in order

- A background is rolled.
- A race is picked.
- An archetype is picked.
- An environment is picked.
- Stats are set
- Events are rolled
- Expertises, Crafts (Hantverk) and Features (Kännetecken) are bought.
- Skills are purchased.
- Character traits (Karaktärsdrag) are chosen.
- Derived attributes (Härledda attribut) are calculated.
- Equipment is purchased.

### Assumptions on dataset

- Each result of a roll from the event/background tables are split by a `.`
  - "Välj Lättlärd i en Stridsfärdighet. +2 till Styrka"
  - The above results will be handled individually.

### Thought process

- Each and every rule/roll that is done during the character creation phase needs to be represented by one or more effects.
  - A background-roll that text-wise produces +2 to UTS, and Lättlärd in Charm should produce two effects:
    - First effect will grant the character +2 to UTS.
    - Second effect will grant the character Lättlärd on the skill Charm.
  - Ultimately, a randomized character should be able to be "reverse-engineered" through the list of effects given by the system.
- All additions to dice rolls should be converted from an integer to the readable format of XT6+X.
  - Since a 2T6 gets converted to 3T6 on the fourth bonus value (from 2T6+3 to 2T6+4), each bonus die is worth 4.
    - This technically means a 2T6 is worth 8.
    - This makes it much easier for me to calculate the worth, since I don't have to convert back and forth.
    - When f.ex adding +2 to UTS, I don't need to care what the previous value was, just add two, and let the display part convert the total value to XT6+Y format.
- The current data sources does not contain rules/data from Strid/Magi.
  - See if there are updated values in the current RP generator.
- A set of rolls will produce "CHOICE" based effects, where the user has to pick between a set of choices.
  - In a fully randomized character, this should probably be randomized as well, but for end users, this should be presented as a set of CHOICES.
    - Each choice should present itself with the full effect, as well as showing what the result would be of picking a certain CHOICE (which skills or stats that might increase)
- It's okay if this application cannot handle _ALL_ results of the background/events.
  - We do need to decorate the effects of those results so that the end users know that these effects are not accounted for, and has to be manually added.
  - There should be some sort of CLI command that visualises which effects that aren't implemented.

### Current things in place

- Backgrounds
- Archetypes
- Environments

- Events
  - Lättlärd
  - Stats (this has begun)
