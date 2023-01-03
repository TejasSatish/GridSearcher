var mouse={ //mouse object
    x:undefined,
    y:undefined
}
var drawWallMode=0;
var eraseWallMode=0;
window.addEventListener('mousemove', //tracks mouse x,y
    function(event){
        mouse.x=event.x;
        mouse.y=event.y;
    }
);

let board=document.getElementById('board');

board.addEventListener("mousemove",  //to draw walls
    function(event){
        if(event.target.tagName==='TD' && drawWallMode===1){
            drawWallMode=1;
            let currentNodeStatus=event.target.className;
            //let currentNode=newBoard.getNode(currentNodeId);
            if(currentNodeStatus==='unvisited'){
                event.target.className='wall';
            }
        }else{
            
        }
    }
);
board.addEventListener("click", //to enter drawmode
    function(event){
        if(drawWallMode===0){
            drawWallMode=1;
            eraseWallMode=0;
        }else{
            drawWallMode=0;
        }
    }
);
board.addEventListener("contextmenu", 
    function(event){
        event.preventDefault();
        if(eraseWallMode===0){
            eraseWallMode=1;
            drawWallMode=0;
        }else{
            eraseWallMode=0;
        }
        return false; // ensures no context menu
    },false
);

let search=document.getElementById('Search');
search.addEventListener("click",
    DFS()
);