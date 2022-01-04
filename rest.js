function min(...arg){

    let i=0;
    let min=arg[i];
    for(j=1;j<arg.length;j++){

        if(arg[j]<min){
            min=arg[j];
        }

    }
    return (min);
}




let body=document.getElementsByTagName("body")[0];
let n=0;
let inp_btn=document.getElementById("inp_btn");

inp_btn.addEventListener("click",function(){
    n++;
    let count=document.getElementById("count").value;
    count=parseInt(count);
    if(isNaN(count)==false){
        for(j=0;j<count;j++){
            let new_inp=document.createElement("input");
            new_inp.type="text";
            new_inp.placeholder="num"+n;
            body.appendChild(new_inp);
    
        }
       

    }
    else{
        alert("Please enter a number");
    }

   });
let li=[];

  
let res=document.getElementById("result");

res.addEventListener("click",function(){

    let list=document.getElementsByTagName("input");
    for(i=1;i<list.length;i++){
        if(isNaN(parseInt(list[i].value))==true){
            alert("PLease enter a number");
        }
        else{
            li.push(parseInt(list[i].value));

        }
        

    }
    console.log(li);
    let answer=min(...li);
    console.log(answer);

    let val=document.getElementById("res").innerText;
    if(isNaN(answer)==false){
        val=answer;
        let a=document.getElementById("res");
        a.innerText=val;

    }
    


});