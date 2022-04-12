import KennedyTown from "./KennedyTown.js";
export default function useMap(name, stepSize) {
  var map = {};
  if (name === "kennedytown") {
    map = new KennedyTown(stepSize);
  } else if (name === ".....") {
    // ....
  }
  // .....
  return map;
}
