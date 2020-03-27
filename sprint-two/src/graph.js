

// Instantiate a new graph
var Graph = function() {
  //implied Object.creat(Graph.prototype);
  this.vertices = [];
  // this.connected = [];
  this.values = [];
  // this.connected = {};
  //implied return this;
};

var Vertex = function (num) {
  this.edges = [];
  this.num = num;
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(num) {
  var newVertex = new Vertex(num);
  this.vertices.push(newVertex);
  this.values.push(num);
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(num) {
  // return this.values.includes(num);
  return this.vertices.map(z => z.num === num).reduce((x, y) => x || y);
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(num) {
  var index = this.values.indexOf(num);
  //remove edges from nodes that are connected
  for (var i = 0; i < this.vertices.length; i++) {
    if (this.hasEdge(this.vertices[i], this.vertices[index])) {
      this.removeEdge(this.vertices[i], this.vertices[index]);
    }
  }
  // and / or remove connections from this.connected
  this.vertices.splice(index, 1);
  this.values.splice(index, 1);
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {

  var result = false;
  for (var vertex of this.vertices) {
    if (vertex.num === fromNode) {
      fromNode = vertex;
    }
  }

  for (var node of fromNode.edges) {
    result = result || (node.num === toNode);
  }

  return result;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNodeValue, toNodeValue) {

  var fromNode, toNode;

  for (var vertex of this.vertices) {
    if (vertex.num === fromNodeValue) {
      fromNode = vertex;
    }
  }

  for (var vertex of this.vertices) {
    if (vertex.num === toNodeValue) {
      toNode = vertex;
    }
  }

  fromNode.edges.push(toNode);
  toNode.edges.push(fromNode);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


