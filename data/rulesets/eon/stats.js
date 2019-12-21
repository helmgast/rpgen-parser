const STATS = {
  STYRKA: "STY",
  TÅLIGHET: "TÅL",
  RÖRLIGHET: "RÖR",
  UPPFATTNING: "UPP",
  VILJA: "VIL",
  PSYKE: "PSY",
  VISDOM: "VIS",
  UTSTRÅLNING: "UTS"
};

const ALL_STATS = Object.keys(STATS);
ALL_STATS.push("VALFRIA");

module.exports = {
  STATS,
  ALL_STATS
};
