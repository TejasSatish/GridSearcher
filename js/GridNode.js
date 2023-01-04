class GridNode{
    constructor(id,status){
        this.id=id;
        this.status=status;
        this.distance=9999;
        this.isVisited=false
        this.previousNode;
    }
}