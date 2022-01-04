Array.prototype.checkPrime=function(){

    var bool=false;

    if(this.length>0){
        let b=1;
        

        for(i=0;i<this.length;i++){
            let j=2;
            
            
            while(j<this[i]){

                if(this[i]%j==0){
                    b=b||1;
                    break;
                }
                else{
                    b=b&&0;
                    
                }
                j++;
            }
            if(b==0){
                console.log(this[i],"it is prime");
                bool=bool||true;
                
                
                
            }
            
            else if(b==1){
                console.log(this[i],"not prime");
                bool=bool||false;

            
                
            
                
            }
            
        }
        return bool;

    }
    

    

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
    let answer=li.checkPrime();
    console.log(answer);

    let val=document.getElementById("res").innerText;
    
    val=answer;
    let a=document.getElementById("res");
    a.innerText=val;

    
    


});