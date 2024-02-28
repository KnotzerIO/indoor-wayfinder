import { graphData, VertexData } from "@/store/graphData";

type NodeId = string;
interface Node {
  id: NodeId;
  priority: number;
}
class PriorityQueue {
  values: Node[];

  constructor() {
    this.values = [];
  }

  enqueue(id: NodeId, priority: number) {
    const newNode: Node = { id, priority };
    this.values.push(newNode);
    this.bubbleUp();
  }

  bubbleUp() {
    let idx = this.values.length - 1;
    const element = this.values[idx];
    while (idx > 0) {
      const parentIdx = Math.floor((idx - 1) / 2);
      const parent = this.values[parentIdx];
      if (element.priority >= parent.priority) break;
      this.values[parentIdx] = element;
      this.values[idx] = parent;
      idx = parentIdx;
    }
  }
  dequeue() {
    const min = this.values[0];
    const end = this.values.pop();
    if (this.values.length > 0 && end) {
      this.values[0] = end;
      this.sinkDown();
    }
    return min;
  }
  sinkDown() {
    let idx = 0;
    const length = this.values.length;
    const element = this.values[0];
    // eslint-disable-next-line no-constant-condition
    while (true) {
      const leftChildIdx = 2 * idx + 1;
      const rightChildIdx = 2 * idx + 2;
      let leftChild, rightChild;
      let swap = null;

      if (leftChildIdx < length) {
        leftChild = this.values[leftChildIdx];
        if (leftChild.priority < element.priority) {
          swap = leftChildIdx;
        }
      }
      if (rightChildIdx < length) {
        rightChild = this.values[rightChildIdx];
        if (
          (swap === null && rightChild.priority < element.priority) ||
          (swap !== null &&
            leftChild &&
            rightChild.priority < leftChild.priority)
        ) {
          swap = rightChildIdx;
        }
      }
      if (swap === null) break;
      this.values[idx] = this.values[swap];
      this.values[swap] = element;
      idx = swap;
    }
  }
}

class DijkstraCalculator {
  adjacencyList: { [key: NodeId]: { id: NodeId; weight: number }[] };

  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex: NodeId) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }

  addEdge(vertex1: NodeId, vertex2: NodeId, weight = 1) {
    this.adjacencyList[vertex1].push({ id: vertex2, weight });
    this.adjacencyList[vertex2].push({ id: vertex1, weight });
  }
  // Example: Calculate shortest path from v1 to v5
  //console.log(graph.calculateShortestPath("v1","v5")); // ["v1", "v3", "v4", "v5"]
  calculateShortestPath(start: NodeId, finish: NodeId) {
    const nodes = new PriorityQueue();
    const distances: { [key: NodeId]: number } = {};
    const previous: { [key: NodeId]: NodeId } = {};
    const path = []; //to return at end
    let smallest: string | null = null;
    //build up initial state
    for (const vertex in this.adjacencyList) {
      if (vertex === start) {
        distances[vertex] = 0;
        nodes.enqueue(vertex, 0);
      } else {
        distances[vertex] = Infinity;
        nodes.enqueue(vertex, Infinity);
      }
      delete previous[vertex];
    }
    // as long as there is something to visit
    while (nodes.values.length) {
      smallest = nodes.dequeue().id;
      if (smallest === finish) {
        //WE ARE DONE
        //BUILD UP PATH TO RETURN AT END
        while (smallest && previous[smallest]) {
          path.push(smallest);
          smallest = previous[smallest];
        }
        break;
      }
      if (smallest || distances[smallest] !== Infinity) {
        for (const neighbor in this.adjacencyList[smallest]) {
          //find neighboring node
          const nextNode = this.adjacencyList[smallest][neighbor];
          //calculate new distance to neighboring node
          const candidate = distances[smallest] + nextNode.weight;
          const nextNeighbor = nextNode.id;
          if (candidate < distances[nextNeighbor]) {
            //updating new smallest distance to neighbor
            distances[nextNeighbor] = candidate;
            //updating previous - How we got to neighbor
            previous[nextNeighbor] = smallest;
            //enqueue in priority queue with new priority
            nodes.enqueue(nextNeighbor, candidate);
          }
        }
      }
    }

    let finalPath: string[] = [];
    if (!smallest) {
      finalPath = path.reverse();
    } else {
      finalPath = path.concat(smallest).reverse();
    }

    if (finalPath.length <= 1) {
      // if the final path has only 1 or fewer elements, there was no traversal that was possible.
      return [];
    }

    return finalPath;
  }
}

export const graph = new DijkstraCalculator();

graphData.vertices.forEach((vertex) => {
  graph.addVertex(vertex.id);
});

graphData.edges.forEach((edge) => {
  //console.log(edge.from, edge.to);
  const { from, to } = edge;
  const fromVertex = graphData.vertices.find((vertex) => vertex.id === from);
  const toVertex = graphData.vertices.find((vertex) => vertex.id === to);

  if (fromVertex && toVertex) {
    //add the distance between the two vertices as the weight of the edge
    const length = calculateDistance(fromVertex, toVertex);
    graph.addEdge(from, to, length);
  }
});

function calculateDistance(vertex1: VertexData, vertex2: VertexData) {
  const dx = vertex2.cx - vertex1.cx;
  const dy = vertex2.cy - vertex1.cy;
  return Math.sqrt(dx * dx + dy * dy);
}
