// Your code here
function mapToNegativize(sourceArray) {
    let array = []
    for (let index = 0; index < sourceArray.length; index++) {
        const element = sourceArray[index];
        array.push(element * -1)
    }
    return array
}

function mapToNoChange(sourceArray) {
    let array = []
    for (let index = 0; index < sourceArray.length; index++) {
        const element = sourceArray[index];
        array.push(element)
    }
    return array
}

function mapToDouble(sourceArray) {
    let array = []
    for (let index = 0; index < sourceArray.length; index++) {
        const element = sourceArray[index];
        array.push(element * 2)
    }
    return array
}

function mapToSquare(sourceArray) {
    let array = []
    for (let index = 0; index < sourceArray.length; index++) {
        const element = sourceArray[index];
        array.push(element * element)
    }
    return array
}

function reduceToTotal(sourceArray, startingPoint=0) {
    for (let index = 0; index < sourceArray.length; index++) {
        const element = sourceArray[index];
        startingPoint += element
    }
    return startingPoint
}

function reduceToAllTrue(sourceArray) {
    for (let i = 0; i < sourceArray.length; i++) {
        if (!sourceArray[i]) return false
  }
  return true
}

function reduceToAnyTrue(sourceArray) {
    for (let i = 0; i < sourceArray.length; i++) {
        if (sourceArray[i]) return true
    }
    return false
}