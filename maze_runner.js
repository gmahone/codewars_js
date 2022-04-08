function isThere(index){return index !== -1}

function moveSpace(startX, startY, direction){
    if(direction === "N"){
        return [startX, startY--];
    } else if(direction === "S"){
        return [startX, startY++];
    } else if(direction === "W"){
        return [startX--, startY];
    } else {
        return [startX++, startY];
    }
}

function testSpace(currentSpace){
    if(currentSpace === -1){
        return "Lost"
    } else if(currentSpace === 1 || currentSpace == undefined){
        return "Dead"
    } else if(currentSpace === 3){
        return "Finish"
    }
}

let maze = [[1,1,1,1,1,1,1],
            [1,0,0,0,0,0,3],
            [1,0,1,0,1,0,1],
            [0,0,1,0,0,0,1],
            [1,0,1,0,1,0,1],
            [1,0,0,0,0,0,1],
            [1,2,1,0,1,0,1]]

xCoord = maze.map((a) => a.includes(2)).map( (b, i) => b ? i : -1).filter(i => i !== -1);
yCoord = maze.map((a) => a.indexOf(2)).filter(isThere);
