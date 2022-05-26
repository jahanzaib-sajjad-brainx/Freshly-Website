   
   let price=0;
    let tprice=0;
    let innerPrice;
    let titems=0;
    let ritems;
    let minitems;
    let maxitems;
    let val=0;
    let tquantity=0;
function createselectdate(){

        let select=document.createElement("select");
        select.classList.add('select','p-2');
        num=1;
        for(let i=0;i<10;i++){
            
        let option=document.createElement("option");
        option.innerHTML=getdate(num);
        
        if(option.innerHTML===localStorage.getItem("selecteddate")){
            option.selected="selected";
        }
        option.value=getdate(num);
        num+=1;
        select.appendChild(option);
        }
        // document.getElementById("cm-showdate").innerHTML=localStorage.getItem("selecteddate");
        select.addEventListener("change",(event)=>{
            document.getElementById("cm-showdate").innerHTML=event.target.value;
        })
    return select;
}
function createImages(id){
     // creating image div;
     for(let i=0;i<32;i++) 
     {
        let imglinkcontainer=document.createElement("a");
        imglinkcontainer.classList.add('col-sm-12','col-md-6','col-lg-4','col-xl-3');

        let menuitemContainer=document.createElement("div");
        menuitemContainer.classList.add('menuitem-container')


        let menucardimgDiv=document.createElement("div");
        menucardimgDiv.classList.add('menucard-img-div');
        let menucardImg=document.createElement("img");
        menucardImg.classList.add('menucard-img');
        menucardImg.src=imagesobject[i].imgsource;


        let menucardinfoDiv=document.createElement("div");

        let menucardImgTitle=document.createElement("p");
        menucardImgTitle.classList.add('menucard-img-title');
        menucardImgTitle.innerText=imagesobject[i].imgtitle;


        let menucardInfo=document.createElement("div");
        menucardInfo.classList.add('menucard-info');
        let caloriescount=document.createElement("span");
        caloriescount.innerText=imagesobject[i].calories;
        caloriescount.classList.add('calories');
        let borderright=document.createElement("div");
        borderright.classList.add('border-right');
        let glutencount=document.createElement("span");
        glutencount.innerText=imagesobject[i].gluten;
        glutencount.classList.add('gluten');
        let servingcount=document.createElement("span");
        servingcount.innerText=imagesobject[i].serve;
        servingcount.classList.add('serving');

        let addbuttonDiv=document.createElement("div");
        let addbutton=document.createElement("div");
        if(id==="jsimg"){
            addbutton.classList.add('menuitem-addbutton')
            let plusicon=document.createElement("i");
            plusicon.classList.add('fa-solid','fa-plus');
            addbutton.appendChild(plusicon);
            addbutton.addEventListener("click",(event)=>{
                imagesobject[i].qty+=1;
                create_Selectedmeal();
                titems+=1;
                ritems-=1;
                document.getElementById("total-items").innerText=titems;
                cartdivDisplay();    
            })
    
        }
        /////////////////////////////////////////////////////// adding items to cart on click(Plus) button 

        // 1 child
        imglinkcontainer.appendChild(menuitemContainer);
        // 2 childs
        menuitemContainer.appendChild(menucardimgDiv);
        menuitemContainer.append(menucardinfoDiv);   
            // 1st-child
            menucardimgDiv.appendChild(menucardImg)
            // 2ndchild
            // 3-childs
            menucardinfoDiv.appendChild(menucardImgTitle); //1st child
            menucardinfoDiv.appendChild(menucardInfo);      //2nd child
            // 5childs
                menucardInfo.appendChild(caloriescount);
                menucardInfo.appendChild(borderright);
                menucardInfo.appendChild(glutencount);
                menucardInfo.appendChild(borderright);
                menucardInfo.appendChild(servingcount);
                if(id==="jsimg"){
                    menucardinfoDiv.appendChild(addbuttonDiv)    //3rd child
                    addbuttonDiv.appendChild(addbutton);
                }
           
        document.getElementById(id).appendChild(imglinkcontainer);
       
    }
}
function create_Selectedmeal(){
    
    tprice=0;
    tquantity=0;

    // ///////////////////////////////////////////////////////////////// Creating ADDED MEAL DIV cart
    let mealdiv=document.createElement("div");
    mealdiv.classList.add('ordered-meal-div');
//  Creating Meal Summary Div
    let mealsummary=document.createElement("div");
    mealsummary.classList.add('d-flex','flex-column','pt-1','px-3','meal-summary-text');
    let summarytext=document.createElement("p");
    summarytext.innerText="Order Summary";
    summarytext.classList.add('fw-bold');

    let mealpricediv=document.createElement("div");
    mealpricediv.classList.add('d-flex','flex-row','justify-content-between');
    let meal=document.createElement("p");
    if (titems===0)
        meal.innerText=(titems+1) + " Meal";
    else if(titems>0)
        meal.innerText=(titems+1) + " Meals";

    let mealprice=document.createElement("p");
    mealpricediv.appendChild(meal);
    mealpricediv.appendChild(mealprice);

    let mealsubtotaldiv=document.createElement("div");
    mealsubtotaldiv.classList.add('d-flex','flex-row','justify-content-between');
    let subtotaltext=document.createElement("p");
    subtotaltext.innerText="Subtotal";
    let totalprice=document.createElement("p");
    mealsubtotaldiv.appendChild(subtotaltext);
    mealsubtotaldiv.appendChild(totalprice);

    let taxtext=document.createElement("p");
    taxtext.innerText="tax and shipping added at checkout";
    taxtext.classList.add('text-center','text-xs');

    mealsummary.appendChild(summarytext);
    mealsummary.appendChild(mealpricediv);
    mealsummary.appendChild(mealsubtotaldiv);
    mealsummary.appendChild(taxtext);
    mealdiv.appendChild(mealsummary);

    document.getElementById("meal-div").innerHTML="";
    // CREATING MEALDETAILS DIV
    for(let i=0;i<imagesobject.length;i++){
        for(let j=0;j<imagesobject[i].qty;j++){

            let mealdetails=document.createElement("div");
            mealdetails.classList.add('row','ordered-meal-details','mt-3','mx-4');
            let mealimgdiv=document.createElement("div");
            mealimgdiv.classList.add('col-4');
            let mealimg=document.createElement("img");
            mealimg.src=imagesobject[i].imgsource;      ////////////////////image source
            mealimg.classList.add('ordered-meal-img');
            mealimgdiv.appendChild(mealimg);
            let mealtitle=document.createElement("p");
            mealtitle.innerText= imagesobject[i].imgtitle;  ///////////////image title
            mealtitle.classList.add('col-6','ordered-meal-title');
            let mealicons=document.createElement("div");
            mealicons.classList.add('col-2','d-flex','flex-column','justify-content-between','meal-icons');
            let plusmealicon=document.createElement("i");
            plusmealicon.classList.add('fa-solid','fa-plus','text-primary');
            // add item on + click button
            plusmealicon.addEventListener("click",(event)=>{
                imagesobject[i].qty+=1;
                titems+=1;
                create_Selectedmeal();
                document.getElementById("total-items").innerText=titems;
                ritems-=1;

                cartdivDisplay();      

            })
            let minusmealicon=document.createElement("i");
            minusmealicon.classList.add('fa-solid','fa-minus');
            // Remove item on - click button
            minusmealicon.addEventListener("click",(event)=>{
                imagesobject[i].qty-=1;
                create_Selectedmeal();

            
                price-=Number(imagesobject[i].price.replace("$",''));
                tprice=tprice-price;
                innerPrice="$"+String(tprice);

                document.getElementById("items-price").innerHTML=innerPrice;
                // totalprice.innerText=innerPrice;
            
                titems-=1;
                if(titems===0){
                    document.getElementById("min-meals").classList.remove('d-none');
                    document.getElementById("min-meals").classList.add('d-block');
                }
                document.getElementById("total-items").innerText=titems;
                ritems+=1;
                cartdivDisplay();
            })
            mealicons.appendChild(plusmealicon);
            mealicons.appendChild(minusmealicon);
            mealdetails.appendChild(mealimgdiv);
            mealdetails.appendChild(mealtitle);
            mealdetails.appendChild(mealicons);

            
            price=Number(imagesobject[i].price.replace("$", ''));
            
            tprice=tprice+price;

            
            innerPrice="$"+String(tprice);
            mealprice.innerText=innerPrice;
            totalprice.innerText=innerPrice;
            document.getElementById("items-price").innerHTML=innerPrice;
            // tprice=Number(tprice);
        
            document.getElementById("min-meals").classList.remove('d-block');
            document.getElementById("min-meals").classList.add('d-none');

            document.getElementById("meal-div").appendChild(mealdetails);  ///////////////Appending meal DEtails into cart
            document.getElementById("meal-div").appendChild(mealsummary);  //////// Appending meal summary to meal cart
            
        }
    }
}
function cartdivDisplay(){
    if(val>0 && ritems>0){
        document.getElementById("cartbutton").style.backgroundColor="#ededed";
        document.getElementById("cartbutton").style.color="#d0d0d0";
        document.getElementById("cartbutton").innerHTML='Add ' + ritems + ' to Continue';
        document.getElementById("save-more").style.display="none";
        document.getElementById("cartbutton").disabled="true";
       

    }

    if(ritems>0 && val===0)
    {
        document.getElementById("remaining-items").innerHTML=ritems;
        document.getElementById("r-items").innerHTML=ritems;
        
    }
    else if(ritems<=0 && titems<=maxitems){
        document.getElementById("cartbutton").style.backgroundColor="blue";
        document.getElementById("cartbutton").style.color="#fff";
        document.getElementById("cartbutton").innerText="Next";
        document.getElementById("save-more").style.display="block";
        val=1;
        
        
    }
    else if(titems>maxitems){
        document.getElementById("cartbutton").style.backgroundColor="#ededed";
        document.getElementById("cartbutton").style.color="#d0d0d0";            
        document.getElementById("cartbutton").innerText='Remove ' + (titems-maxitems) + ' to Continue';
        document.getElementById("save-more").style.display="none";

    }

}
// ///index file
function index(){
    createImages("imagesdiv");
}

