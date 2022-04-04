function multiplicationTable(size){
    let array = [];
    let pushVec;
    for( let i = 0; i < size; i++ ){
        pushVec = [];
        for( let j = 0; j < size; j++ ){
            pushVec.push((j+1)*(i+1));
        }
        array.push(pushVec);
    }
    return array;
}
