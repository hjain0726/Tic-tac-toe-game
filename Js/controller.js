window.addEventListener("DOMContentLoaded",start);

function start(){
    events();
}
var flag;
var arr1=[];
var arr2=[];
var arr3=[];
var arr4=[];
var arr5=[];
var arr6=[];
var arr7=[];
var arr8=[];

function events(){
    flag=0;
    var buttons=document.querySelectorAll("button");
    buttons.forEach(button=>button.addEventListener("click",set))
}

function set(){
    if(flag==0){
    this.innerHTML='X';
     flag=1;
    } 
    else if(flag==1){
        this.innerHTML=0;
        flag=0;
    } 
    var result=this.id;
    if(result=="zero"){
        arr1.push(this.innerHTML);
        arr4.push(this.innerHTML);
        arr7.push(this.innerHTML);
    }
    else if(result=="one"){
        arr1.push(this.innerHTML);
        arr5.push(this.innerHTML);

    }
    else if(result=="two"){
        arr1.push(this.innerHTML);
        arr6.push(this.innerHTML);
        arr8.push(this.innerHTML);
        if(arr1.length==3){
            check(arr1);
        }
    }
    else if(result=="three"){
        arr2.push(this.innerHTML);
        arr4.push(this.innerHTML);
    }
    else if(result=="four"){
        arr2.push(this.innerHTML);
        arr5.push(this.innerHTML);
        arr7.push(this.innerHTML);
        arr8.push(this.innerHTML);

    }
    else if(result=="five"){
        arr2.push(this.innerHTML);
        arr6.push(this.innerHTML);
        if(arr2.length==3){
            check(arr2);
        }

    }
    else if(result=="six"){
        arr3.push(this.innerHTML);
        arr4.push(this.innerHTML);
        if(arr4.length==3){
            check(arr4);
        }
        
        arr8.push(this.innerHTML);
         if(arr8.length==3){
            check(arr8);
        }

    }
    else if(result=="seven"){
        arr3.push(this.innerHTML);
        arr5.push(this.innerHTML);
        if(arr5.length==3){
            check(arr5);
        }

    }
    else if(result=="eight"){
        arr3.push(this.innerHTML);
        if(arr3.length==3){
            check(arr3);
        }
        arr6.push(this.innerHTML);
        if(arr6.length==3){
            check(arr6);
        }
        
        arr7.push(this.innerHTML);
            if(arr7.length==3){
            check(arr7);
            
        }

    }

}
function check(arr){
    var c1=0;
    var c2=0;
        for(let i of arr){
            if(i=="X")
            c1+=1;
            else{
            c2+=1;
            }
        }
        if(c1==3){
            print();
        }
        else if(c2==3){
            print();
        }
}
function print(){
    document.querySelector("h2").innerHTML="GAME OVER";
}