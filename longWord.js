const longWord =(arr)=>{
    let space = arr[0].length
    for (i=0;i<arr.length;i++){
        if (space<arr[i].length){
            space = arr[i].length
        }
    }
    return space

}
console.log(longWord(["Ammarah", "Apple",'Iron']))