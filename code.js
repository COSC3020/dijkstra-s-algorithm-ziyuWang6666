const INF = Infinity;

function dijkstra(graph, source) {
    let V = graph.length;
    let dist = new Array(V).fill(INF);
    let path = new Array(V).fill(-1); // Array to store the previous node in the shortest path
    dist[source] = 0;

    // Keep track of visited vertices
    let visited = new Array(V).fill(false);

    // Repeat until all vertices are visited or unreachable
    while (visited.some((value) => !value)) {
        // Find the unmarked vertex with the lowest dist
        let minDist = INF;
        let u = -1;

        for (let v = 0; v < V; v++) {
            if (!visited[v] && dist[v] < minDist) {
                minDist = dist[v];
                u = v;
            }
        }

        // If no unvisited vertices with finite distance, break the loop
        if (u === -1) break;

        // Mark the vertex as visited
        visited[u] = true;

        // Update the distances for adjacent unvisited vertices
        for (let v = 0; v < V; v++) {
            if (graph[u][v] > 0 && !visited[v]) {
                let newDist = dist[u] + graph[u][v];
                if (newDist < dist[v]) {
                    dist[v] = newDist;
                    // Update the previous node in the path
                    path[v] = v;
                }
            }
        }
    }

    // Return the array of minimum distances
    return dist;
}


// resources from:
// https://medium.com/@danik560152/dijkstra-s-algorithm-how-it-works-362163614881
