function elem(selector){
    return document.querySelector(selector);
}

function elems(selector){
    return document.querySelectorAll(selector);
}

let input=elem("input"),
last_number=input.value,
step_number,
operation;

elem("#ac").addEventListener("click",function(){
    input.value="";
    last_number=null;
    operation=nuul;
})

elems(".number").forEach(button=>{
    button.addEventListener("click",function(){
        let number=this.innerText;
        input.value=input.value+number;
    });
});

elem("#plus").addEventListener("click", function(){
    last_number=input.value;
    input.value="";
    operation="plus";
});

elem("#minuse").addEventListener("click", function(){
    last_number=input.value;
    input.value="";
    operation="minuse";
});

elem("#mnog").addEventListener("click", function(){
    last_number=input.value;
    input.value="";
    operation="mnog";
});

elem("#del").addEventListener("click", function(){
    last_number=input.value;
    input.value="";
    operation="del";
});

elem("#step").addEventListener("click", function(){
    last_number=input.value;
    input.value="";
    operation="step";
});

elem("#rav").addEventListener("click", function (){
    if(last_number&&operation){
        let result;
        switch(operation){
        case("plus"):{
            result=parseInt(last_number)+parseInt(input.value);
        }break;
        case("minuse"):{
            result=parseInt(last_number)-parseInt(input.value);
        }break;
        case("mnog"):{
            result=parseInt(last_number)*parseInt(input.value);
        }break;
        case("del"):{
            if(parseInt(input.value) === 0){
                result="ERROR"
            }else{
                result=parseInt(last_number)/parseInt(input.value);
            }
            
        }break;
        case("step"):{
            result=Math.pow(last_number,input.value);
        }break; 
    } 
        input.value=result;
        last_number=null;
        operation=null;
    }
   
     
     
});

elem("#kor").addEventListener("click", function(){
    let number=parseInt(input.value);
    input.value=Math.pow(number,2);
});

elem("#cor").addEventListener("click", function(){
    let number=parseInt(input.value);
    if(parseInt(input.value)<=0){
        input.value="ERROR"
    }else{
        input.value=Math.sqrt(number,2);
    }
    
});

