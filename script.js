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

console.log(t.tBodies[0].rows) //=>tbody.rows // Instead of tbody.rows, we have to use t.rows because the DOM recognizes rows from table, there is no need to call tbody (anyhow it will show error unless it is defined in js document)

console.log(t.rows[0].cells); //=>tr.cells

//console.log(t.rows[1].cellIndex);
