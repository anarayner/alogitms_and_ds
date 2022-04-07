

const graph = {}

graph.a = {b: 2, c: 1}
graph.b = {f: 7}
graph.c = {d: 5, e: 2}
graph.d = {f: 2}
graph.e = {f: 1}
graph.f = {g: 1}
graph.g = {}

function sortPath (graph, start, eNd){
    const costs = {} // sort path
    const processed = []
    let Neighbors ={}
    console.log(Object.keys(graph))
    Object.keys(graph).forEach(node => {
        if(node !== start){
            console.log('node: ', node)
            let value = graph[start][node]
            console.log('value: ', value)
            costs[node] = value || 10000000
        }
    })
    console.log(costs)
    let node = NodeLowestCost(costs, processed)

    while (node){
        const cost = costs[node]
        Neighbors = graph[node]
    }

    function NodeLowestCost(costs, processed){
        let lowestCost = 10000000
        let lowestNode
        Object.key(costs).forEach(node => {
            let cost = costs[node]
            if(cost < lowestCost && !processed.includes(node)){
                lowestCost = cost
                lowestNode = node
            }
        })
        return lowestCost
    }


}

console.log(sortPath(graph, 'a', 'g'))
