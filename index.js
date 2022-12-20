const N = 5
const firstArr = [1,0,1,1,0]
const secArr = [50,65,55,45,30]

const findMinimum = (n, a, b)=>{
    // Validator
    if(a.length > n || b.length > n){
        return -1
    }

    //Solution
    const allArr = a.map((num, index)=>{
        return [num, b[index]]
    })

    const sorting = allArr.sort((a,b)=>{
        return a[1]-b[1]
    })
    const firstData = sorting[0]
    const secData = sorting.find((data)=>{
        let pair = 0
        if(data[0]!=firstData[0]){
            pair = data
            return pair
        }
    })
    const result = secData[1] - firstData[1]
    return result
}

console.log(findMinimum(N, firstArr, secArr))