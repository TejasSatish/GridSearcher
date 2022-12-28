var mouse={ //mouse object
    x:undefined,
    y:undefined
}

window.addEventListener('mousemove', //tracks mouse x,y
    function(event){
        mouse.x=event.x;
        mouse.y=event.y;
    }
);

let board=document.getElementById('board');
board.addEventListener("mousedown",function(event){
    if(event.target.tagName==='TD'){
        let currentNodeStatus=event.target.className;
        //let currentNode=newBoard.getNode(currentNodeId);
        if(currentNodeStatus==='unvisited'){
            event.target.className='wall';
        }else if(currentNodeStatus==='wall'){
            event.target.className='unvisited';
        }
    }
}
);

