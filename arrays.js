var chocolateBars = ["snickers", "hundred grand", "kitkat","skittles"]

function addElementToBeginningOfArray(array, element){
  array.unshift(element)
}

function destructivelyAddElementToBeginningOfArray(array, element){
  array.shift(element)
}

function addElementToEndOfArray(array, element){
  array.push(element)
}

function destructivelyAddElementToEndOfArray(array, element){
  array.pop(element)
}
