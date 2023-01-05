const path =[];
const graph=[];

function getAllNodes(){
    let arr=newBoard.nodes;
    let allNodes=[];
    for(let i=0;i<arr.length;i++){
        allNodes.push(arr[i]);
    }
    return allNodes;
}

// function animateDijkstra(){
//     let traversedPath=dijkstra();
//     console.log(Object.keys(traversedPath));
//     let last=traversedPath[traversedPath.length];
//     if(last===newBoard.sink){ //last element in path is equal to sink
        
//     }
// }
async function dijkstra(){
    let start=newBoard.getNode(newBoard.src);
    let end=newBoard.getNode(newBoard.sink);
    newBoard.getNode(newBoard.src).distance=0;
    const unvisited=getAllNodes();
    while(!!unvisited.length){
        await sleep(1); //timeout fn for clearer viz
        
        sortByDist(unvisited);
        const closest=unvisited.shift();
        if(closest.distance===9999){
            return path;
        }
        let closestId=closest.id;
        let close=document.getElementById(closestId);
        if(closest === start || closest === end){
            
        }else if(close.className === "wall"){
            continue;
        }else{
            close.className="visited"; 
        }
        
        closest.isVisited=true;
        path.push(closest);
        if(closest === end){
            let shortestPath=getShortestPath(newBoard.sink);
            console.log(shortestPath);
            for(let i=0;i<shortestPath.length;i++){
            const node=shortestPath.pop();
            let nodeId=node.id;
            let nodeEle=document.getElementById(nodeId);
            nodeEle.className= "path";
        }
            return path;
        }
        updateNeighbours(closest);
    }

}
function sleep(ms){
    return new Promise(resolve=>setTimeout(resolve,ms));
}
function sortByDist(unvisited){ //sorts in descending order. Need to make it sort in asc
    unvisited.sort((node1, node2)=>{
        if(node1.distance<node2.distance){
            return -1;
        }else if(node1.distance>node2.distance){
            return 1;
        }
        return 0;
    }); //sorts the array in ascendign
}

//updates only unvisited neighbours
function updateNeighbours(node){
    const unvisitedNeighbours=getNeighbours(node);

    for(const neighbour of unvisitedNeighbours){
        neighbour.distance= node.distance+1;
        neighbour.previousNode=node; //for backtracking
    }
}

function getNeighbours(node){
    var neighbours=[];
    let nodeId=newBoard.getId(node);
    let row=nodeId.i;
    let column=nodeId.j;
    if(row>0){ //up neighbour
        neighbours.push(newBoard.nodeArray[row-1][column]);
    }
    if(column>0){ //left neighbour
        neighbours.push(newBoard.nodeArray[row][column-1]);
    }
    if(row<newBoard.height-1){ //down neighbour
        neighbours.push(newBoard.nodeArray[row+1][column]);
    }
    if(column<newBoard.width-1){ //right neighbour
        neighbours.push(newBoard.nodeArray[row][column+1]);
    }
    
    
    return neighbours.filter(neighbour=>!neighbour.isVisited);
}

function getShortestPath(end){
    let shortestPath=[];
    let currNode=end;
    while(currNode!==null){
        shortestPath.unshift(currNode); // pushes into list
        currNode=currNode.previousNode;
    }
    return shortestPath;
}   

