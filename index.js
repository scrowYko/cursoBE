const express = require('express')

const app = express()

app.get('/test-api', function(req, res) {
    res.send('Nossa api ta funfando')
} )


app.listen(8000)



















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
    return array.filter(numero => numero %2 == 0) // testando nova função array.prototype.filter()
}

