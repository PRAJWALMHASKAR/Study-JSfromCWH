const changebgred = ()=>{
    document.body.firstElementChild.style.background = "red";
}

let b = document.body

//console.log("First Element child of b is: ", b.firstElementChild)
//console.log("First child of b is: ", b.firstChild)

let t = document.body.firstElementChild.nextElementSibling.firstElementChild;

console.log(t);
console.log(t.rows);
console.log(t.caption);
console.log(t.tHead);
console.log(t.tBodies);
//console.log(tbody.rows);//error->will resolve this
