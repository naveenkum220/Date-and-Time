//synchronous code - code blocking statement
//it will execute the statement line by line
//!if thread is busy with excuting anyline 
//!next line of statement should wait for previous statement to get execute
//!js by default synchronous in nature.

//!setTimeout
// console.log("start")
// console.log("a")
// setTimeout(()=> {     //setTimeout-inbuild higher order function
   
//     alert("c");
// },2000); 
// console.log("d");
// console.log("end");

//!setInterval
// console.log("start")
// console.log("a")
// let temp=0;
// setInterval(()=>{
//     console.log("b");
//     console.log(temp++);
// },1000);
// console.log("d");
// console.log("end");

// console.log("start")
// console.log("a")
// let temp=0;
// let res;
// function start(){
//  res= setInterval(()=>{
//     console.log("b");
//     let head=document.getElementById("head");
//     head.textContent=`count:${(temp++)}`;
// },1000);
// }

// function stop(){
//     clearInterval(res);
// }

// console.log("d");
// console.log("end");

//!task
// let start=document.getElementById("start");
// start.addEventListener("click",start1);
// let temp=0;
// let res;
// function start1(){
//     res=setInterval(()=>{
//         console.log("b");
//         let head=document.getElementById("head");
//         head.textContent=`count:${(temp++)}`;
//     },1000);
//     start.removeEventListener("click",start1);
// }
// let stop1=document.getElementById("stop");
// stop1.addEventListener("click",stop2);
// function stop2(){
//     clearInterval(res);
//     start.addEventListener("click",start1);
// }

// setInterval(function (){
// let date1=new Date();
// console.log(date1);
// console.log(date1.getMonth());
// console.log(date1.getDate());
// console.log(date1.getFullYear());
// console.log("***************************")
    // console.log(date1.getHours());
// console.log(date1.getMinutes());
// console.log(date1.getSeconds());
// },1000);

//task
setInterval (function(){
    let date1=new Date()
    console.log(date1);
        let hour=document.getElementById("hr")
        let format =document.getElementById("format10")
        if(format.value=="12hours"){
        hour.textContent=date1.getHours();    

        let min=document.getElementById("min1")
        min.textContent=date1.getMinutes();

        let sec=document.getElementById("sec1")
        sec.textContent=date1.getSeconds();
        
        // let ampm=document.getElementById("ampm");
        // ampm.textContent="am"

        let date=document.getElementById("date2")
        date.textContent=date1.getDate();    

        let mon=document.getElementById("mon1")
        mon.textContent=date1.getMonth()+1;

        let year=document.getElementById("yr1")
        year.textContent=date1.getFullYear();
        }
        else{    
       hour.textContent=date1.getHours()+12;    

   let min=document.getElementById("min1")
       min.textContent=date1.getMinutes();

       let sec=document.getElementById("sec1")
       sec.textContent=date1.getSeconds();

       let ampm=document.getElementById("ampm");
       if(hour.value>=12){
        ampm.textContent="pm";
       }
       else{
        ampm.textContent="am";
       }
        let date=document.getElementById("date2")
        date.textContent=date1.getDate();    

        let mon=document.getElementById("mon1")
        mon.textContent=date1.getMonth()+1;

        let year=document.getElementById("yr1")
        year.textContent=date1.getFullyear();
    }
},1000);


// 20-11-2024
//textContent-consider space also textcontent exclude tag.
// InnerText-consider only text as a text content exclude tag.
//InnerHTML-consider space also consider tag also
// let para=document.getElementById("para");
// let text=document.getElementById("text");
// text.innerText=para.innerText
// text.innerHTML=para.innerHTML