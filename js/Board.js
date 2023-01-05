class Board{
    constructor(width,height){
        this.width=width;
        this.height=height;
        this.nodeArray=[];
        this.src=null;
        this.sink=null;
        this.nodes=[];
    }
}

Board.prototype.set= function(){
    this.createBoard();
};

Board.prototype.createBoard=function(){
    let table="";

    for(let row=0;row<this.height;row++){
        let nodeRow=[];
        let tableRow=`<tr id="row ${row}">`;
        
        for(let column=0;column<this.width;column++){
            let newNodeId=`${row}-${column}`;
            let newNode,newNodeClass;
            
            if(row === Math.floor(this.height/2) && column ===Math.floor(this.width/4)){
                newNodeClass='src';
                this.src=`${newNodeId}`;
            }else if(row === Math.floor(this.height/2) && column ===Math.floor(3*this.width/4)){
                newNodeClass='sink'
                this.sink=`${newNodeId}`;
            }else{
                newNodeClass='unvisited';
            }
            newNode=new GridNode(newNodeId,newNodeClass);
            nodeRow.push(newNode);
            this.nodes.push(newNode);
            tableRow=tableRow.concat(`<td id="${newNodeId}" class="${newNodeClass}"></td>`);
        }
        this.nodeArray.push(nodeRow);
        table=table.concat(`${tableRow}</tr>`);
    }
    
    let board=document.getElementById("board");
    board.innerHTML=table;
};

// Board.prototype.eventListeners=function (){
//     let grid=this;

//     for(let row=0;row<grid.height;row++){
//         for(let column=0;column<grid.width;column++){
//             let currentNodeId=`${row}-${column}`;
//             let currentNode=grid.getNode(currentNodeId);
//             let currentElement=document.getElementById(currentNodeId);
//         }
//     }
// };


Board.prototype.getNode=function(id){
    let nodeId=id.split('-');
    let i=parseInt(nodeId[0]);
    let j=parseInt(nodeId[1]);
    return this.nodeArray[i][j];
}
Board.prototype.getId=function(node){
    let nodeId=node.id;
    nid=nodeId.split('-');
    let i=parseInt(nid[0]);
    let j=parseInt(nid[1]);
    return {i,j};
}
//had problems with splits in getNode directions
// Board.prototype.getNodeAbove=function(id){
//     let nodeId=id.split('-');
//     let i=parseInt(nodeId[0]);
//     let j=parseInt(nodeId[1]);
//     if(i==0){
//         return null;
//     }else{
//         return this.nodeArray[i-1][j];
//     }
// }

// Board.prototype.getNodeBelow=function(id){
//     let nodeId=id.split('-');
//     let i=parseInt(nodeId[0]);
//     let j=parseInt(nodeId[1]);
//     if(i<this.nodeArray.length-1){
//         return this.nodeArray[i+1][j];
//     }else{//no node below
//         return null;
//     }
// }

// Board.prototype.getNodeToRight=function(id){
//     let nodeId=id.split('-');
//     let i=parseInt(nodeId[0]);
//     let j=parseInt(nodeId[1]);
//     if(j<this.nodeArray[0].length-1){
//         return this.nodeArray[i][j+1];
//     }else{
//         return null;
//     }
// }

// Board.prototype.getNodeToLeft=function(id){
//     let nodeId=id.split('-');
//     let i=parseInt(nodeId[0]);
//     let j=parseInt(nodeId[1]);
//     if(j==0){
//         return null;
//     }else{
//         return this.nodeArray[i][j-1];
//     }
// }


let menu=document.getElementById("menu").clientHeight;
let width=Math.floor((window.innerWidth-menu)/13);
let height=Math.floor(window.innerHeight/23);
let newBoard= new Board(width,height);
newBoard.set();