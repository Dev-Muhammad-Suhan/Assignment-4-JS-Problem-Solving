function checkName(name){
    if (typeof name !== 'string'){
        return 'invalid'
    }
    else{
        const lowerCaseName = name.trim().toLowerCase();
        let lastLatter = '';
        for ( latter of lowerCaseName){
            lastLatter = latter;
        }
    
        if( 'a' === lastLatter || 'y' === lastLatter || 'i' === lastLatter || 'e' === lastLatter || 'o' === lastLatter || 'u' === lastLatter || 'w' === lastLatter){
            return 'Good Name'
        }
        else{
            return 'Bad Name'
        }
    }  
}


console.log(checkName(["Rashed"]))
