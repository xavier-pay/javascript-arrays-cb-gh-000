var chocolateBars = ["snickers", "hundred grand", "kitkat","skittles"]

function addElementToBeginningOfArray(array, element){
  var element = "foo", array = chocolateBars
  array.unshift(element)
}

function destructivelyAddElementToBeginningOfArray(array, element){
  var element = "foo", array = chocolateBars
  array.shift(element)
}

function addElementToEndOfArray(array, element){
  var element = "foo", array = chocolateBars
  array.push(element)
}

function destructivelyAddElementToEndOfArray(array, element){
  array.pop(element)
}
