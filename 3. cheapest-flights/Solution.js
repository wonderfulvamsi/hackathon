function findCheapestPrice(n, flights, src, dst, k) {
    const toAdjList = (arr)=>{
        let g = {}
        for(let i =0;i<arr.length;i++){
            u = arr[i][0]
            v = arr[i][1]
            c = arr[i][2]
            if(g[u] && g[u].length){
                g[u].push([v,c])
            }
            else{
                g[u] = []
                g[u].push([v,c])
            }
        }
        return g
    }

    let g = toAdjList(flights)
    console.log(g)

    const dfs = (src, dst, k, cost=0)=>{
        //base case
        if(src == dst){
            return cost
        }
        if(k==0){
            i=0
            while(i<g[src].length){
                if(g[src][i][0] == dst){
                    return g[src][i][2]
                }
                i+=1
            }
        }
    }
    return -1
}

// Test case 1
const flights1 = [[0, 1, 100], [1, 2, 100], [2, 0, 100], [1, 3, 600], [2, 3, 200]];
console.log("Actual: " + findCheapestPrice(4, flights1, 0, 3, 1) + ", Expected: 700");

// Test case 2
const flights2 = [[0, 1, 100], [1, 2, 100], [2, 0, 100], [1, 3, 600], [2, 3, 200]];
console.log("Actual: " + findCheapestPrice(4, flights2, 0, 3, 0) + ", Expected: -1");

// Test case 3
const flights3 = [[0, 1, 100], [1, 2, 100], [2, 0, 100], [1, 3, 600], [2, 3, 200]];
console.log("Actual: " + findCheapestPrice(3, flights3, 0, 2, 0) + ", Expected: -1");