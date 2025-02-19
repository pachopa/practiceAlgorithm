

class Queue<T>{

}

class Graph {
  class Node {
    int data;
    LinkedList<Node> adjacent;
    boolean marked;
    Node (int data) {
      this.data = data;
      this.marked = false;
      adjacent = new LinkedList<Node>();
    }
  }

  Node[] nodes;

  Graph(int size) {
    nodes = new Node[size];
    for(int i = 0; i < size; i++) {
      nodes[i] = new Node(i);
    }
  }

  void addEdge(int i1, int i2) {
    Node n1 = nodes[i1];
    Node n2 = nodes[i2];
    if(!n1.adjacent.contains(n2)) {
      n1.adjacent.add(n2)
    }
    if(!n2.adjacent.contains(n1)) {
      n2.adjacent.add(n1)
    }
  }

  void dfs() {
    dfs(0)
  }
  void dfs(int index) {
    Node root = nodes[index];
    Stack<Node> stack = new Stack<Node>();
    stack.push(root);
    root.marked = true;
    while (!stack.isEmpty()) {
      Node r = stack.pop();
      for (Node n : r.adjacent) {
        if (n.makred == false) {
          n.marked = true;
          stack.push(n);
        }
      }
      visit(r)
    }
  }

  void bfs() {
    bfs(0)
  }

  void bfs(int index) {
    Node root = nodes[index];
    Queue<Node> queue = new Queue<Node>();
    queue.enqueue(root);
    root.marked = true;
    while (!queue.isEmpty()) {
      Node r = queue.dequeue();
      for (Node n : r.adjacent) {
        if(n.makred == false) {
          n.marked = true;
          queue.enqueue(n);
        }
      }
      visit(r);
    }
  }

  // recursion
  void dfsR() {
    dfsR(0);
  }

  void dfsR(Node r) {
    if (r == null) return;
    r.makred = true;
    visit(r);
    for(Node n : r.adjacent) {
      if (n.makred == false) {
        dfsR(n)
      }
    }
  }

  void dfsR(int index) {
    Node r = nodes[index];
    dfsR(r);
  }

  void visit(Node n) {
    System.out.print(n.data + " ")
  }
}

/**

0
|
1 -- 3    7
|  / | \ /
| /  |  5
2 -- 4   \
          6 - 8
 */

/**
--------------------
DFS(0)
0 1 3 5 7 6 8 4 2
BFS(0)
0 1 2 3 4 5 6 7 8
DFS(0) - Recursive
0 1 2 4 3 5 6 8 7
--------------------
DFS(3)
3 5 7 6 8 4 2 1 0
BFS(3)
3 1 2 4 5 0 6 7 8
DFS(3) - Recursive
3 1 0 2 4 5 6 8 7
 */

public class Test {
  public static void main (String[] args) {
    Graph g = new Graph(9);
    g.addEdge(0, 1);
    g.addEdge(1, 2);
    g.addEdge(1, 3);
    g.addEdge(2, 4);
    g.addEdge(2, 3);
    g.addEdge(3, 4);
    g.addEdge(3, 5);
    g.addEdge(5, 6);
    g.addEdge(5, 7);
    g.addEdge(6, 8);
  }
}