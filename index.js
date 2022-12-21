const N = 5
const firstArr = [1,0,1,0,1]
const secArr = [50,65,55,45,30]

const findMinimum = (n, a, b)=>{
    // Validator
    if(a.length > n || b.length > n || a.length < n || b.length < n){
        return 0
    }
    const checkA = a.find(data => data<0 || data>1)
    const checkB = b.find(data => data<1 || data>1000000)
    if(checkA != undefined || checkB != undefined){
        return 0
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