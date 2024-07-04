function filterEven(arr){
    let filteredArray = []
    for (let i = 0; i < arr.length; i++) {
        let testedNum = arr[i]
        if(testedNum %2 == 0){
            filteredArray.push(testedNum)
        }
    }
    return(filteredArray)
}

arr = [1,2,3,4,5,6,7,8,9,10]
resultado = filterEven(arr)

function filtrarPares(array){
    console.log(array.filter(numero => numero %2 == 0)) // testando nova função array.prototype.filter()
}

