function current()
{
    var date = new Date();

    // var cuurent_date = date.getDay() + ":" 
    // + date.getMonth() + ":" + date.getFullYear(
    // console.log(date);
    let utc_date = date.getUTCDay() + "/" 
    + date.getUTCMonth() + "/" + date.getFullYear();
    // let utc_date = date.toLocaleDateString();
    let utc_time = date.getUTCHours() + ":" 
    + date.getUTCMinutes() + ":" + date.getUTCSeconds();

    let se_date = document.getElementById("time").value;
    var date1 = new Date(se_date);
    var day = date1.getDate();

    let current = date.getHours() + ":" 
    + date.getMinutes() + ":" + date.getSeconds(); 

    let diff_u_c = date.getHours() - date.getUTCHours();
    let diff_u_c_y = date.getFullYear() - date.getUTCFullYear();
    

    let ans1 = date.getDate() -date1.getDate();
    let ans2 = date.getMonth() -date1.getMonth();
    let ans3 = date.getHours() -date1.getHours();
    let ans4 = date.getSeconds() -date1.getSeconds();
    
    document.querySelector(".cur").textContent=date;
    document.querySelector(".utdate").textContent=utc_date;
    document.querySelector(".uttime").textContent=utc_time;
    document.querySelector(".sel_date").textContent=se_date;
    document.querySelector(".dif_date").textContent=diff_u_c;
    document.querySelector(".dif_year").textContent=diff_u_c_y;
    document.querySelector(".ANS1").textContent=ans1;
    document.querySelector(".ANS2").textContent=ans2;
    document.querySelector(".ANS3").textContent=ans3;
    document.querySelector(".ANS4").textContent=ans4;


    //                *************   Logic of Below code  ***********
    // If difference of current year and year of selected Date is greater or equal to 2 than cartoon.png photo will be displayed( default photo profile.png ) 

    date1= new Date();
    var sel_date = document.getElementById("time").value;
    d = new Date(sel_date);
    var year = date.getFullYear() - d.getFullYear();
    var photo;

    if (year >= 2)
    {
        photo = "cartoon.png";
    }

    document.getElementById("Logo").src=photo;
}

function add()
{
    date = new Date();
    sel_date =document.getElementById("time").value;
     d = new Date(sel_date);
     d.setDate(d.getDate() + 10);
     var day =  d.getDate();
     var month = d.getMonth()+1;
     var year = d.getFullYear();
    var final = day + "/"  + month +"/"+ year; 
   document.querySelector(".ANS5").textContent =final;
    
    
}
function before()
{
    date = new Date();
    sel_date =document.getElementById("time").value;
     d = new Date(sel_date);
     d.setDate(d.getDate() - 30);
     var day =  d.getDate();
     var month = d.getMonth()+1;
     var year = d.getFullYear();
    var final = day + "/"  + month +"/"+ year; 
   document.querySelector(".ANS6").textContent =final;
    
    
}

function logo()
{
    


}

