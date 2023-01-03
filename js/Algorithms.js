var path =[];
var graph=[];
function create2DArray(){
    let arr=newBoard.nodeArray;
    
    for(let r=0;r<newBoard.width;r++){
        let graphRow=[];
        for(let c=0;c<newBoard.height;c++){
            if(arr[r][c].status=='src'){
                graphRow.push('>');
            }else if(arr[r][c].status=='sink'){
                graphRow.push('x');
            }else if(arr[r][c].status=='unvisited'){
                graphRow.push('1');
            }else if(arr[r][c].status=='wall'){
                graphRow.push('0');
            }
        }
        graph.push(graphRow);
    }
}

function DFS(){
    DFSrecursive(newBoard.getNode(newBoard.src),newBoard.getNode(newBoard.sink));
    console.log(newBoard.getNode(newBoard.src).status);
    console.log(newBoard.getNode(newBoard.sink).status);
    console.log(graph);
    console.log(path);
}

function DFSrecursive(node1,node2){ //node1 and node2 are GridNode objects
    
}

function visit(node){
    node.className='visited'
}