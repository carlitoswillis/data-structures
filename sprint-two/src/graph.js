

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
  return newVertex;
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(num) {
  // return this.values.includes(num);
  if (this.vertices.length === 0 ) {
    return false;
  }
  return this.vertices.map(z => z.num === num).reduce((x, y) => x || y);
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(num) {
  var index = this.values.indexOf(num);
  //remove edges from nodes that are connected
  for (var i = 0; i < this.vertices.length; i++) {

    // skip over self
    if (this.hasEdge(this.vertices[i].num, this.vertices[index].num)) {
      this.removeEdge(this.vertices[i].num, this.vertices[index].num);
    }
  }
  // and / or remove connections from this.connected
  this.vertices.splice(index, 1);
  this.values.splice(index, 1);
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.

Graph.prototype.getVertex = function(num) {
  var result;
  for (var vertex of this.vertices) {
    if (vertex.num === num) {
      result = vertex;
    }
  }
  return result;
};

Graph.prototype.hasEdge = function(fromNode, toNode) {

  var result = false;

  fromNode = this.getVertex(fromNode);

  for (var i = 0; i < fromNode.edges.length; i++) {
    result = result || (fromNode.edges[i].num === toNode);
  }

  return result;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNodeValue, toNodeValue) {

  var fromNode, toNode;

  fromNode = this.getVertex(fromNodeValue);
  toNode = this.getVertex(toNodeValue);

  fromNode.edges.push(toNode);
  toNode.edges.push(fromNode);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  fromNode = this.getVertex(fromNode);
  toNode = this.getVertex(toNode);

  toNode.edges.splice(toNode.edges.indexOf(fromNode), 1);
  fromNode.edges.splice(fromNode.edges.indexOf(toNode), 1);

};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  this.vertices.map((node) => cb(node.num));
  // for (var i = 0; i < this.vertices.length; i++) {
  //   cb(this.vertices[i].num);
  // }
  // low key
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