function mealsQuantity(min,max){
    localStorage.setItem("min",min);
    localStorage.setItem("max",max);
  
}

function checkout()
{
    let slct=createselectdate();
    slct.classList.add('form-select','border','border-dark');
    document.getElementById("cp-deliverydate").appendChild(slct);
    document.getElementById("totalitemsselected").innerHTML=localStorage.getItem("totalItemsSelected");
    document.getElementById("totalitemsprice").innerHTML=localStorage.getItem("totalItemsPrice");
    price=Number(localStorage.getItem("totalItemsPrice").replace("$", ''));
    price=price-12.99;
    
    document.getElementById("subtotalprice").innerHTML="$"+String(price);
    price=price+9.99;
    document.getElementById("totalprice").innerHTML="$"+String(price);
    document.getElementById("finalprice").innerHTML="$"+String(price);
    let mealarr=JSON.parse(localStorage.getItem("selectedmealarr"));
    for(let i=0;i<mealarr.length;i++){
            let selectedimages=document.createElement("div");
            selectedimages.classList.add('mt-3','d-flex','fw-bold')
            let totalquantity=document.createElement("span");
            totalquantity.innerText=mealarr[i].qty+"x";  //imgqty
            totalquantity.classList.add('me-2','mt-2');
            let imgwrapper=document.createElement("div");
            imgwrapper.classList.add('img-wrapper','me-3');
            let itemimg=document.createElement("img");
            itemimg.src=mealarr[i].imgsource;  //imgsource
            itemimg.classList.add('w-100');
            imgwrapper.appendChild(itemimg);
            let imgtext=document.createElement("span");
            imgtext.classList.add('mt-2')
            imgtext.innerText=mealarr[i].imgtitle; //imgtitle
            selectedimages.appendChild(totalquantity);
            selectedimages.appendChild(imgwrapper);
            selectedimages.appendChild(imgtext);

            document.getElementById("selecteditemsdetails").appendChild(selectedimages);
            let hrr=document.createElement("hr");
            document.getElementById("selecteditemsdetails").appendChild(hrr);
        
    }
}

