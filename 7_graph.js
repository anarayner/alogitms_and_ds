

const graph = {}

graph.a =['b', 'c']
graph.b = ['f']
graph.c = ['d', 'e']
graph.d = ['f']
graph.e = ['f']
graph.f = ['g']

function breadthSearch (graph, start, eNd){
    let arr = [] // queue
    arr.push(start)
    console.log('start: ', start)
    while(arr.length > 0){
      const current  = arr.shift()
        console.log('current: ', current)
        console.log('arr: ', arr)
        console.log('graph[current]: ', graph[current])
        if(!graph[current ]){
            graph[current ] = []
        }
        if(graph[current ].includes(eNd)){
            return true
        } else{
            arr = [...arr, ...graph[current]] // [ 'b', 'c' ]
            console.log('New arr: ', arr)

        }
    }
    return false
}

console.log(breadthSearch(graph, 'a', 'g'))
