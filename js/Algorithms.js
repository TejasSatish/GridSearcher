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
function dijkstra(){
    let start=newBoard.getNode(newBoard.src);
    let end=newBoard.getNode(newBoard.sink);
    newBoard.getNode(newBoard.src).distance=0;
    
    const unvisited=getAllNodes();
    while(0<unvisited.length){
        console.log("In loop");
        sortByDist(unvisited);
        const closest=unvisited.shift();
        closest.isVisited=true;
        path.push(closest);
        if(closest === end){
            console.log(path);
            return path;
        }
        updateNeighbours(closest);
    }

}

function sortByDist(unvisited){ //sorts in descending order. Need to make it sort in asc
    console.log("sorting unvisited");
    unvisited.sort((node1, node2)=>{
        if(node1.distance<node2.distance){
            return 1;
        }else if(node1.distance>node2.distance){
            return -1;
        }
        return 0;
    }); //sorts the array in ascendign
    console.log(unvisited)
}

//updates only unvisited neighbours
function updateNeighbours(node){
    console.log("updating neighbours");
    const unvisitedNeighbours=getNeighbours(node);

    for(const neighbour of unvisitedNeighbours){
        neighbour.distance= node.distance+1;
        neighbour.previousNode=node;
    }
}

function getNeighbours(node){
    const neighbours=[];
    let nodeId=newBoard.getId(node);
    let row=nodeId.i;
    let column=nodeId.j;
    if(column>0){ //left neighbour
        neighbours.push(newBoard.nodeArray[row][column-1]);
    }
    if(column<newBoard.width-1){ //right neighbour
        neighbours.push(newBoard.nodeArray[row][column+1]);
    }
    if(row>0){ //above neighbour
        neighbours.push(newBoard.nodeArray[row-1][column]);
    }
    if(row<newBoard.height-1){ //below neighbour
        neighbours.push(newBoard.nodeArray[row+1][column]);
    }

    return neighbours.filter(neighbour=>{ !neighbour.isVisited});
}

