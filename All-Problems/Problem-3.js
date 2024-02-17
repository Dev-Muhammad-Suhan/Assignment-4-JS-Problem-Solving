
function deleteInvalids(array){
    if ( !Array.isArray(array) ){
        return "Invalid Array"
    }
    else{
        let virusRemovedArray =[];
        for (number of array){
            if ( typeof number === 'number' && (number <= 0 || number > 0) ){
                virusRemovedArray.push(number);
            }
        }
    
        return virusRemovedArray;
    }
}

console.log(deleteInvalids( {num: [ 1 , 2 , 3 ]} ))