function counter(){
    let count = 1;
    function add(){
        return ++count;
    }
    return `original count: ${count}, new count: ${add(count)}`
}
console.log(counter());