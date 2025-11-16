// 不使用 ReturnType 实现 TypeScript 的 ReturnType < T > 范型

// function ReturnType<T>(param) {

//     return param<T>
// }
// arrange('kim').wait(3).log('hi').waitFirst(5).exec()
// wait 5s 
// kim
// wait 3s 
// hi


function wait(timer) {
    setTimeout(() => console.log(`wait ${timer}s`), timer)
}

function waitFirst() {
    wait(5)
}

function log() {
    console.log('hi')
}

function compose(...funcs) {
    if (funcs.length == 0) {
        return ars => args
    }
    if (funcs.length == 1) {
        return funcs[1]
    }

    return funcs.reduce((prev, next) => {
        return (...args) => {
            // 针对waitFirst 进行单独判断
            if (prev == waitFirst) { }
            return prev(next(...args))
        }
    })
}

arrange('kim').wait(3).log('hi').waitFirst(5).exec()

// wait 5s 
// kim
// wait 3s 
// hi

compose(log, wait, arrange, waitFirst)



function arrange() {
    console.log('kim')

    return {
        wait: function () {
            // return {
            //     log: function () {
            //         return {
            //             waitFirst: function(){}
            //         }
            //     }
            // }
        }
    }
}
