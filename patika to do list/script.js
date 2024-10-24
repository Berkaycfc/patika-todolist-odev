let button = document.querySelector(".button")
let input = document.querySelector("#task")
let ul = document.querySelector("#list")





button.addEventListener("click", function(){

    if(!input.value == ""){
        let li = document.createElement("li")
        li.innerText = input.value;
       
        let del = document.createElement("span")
        del.classList.add("del","float-right")
        del.innerHTML = "&times";
        del.addEventListener("click" ,function(){ 
            ul.removeChild(li)
        })
    
        li.append(del)
        ul.append(li)
        input.value  =""
       
    }else{
        alert("input girin")
    }
   
})


