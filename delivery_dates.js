
let listdiv=document.createElement("div");
listdiv.classList.add('deliverydate-list');


//  creating UL
let list=document.createElement("ul");
list.style.paddingRight="10px";
list.classList.add('list-group')


//creating Date element

 function getdate(num){
  var someDate = new Date();
  let presentDay=someDate.getDay();
  let daysToAdd=(7-presentDay);
  var result = someDate.setDate(someDate.getDate() + daysToAdd);
  let date=new Date(result);
  let nextdate;

  let Daylist=["Sunday, ","Monday, ","Tuesday, ","Wed, ","Thursday, ","Friday, ","Sat, ","Sunday, "];
  let Monthlist = ["January ","February ","March ", "April ", "May ", "June ",
  "July ", "August ", "September ", "October ", "November ", "December "];
  let setDate;
  result=someDate.setDate(someDate.getDate() + num);
  nextdate=new Date(result); 
  setDate=Daylist[nextdate.getDay()]+Monthlist[nextdate.getMonth()]+nextdate.getDate();
  return setDate;
}

let num=1;
let selecteddate;
// creating LI
for(let i=0;i<10;i++){
    let listitem=document.createElement("li");
    let datespan=document.createElement("span");
 
    datespan.innerHTML=getdate(num);
    num+=1;
    listitem.appendChild(datespan);

  listitem.addEventListener("click",(event)=>{
    console.log("event -> ", event.target.tagName)
      let Length=event.target.parentNode.childNodes.length;
      for(let i=0;i<Length;i++)
        event.target.parentNode.childNodes[i].classList.remove('active');    
    event.target.classList.add('active');
    document.getElementById("date").innerHTML=datespan.innerHTML;
    selecteddate=datespan.innerHTML;
    localStorage.setItem("selecteddate",selecteddate);
  })

  if(i===0){
    document.getElementById("date").innerHTML=datespan.innerHTML;
    selecteddate=datespan.innerHTML;
    listitem.classList.add('active');
    localStorage.setItem("selecteddate",selecteddate);
    let fireicondiv=document.createElement("div");

    let icon = document.createElement("i");

    icon.classList.add('fa-solid','fa-fire-flame-curved');
    let text= document.createElement("span");
    text.innerHTML="7 spots left";

    fireicondiv.appendChild(icon);
    fireicondiv.appendChild(text);
    fireicondiv.classList.add('fireicon-div');
    listitem.appendChild(fireicondiv);
}

  listitem.classList.add('deliverydate-listitem');

    listitem.classList.add('list-group-item');
    list.appendChild(listitem);
}


// appending li into UL


// appending ul to uldiv
listdiv.appendChild(list);

//appending uldiv to UI Div
document.getElementById("deliverydate-list").appendChild(listdiv);


