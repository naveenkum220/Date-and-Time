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
// InnerText-consider only text as a text content exclude tag.
//InnerHTML-consider space also consider tag also
// let para=document.getElementById("para");
// let text=document.getElementById("text");
// text.innerText=para.innerText
// text.innerHTML=para.innerHTML
