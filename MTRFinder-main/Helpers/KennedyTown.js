import  MTRGraph  from "./Graph.js";
export default class KennedyTown extends MTRGraph {
  constructor(stepSize) {
    super(stepSize);
    this.init();
  }
  init() {
    this.initializeExits();
    this.initializeVertices();
    this.initializeEdges();
  }

  initializeExits() {
    this.exits = {
      A: ["Stairs", "Escalator", "Elevator"],
      B: ["Stairs", "Escalator", "Elevator"],
      C: ["Stairs", "Escalator"],
    };
  }

  findExit(exit, method) {
    return this.findRoute(1, this.ends[exit + "_" + method]);
  }

  initializeVertices() {
    //1
    this.addVertex([[6.9, "R", null]]);
    //2
    this.addVertex([
      [30.72, "R", ", tap your card at the gate"],
      [4.5, "F", null],
    ]);
    //3
    this.addVertex([[0.9, "L", null]]);
    //4
    this.addVertex([
      [2.9, "L", null],
      [53.2, "R", null],
      [2.54, "L", null],
    ]);
    //5
    this.addVertex([
      [10.64, "R", null],
      [4.2, "R", null],
    ]);
    //6
    this.addVertex(
      [
        [3.0, "L", ", tap your card at the priority gate"],
        [6.0, "F", null],
        [1.5, "L", null],
        [2.1, "R", " into the Elevator to Exit A"],
      ],
      true,
      "A_Elevator"
    );
    //7
    this.addVertex([
      [19.48, "F", ", tap your card at the gate"],
      [12.28, "F", null],
      [11.1, "L", null],
    ]);
    //8
    this.addVertex([[3.6, "F", null]]);
    //9
    this.addVertex(
      [
        [6.3, "R", null],
        [1.2, "L", " to the Escalator to Exit B"],
      ],
      true,
      "B_Escalator"
    );
    //10
    this.addVertex(
      [
        [3.0, "L", null],
        [1.8, "R", " to the Escalator to Exit A"],
      ],
      true,
      "A_Escalator"
    );
    //11
    this.addVertex(
      [
        [3.3, "F", null],
        [1.5, "L", null],
        [1.8, "R", " onto the Stairs to Exit A"],
      ],
      true,
      "A_Stairs"
    );
    //12
    this.addVertex(
      [
        [3.0, "F", null],
        [6.6, "R", null],
        [3.6, "R", " onto the Escalator to Exit C"],
      ],
      true,
      "C_Escalator"
    );
    //13
    this.addVertex(
      [
        [2.54, "R", null],
        [4.2, "R", " onto the Stairs to Exit C"],
      ],
      true,
      "C_Stairs"
    );
    //14
    this.addVertex(
      [
        [4.8, "R", null],
        [1.8, "L", " onto the Stairs to Exit B"],
      ],
      true,
      "B_Stairs"
    );
    //15
    this.addVertex(
      [[7.8, "F", " into the Elevator to Exit B"]],
      true,
      "B_Elevator"
    );
  }
  initializeEdges() {
    this.addEdge(1, 2);
    this.addEdge(1, 3);
    this.addEdge(2, 4);
    this.addEdge(2, 5);
    this.addEdge(3, 6);
    this.addEdge(3, 7);
    this.addEdge(4, 8);
    this.addEdge(4, 9);
    this.addEdge(5, 10);
    this.addEdge(5, 11);
    this.addEdge(7, 12);
    this.addEdge(7, 13);
    this.addEdge(8, 14);
    this.addEdge(8, 15);
  }
}
