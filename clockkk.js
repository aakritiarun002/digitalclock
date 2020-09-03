let c = document.querySelector(".clock");
let d = document.querySelector(".date");

setInterval(()=>{
    let today = new Date();
    let hh = today.getHours();
    let mm = today.getMinutes();
    let ss = today.getSeconds();
    let date = today.toDateString();

    c.innerHTML = `${hh} : ${mm} : ${ss}`;
    d.innerHTML = date;
});
