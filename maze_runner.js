/*
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
*/

function isThere(index){return index !== -1}

function moveSpace(startX, startY, direction){
    if(direction === "N"){
        return([+startX-1, +startY]);
    } else if(direction === "S"){
        return([+startX+1, +startY]);
    } else if(direction === "W"){
        return([+startX, +startY-1]);
    } else {
        return([+startX, +startY+1]);
    }
}

function mazeRecurser(maze, directions, xPos, yPos){
    console.log(directions)
    if(+maze[xPos][yPos] === 1){
        console.log("Dead");
        return("Dead");
    } else if(+maze[xPos][yPos] === 3){
        console.log("Finish")
        return("Finish");
    } else if(directions.length === 0){
        console.log("Lost");
        return("Lost");
    }
    console.log(directions)
    let newPos = moveSpace(xPos, yPos, directions.shift());
    if(newPos[0] < 0 || newPos[1] < 0 || newPos[0] > (maze.length-1) || newPos[1] > (maze[0].length-1)){
        return("Dead");
    }
    console.log(String(newPos[0]) + " - " +  String(newPos[1]) + "    " + directions);
    return mazeRecurser(maze, directions, xPos = newPos[0], yPos = newPos[1]);
}

function mazeRunner(maze, directions){
    let xPos = maze.map((a) => a.includes(2)).map( (b, i) => b ? i : -1).filter(i => i !== -1);
    let yPos = maze.map((a) => a.indexOf(2)).filter(isThere);
    return mazeRecurser(maze, directions, xPos = xPos, yPos = yPos);
}
