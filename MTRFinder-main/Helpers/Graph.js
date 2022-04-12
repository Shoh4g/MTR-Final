export default class MTRGraph {
  constructor(stepSize) {
    this.stepSize = stepSize;
    this.numOfNodes = 0;
    this.AdjList = {};
    this.ends = {};
    this.routes = [];
    this.exits = {};
  }

  distToSteps(dist) {
    return Math.round(dist / this.stepSize);
  }

  addVertex(route, end = false, end_name = null) {
    this.numOfNodes++;
    route.forEach((route) => {
      route[0] = this.distToSteps(route[0]);
    });
    if (!end) {
      this.AdjList[this.numOfNodes] = [];
    }
    this.routes.push(route);
    if (end) {
      this.ends[end_name] = this.numOfNodes;
    }
  }

  addEdge(v, w) {
    this.AdjList[v].push(w);
  }

  printDebug() {
    console.log(this);
    console.log(this.routes);
  }

  returnStatedRoute(route) {
    let direction = "";
    if (route[1] === "F") {
      direction = "forward";
      return (
        "Take " +
        route[0] +
        " steps " +
        direction +
        (!!route[2] ? route[2] : "")
      );
    } else if (route[1] === "L") {
      direction = "Turn left ";
    }
    if (route[1] === "R") {
      direction = "Turn right ";
    }
    return (
      direction +
      "and take " +
      route[0] +
      " steps" +
      (!!route[2] ? route[2] : "")
    );
  }

  bfs(start, to, pred) {
    let queue = [start];
    let visited = [];
    for (let i = 0; i < this.numOfNodes; i++) {
      visited[i] = false;
      pred[i] = -1;
    }
    visited[start - 1] = true;
    while (queue.length > 0) {
      var s = queue.shift();
      let temp = -1;
      if (!!this.AdjList[s]) {
        for (var i = 0; i < this.AdjList[s].length; i++) {
          if (visited[this.AdjList[s][i] - 1] === false) {
            visited[this.AdjList[s][i] - 1] = true;
            pred[this.AdjList[s][i]] = s;
            queue.push(this.AdjList[s][i]);
            if (to === this.AdjList[s][i]) {
              return true;
            }
          }
        }
      }
    }
    return false;
  }

  findRoute(from, to) {
    let pred = [];
    if (!this.bfs(from, to, pred)) {
      return null;
    }
    let path = [];
    let crawl = to;
    path.push(crawl);
    while (pred[crawl] !== -1) {
      path.push(pred[crawl]);
      crawl = pred[crawl];
    }
    return this.nodesToRoute(path.reverse());
  }

  nodesToRoute(path) {
    var route = [];
    path.forEach((x) => {
      this.routes[x - 1].forEach((i) => {
        route.push(this.returnStatedRoute(i));
      });
    });
    return route;
  }
}