let imagesobject=[
    {id:1,imgsource:"images/menu-img-1.jpeg",imgtitle:"Steak Peppercorn",calories:"500 Cal",gluten:"Gluten Free",serve:"Single-Serve",price:"$13",qty:0},
    {id:2,imgsource:"images/menu-img-2.jpg",imgtitle:"Homestyle Chicken",calories:"560 Cal",gluten:"Gluten Free",serve:"Single-Serve",price:"13$",qty:0},
    {id:3,imgsource:"images/menu-img-3.jpg",imgtitle:"Cauliflower Shell Beef Bolognese",calories:"470 Cal",gluten:"Gluten Free",serve:"Single-Serve",price:"13$",qty:0},
    {id:4,imgsource:"images/menu-img-4.jpg",imgtitle:"Sausage Baked Penne",calories:"490 Cal",gluten:"Gluten Free",serve:"Single-Serve",price:"13$",qty:0},
    {id:5,imgsource:"images/menu-img-5.jpg",imgtitle:"Savory-Sweet Chicken Teriyaki Bowl",calories:"480 Cal",gluten:"Gluten Free",serve:"Single-Serve",price:"13$",qty:0},
    {id:6,imgsource:"images/menu-img-6.jpg",imgtitle:"Protein-Packed Chicken Parm",calories:"410 Cal",gluten:"Gluten Free",serve:"Single-Serve",price:"13$",qty:0},
    {id:7,imgsource:"images/menu-img-7.jpg",imgtitle:"Golden Oven-Fried Chicken & Mash",calories:"510 Cal",gluten:"Gluten Free",serve:"Single-Serve",price:"13$",qty:0},
    {id:8,imgsource:"images/menu-img-8.jpg",imgtitle:"Zingy Buffalo Chicken",calories:"470 Cal",gluten:"Gluten Free",serve:"Single-Serve",price:"13$",qty:0},  
    {id:9,imgsource:"images/menu-img-9.jpg",imgtitle:"Steak Peppercorn",calories:"500 Cal",gluten:"Include Gluten",serve:"Single-Serve",price:"13$",qty:0},
    {id:10,imgsource:"images/menu-img-10.jpg",imgtitle:"Homestyle Chicken",calories:"560 Cal",gluten:"Gluten Free",serve:"Single-Serve",price:"13$",qty:0},
    {id:11,imgsource:"images/menu-img-11.jpg",imgtitle:"Cauliflower Shell Beef Bolognese",calories:"470 Cal",gluten:"Gluten Free",serve:"Single-Serve",price:"13$",qty:0},
    {id:12,imgsource:"images/menu-img-12.jpg",imgtitle:"Sausage Baked Penne",calories:"490 Cal",gluten:"Gluten Free",serve:"Single-Serve",price:"13$",qty:0},
    {id:13,imgsource:"images/menu-img-13.jpg",imgtitle:"Savory-Sweet Chicken Teriyaki Bowl",calories:"480 Cal",gluten:"Gluten Free",serve:"Single-Serve",price:"13$",qty:0},
    {id:14,imgsource:"images/menu-img-14.jpg",imgtitle:"Protein-Packed Chicken Parm",calories:"410 Cal",gluten:"Include Gluten",serve:"Single-Serve",price:"13$",qty:0},
    {id:15,imgsource:"images/menu-img-15.jpg",imgtitle:"Golden Oven-Fried Chicken & Mash",calories:"510 Cal",gluten:"Gluten Free",serve:"Single-Serve",price:"13$",qty:0},
    {id:16,imgsource:"images/menu-img-16.jpg",imgtitle:"Zingy Buffalo Chicken",calories:"470 Cal",gluten:"Gluten Free",serve:"Single-Serve",price:"13$",qty:0},
    {id:17,imgsource:"images/menu-img-1.jpeg",imgtitle:"Steak Peppercorn",calories:"500 Cal",gluten:"Gluten Free",serve:"Single-Serve",price:"13$",qty:0},
    {id:18,imgsource:"images/menu-img-2.jpg",imgtitle:"Homestyle Chicken",calories:"560 Cal",gluten:"Gluten Free",serve:"Single-Serve",price:"13$",qty:0},
    {id:19,imgsource:"images/menu-img-3.jpg",imgtitle:"Cauliflower Shell Beef Bolognese",calories:"470 Cal",gluten:"Gluten Free",serve:"Single-Serve",price:"13$",qty:0},
    {id:20,imgsource:"images/menu-img-4.jpg",imgtitle:"Sausage Baked Penne",calories:"490 Cal",gluten:"Gluten Free",serve:"Single-Serve",price:"13$",qty:0},
    {id:21,imgsource:"images/menu-img-5.jpg",imgtitle:"Savory-Sweet Chicken Teriyaki Bowl",calories:"480 Cal",gluten:"Gluten Free",serve:"Single-Serve",price:"13$",qty:0},
    {id:22,imgsource:"images/menu-img-6.jpg",imgtitle:"Protein-Packed Chicken Parm",calories:"410 Cal",gluten:"Gluten Free",serve:"Single-Serve",price:"13$",qty:0},
    {id:23,imgsource:"images/menu-img-7.jpg",imgtitle:"Golden Oven-Fried Chicken & Mash",calories:"510 Cal",gluten:"Gluten Free",serve:"Single-Serve",price:"13$",qty:0},
    {id:24,imgsource:"images/menu-img-8.jpg",imgtitle:"Zingy Buffalo Chicken",calories:"470 Cal",gluten:"Gluten Free",serve:"Single-Serve",price:"13$",qty:0},  
    {id:25,imgsource:"images/menu-img-9.jpg",imgtitle:"Steak Peppercorn",calories:"500 Cal",gluten:"Include Gluten",serve:"Single-Serve",price:"13$",qty:0},
    {id:26,imgsource:"images/menu-img-10.jpg",imgtitle:"Homestyle Chicken",calories:"560 Cal",gluten:"Gluten Free",serve:"Single-Serve",price:"13$",qty:0},
    {id:27,imgsource:"images/menu-img-11.jpg",imgtitle:"Cauliflower Shell Beef Bolognese",calories:"470 Cal",gluten:"Gluten Free",serve:"Single-Serve",price:"13$",qty:0},
    {id:28,imgsource:"images/menu-img-12.jpg",imgtitle:"Sausage Baked Penne",calories:"490 Cal",gluten:"Gluten Free",serve:"Single-Serve",price:"13$",qty:0},
    {id:29,imgsource:"images/menu-img-13.jpg",imgtitle:"Savory-Sweet Chicken Teriyaki Bowl",calories:"480 Cal",gluten:"Gluten Free",serve:"Single-Serve",price:"13$",qty:0},
    {id:30,imgsource:"images/menu-img-14.jpg",imgtitle:"Protein-Packed Chicken Parm",calories:"410 Cal",gluten:"Include Gluten",serve:"Single-Serve",price:"13$",qty:0},
    {id:31,imgsource:"images/menu-img-15.jpg",imgtitle:"Golden Oven-Fried Chicken & Mash",calories:"510 Cal",gluten:"Gluten Free",serve:"Single-Serve",price:"13$",qty:0},
    {id:32,imgsource:"images/menu-img-16.jpg",imgtitle:"Zingy Buffalo Chicken",calories:"470 Cal",gluten:"Gluten Free",serve:"Single-Serve",price:"13$",qty:0},
]


