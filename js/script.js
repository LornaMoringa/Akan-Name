function akanNaming(){
    /* declaration  and initialisation */
     var month=document.getElementById("month").value;
     var mm=parseInt(month);
     var day=document.getElementById("day").value;
     var dd=parseInt(day);
     var year=document.getElementById("year").value;
     var yy=parseInt(year);
     var cc=(yy-1)/100+1;
    /* the formula */
     var result=parseInt( ( (cc/4) -2*cc-1) + ((5*yy/4) ) + ((26*(mm+1)/10)) + dd) % 7 ;
     var boyNames=["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
     var girlNames=["Akosua"," Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];
     if (document.getElementById("gender").checked)
     {
       var gender='male';
     }
     else
    {
       var gender='female';
    }
    if (mm <1  || mm>12 || mm==2 && dd>29)
    {
       alert("invalid month");
    }
    else if( dd< 1 || dd>31)
    {
       alert("invalid date");
    }
    else if (Math.round(result)==1 && gender==='male')
    {
      document.getElementById("display").innerHTML =("you were born on <strong>Monday</strong> ,your akan name is <strong>"+boyNames[1]) + "</strong>";
    }
    else if (Math.round(result)==2 && gender==='male')
    {
      document.getElementById("display").innerHTML =("you were born on <strong>Tuesday</strong> ,your akan name is <strong>"+boyNames[2]) + "</strong>";
    }
    else if (Math.round(result)==3 && gender==='male' )
    {
      document.getElementById("display").innerHTML =("you were born on <strong>Wednesday</strong> ,your akan name is <strong>"+ boyNames[3]) + "</strong>";
    }
    else if (Math.round(result)==4 && gender==='male')
    {
      document.getElementById("display").innerHTML = ("you were born on <strong>Thursday</strong>,your akan name is <strong>"+ boyNames[4]) + "</strong>";
    }
    else if (Math.round(result)==5 && gender==='male')
    {
      document.getElementById("display").innerHTML = ("you were born on <strong>Friday</strong>,your akan name is <strong>"+ boyNames[5]) + "</strong>";
    }
    else if (Math.round(result)==6 && gender==='male')
    {
      document.getElementById("display").innerHTML = ("you were born on <strong>Saturday</strong>,your akan name is <strong>"+ boyNames[6]) + "</strong>";
    }
    else if (Math.round(result)==0 && gender==='male')
    {
      document.getElementById("display").innerHTML = ("you were born on <strong>Sunday</strong>,your akan name is <strong>"+ boyNames[0]) + "</strong>";
    }
    else if (Math.round(result)==1 && gender==='female')
    {
      document.getElementById("display").innerHTML = ("you were born on <strong>monday</strong> ,your akan name is <strong>"+ girlNames[1]) + "</strong>";
    }
    else if (Math.round(result)==2 && gender==='female')
    {
      document.getElementById("display").innerHTML = ("you were born on <strong>Tuesday</strong>,your akan name is <strong>"+ girlNames[2]); + "</strong>"
    }
    else if (Math.round(result)==3 && gender==='female')
    {
      document.getElementById("display").innerHTML =  ("you were born on <strong>Wednesday</strong>,your akan name is <strong>"+ girlNames[3]) + "</strong>";
    }
    else if (Math.round(result)==4 && gender==='female')
    {
      document.getElementById("display").innerHTML =  ("you were born on <strong>Thursday</strong>,your akan name is <strong>"+ girlNames[4]) + "</strong>";
    }
    else if (Math.round(result)==5 && gender==='female')
    {
      document.getElementById("display").innerHTML =  ("you were born on <strong>Friday<strong>,your akan name is <strong>"+ girlNames[5]) + "</strong>";
    }
    else if (Math.round(result)==6 && gender==='female')
    {
      document.getElementById("display").innerHTML = ("you were born on <strong>Saturday</strong>,your akan name is <strong>"+ girlNames[6]) + "</strong>";
    }
    else if (Math.round(result)==0 && gender==='female')
    {
      document.getElementById("display").innerHTML =  ("you were born on <strong>Sunday</strong>, your akan name is <strong>" + girlNames[0]) + "</strong>";
    }
    else
    {
     alert("please check data");
    }
    document.getElementById("display").style.display = 'block';
    let form = document.getElementsByName("form1")[0];
    form.reset();
    return false;
    }