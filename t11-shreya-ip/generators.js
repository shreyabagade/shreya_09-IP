function * generatorFunc(){
    console.log("Step 1")
    yield 10
    console.log("Step 2")
    yield 20
    console.log("Step 3")
    yield 30
    console.log("End of Function")
}
let markIter = generatorFunc()
console.log(markIter.next())
console.log(markIter.next())
console.log(markIter.next())
console.log(markIter.next())