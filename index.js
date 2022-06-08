const cats = ["Milo", "Otis", "Garfield"];
function destructivelyAppendCat(name){
    cats.push("Ralph");
}
function destructivelyPrependCat(name){
    cats.unshift("Bob");
}
function destructivelyRemoveLastCat(){
    cats.pop();
}
function destructivelyRemoveFirstCat(){
    cats.shift();
}
function appendCat(name){
    const catsCopied = [...cats, "Broom"]
    return catsCopied;
}
function prependCat(name){
    const catsCopied = ["Arnold", ...cats]
    return catsCopied;
}
function removeLastCat(){
    const catsCopied = cats.slice(0,2)
    return catsCopied;
}
function removeFirstCat(){
    const catsCopied = cats.slice(1)
    return catsCopied;
}