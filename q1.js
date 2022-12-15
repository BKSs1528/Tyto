function Q1(n) {
    let oddArr = []
    let evenArr = []
    let evenSum = 0
    for (let i = 0; i <= n; i++) {
        if (i % 2 === 0) {
            evenArr.push(i)
        } else {
            oddArr.push(i)
        }
    }
    for (i of evenArr) {
        evenSum = evenSum + i
    }
    console.log([...oddArr]);
    console.log(evenSum/(evenArr.length));
    return
}

console.log(Q1(100))