function chooseMeal(){

    minitems=localStorage.getItem("min");
    ritems=minitems;

    maxitems=localStorage.getItem("max");

    document.getElementById("minmeals").innerText=minitems;
    document.getElementById("remaining-items").innerText=minitems; 
    document.getElementById("r-items").innerText=minitems; 

    // selectdiv.appendChild(select);
    document.getElementById("cm-showdate").innerHTML=localStorage.getItem("selecteddate");
    document.getElementById("cm-date").appendChild(createselectdate());
   
   createImages("jsimg");
    
}

function clearAll(){

    //removing child elements of meal div
    let mealDiv=document.getElementById("meal-div");
    let child=mealDiv.lastElementChild;
    while(child){
        mealDiv.removeChild(child);
        child=mealDiv.lastElementChild;
    }
    ritems=minitems;
    titems=0;
    tprice=0;
    document.getElementById("items-price").innerHTML=tprice;
    document.getElementById("total-items").innerText=titems;

    document.getElementById("cartbutton").style.backgroundColor="#ededed";
    document.getElementById("cartbutton").style.color="#d0d0d0";
    document.getElementById("cartbutton").innerHTML='Add ' + ritems + ' to Continue';

    for(let i=0;i<imagesobject.length;i++){
            imagesobject[i].qty=0;   
    }   
    // hiding p text on addition of cart item 
    document.getElementById("min-meals").classList.remove('d-none');
    document.getElementById("min-meals").classList.add('d-block');

    document.getElementById("save-more").classList.add('d-none');

}

