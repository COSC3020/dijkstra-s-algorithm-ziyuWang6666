[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-718a45dd9cf7e7f842a935f5ebbe5719a5e09af4491e668f4dbf3b35d5cca122.svg)](https://classroom.github.com/online_ide?assignment_repo_id=12413557&assignment_repo_type=AssignmentRepo)
# Dijkstra's Algorithm

Recall the pseudocode for Dijkstra's algorithm:
- initialize the dist to each vertex to $\infty$, source to 0
- while there are unmarked vertices left in the graph
    - select the unmarked vertex $v$ with the lowest dist
    - mark $v$ with distance dist
    - for each edge $(v,w)$
        - dist($w$) = min $\left(\textrm{dist}(w), \textrm{dist}(v) + \textrm{weight of }(v, w)\right)$

Implement Dijkstra's algorithm. Start with the template I provided in `code.js`
and test your new function. I have not provided any test code, but you can base
yours on test code from other exercises.

The choice of data structures is up to you -- your implementation does not have
to be the most efficient one!

## Runtime Analysis

What is the big $\Theta$ complexity of your implementation? Add your
answer, including your reasoning, to this markdown file.


#### Answer: the total worst-case time complexity is $O(V^2)$, and V is the number of vertices.

1. The dist, path, and visited arrays have a size equal to the number of vertices. The worst-case time complexity is $O(V)$ since it requires iterating through all vertices at once.s

2. The while operation repeatedly searches for vertices that have not been visited. In the worst case, each vertex goes through this process at least once. The time complexity of the while loop is $O(V)$. The two separate loops inside the while loop also contribute to the complexity: the first one checks if the vertex is unmarked and has the minimum distance, with a time complexity of $O(V)$. The second for loop updates the distances for adjacent unvisited vertices, with a time complexity of $O(V)$. Considering these together, the total worst-case time complexity is $O(V^2)$.

   
