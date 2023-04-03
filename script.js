
function myfunc(){
   let t = document.getElementById("text");
   let l = document.getElementById("input").value.length;

    if (l==0) {
        t.innerText= "";
        document.getElementById("input").style.border="";
    }
    else if(l<5){
    t.innerText="Weak password";
    t.style.color="red";
    document.getElementById("input").style.border=" 1px solid red";
    } 
    else if(l<7){
    t.innerText="Normal password";
    t.style.color="yellow";
    document.getElementById("input").style.border=" 1px solid yellow";
    } 
    else{
        t.innerText="Strong password";
        t.style.color="green";
        document.getElementById("input").style.border=" 1px solid green";
    }
    console.log("It is worked");
}