let totalItemsSelected=0;
function cartButton(){ 
    let selectedmealarray=[];
    for(let i=0;i<imagesobject.length;i++){
        if(imagesobject[i].qty>0){

            totalItemsSelected+=imagesobject[i].qty;
            selectedmealarray.push(imagesobject[i]);
        } 

    }  
    localStorage.setItem("totalItemsSelected",totalItemsSelected);
    localStorage.setItem("totalItemsPrice",innerPrice);
    localStorage.setItem("selectedmealarr",JSON.stringify(selectedmealarray));

    if(ritems<=0 && titems<=maxitems)
    {
        window.location.href = "file:///home/brainx/Desktop/Brainx-Training/Frontend-task/checkout_page.html?state=#";

    }
    else{
        document.getElementById("ritems-popup").classList.remove('d-none');
         document.getElementById("ritems-popup").classList.add('d-block');
         setInterval(hideRitemsPopup, 5000);
        // document.getElementById("ritems-popup").setAttribute ('style', 'display: block !important;');

    }

}
function hideRitemsPopup(){
    document.getElementById("ritems-popup").classList.remove('d-block');
    document.getElementById("ritems-popup").classList.add('d-none');
    // document.getElementById("ritems-popup").setAttribute ('style', 'display: none !important;');
}




// Media Quries Section

