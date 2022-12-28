class Board{
    constructor(width,height){
        this.width=width;
        this.height=height;
        this.nodeArray=[];
        this.src=null;
        this.sink=null;
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

Board.prototype.BFS=function(id){
    
}

let menu=document.getElementById("menu").clientHeight;
let width=Math.floor((window.innerWidth-menu)/13);
let height=Math.floor(window.innerHeight/23);
let newBoard= new Board(width,height);
newBoard.set();