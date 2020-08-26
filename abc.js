function abc (a, callback) {
    callback(a);
}

abc(4, (a) => {
    console.log(a)
})