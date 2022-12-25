const aaddingZero = (arr)=>{
 for (i = 0; i<arr.length;i++){
        let first = arr[i]
        for (j = 1; j<arr.length;j++){
            if (first+j==0){
                return true 
            }else{
                return false

            }
        }
 }
}

console.log(aaddingZero([3]));
