function Q2(arr,n){
    let subArr= []
    let final =[]
    for(let i of arr){
        subArr.push(n-i)
    }
    for(let i of subArr){
        if(arr.includes(i)){
            final.push(i)
        }
    }
    let x = Math.min(...final)
    let y = n-x
    return [x,y]
}
console.log(Q2([3, 4, 1, 2, 3, 8, 7],5));