function displayMealDetails(){
    // settimg height of sidebar for mobile screen 
    document.getElementById("sidebar").classList.add('sidebarheight-660px');
    // setting hight of internal mealdiv container
    document.getElementById("ordered-meal-div").classList.add('mealdiv-height');

   
  
    if (document.getElementById("angle-down").className.includes("d-block")){
        document.getElementById("angle-down").classList.remove('d-block');
        document.getElementById("angle-down").classList.add('d-none');
        document.getElementById("sidebar").classList.remove('sidebarheight-660px');
         
    } 
    else{
        document.getElementById("angle-down").classList.remove('d-none');
        document.getElementById("angle-down").classList.add('d-block');
    }

    if (document.getElementById("deliverydate").className.includes("d-flex")){

        document.getElementById("deliverydate").classList.remove('d-flex');
        document.getElementById("deliverydate").classList.add('d-none');
    } 
    else{
        document.getElementById("deliverydate").classList.remove('d-none');
        document.getElementById("deliverydate").classList.add('d-flex');
    }

    if (document.getElementById("ordered-meal-div").className.includes("d-block")){

        document.getElementById("ordered-meal-div").classList.remove('d-block');
        document.getElementById("ordered-meal-div").classList.add('d-none');
    } 
    else{
        document.getElementById("ordered-meal-div").classList.remove('d-none');
        document.getElementById("ordered-meal-div").classList.add('d-block');
    }
    

   

}
function hideMealDetails(){
    document.getElementById("sidebar").classList.remove('sidebarheight-660px');
    document.getElementById("angle-down").classList.remove('d-block');
    document.getElementById("angle-down").classList.add('d-none');
    document.getElementById("deliverydate").classList.remove('d-flex');
    document.getElementById("deliverydate").classList.add('d-none');
    document.getElementById("ordered-meal-div").classList.remove('d-block');
    document.getElementById("ordered-meal-div").classList.add('d-none');

}