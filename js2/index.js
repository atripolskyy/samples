const addOne = x => {
    return x + 1;
}

function pipe() {
    let arr = [...arguments],
        steps = arr.slice(1);

    let value = steps[0].apply(this, arguments);

    for (let i = 1; i < steps.length; ++i) {
        value = steps[i].call(this, value);
    }

    return value;
}

console.log('pipe(1, addOne): ', pipe(1, addOne));