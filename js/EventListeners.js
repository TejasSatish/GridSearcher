var mouse={ //mouse object
    x:undefined,
    y:undefined
}
var drawWallMode=0;
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
            }else if(currentNodeStatus==='wall'){
                event.target.className='unvisited';
            }
        }else{
            
        }
    }
);
board.addEventListener("mousedown", //to enter drawmode
    function(event){
        if(drawWallMode===0){
            drawWallMode=1;
        }else{
            drawWallMode=0;
        }
    }
);

