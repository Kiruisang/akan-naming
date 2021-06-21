function getsubmit(){
    var firstName = document.forms["form_reg"]["fname"].value;
    var secondName = document.forms["form_reg"]["sname"].value;
    var fullName = firstName.concat(secondName);
   
    var sex = document.getElementById("items");
    var items = sex.options[sex.selectedIndex].value;
  
    var DD = (document.forms["form_reg"]["birthDate"].value);
    var month = document.forms["form_reg"]["Month"].value;
    var birthYear = (document.forms["form_reg"]["yearOfBirth"].value);
  
    var CC = parseInt(birthYear.slice(0,2));
    var YY = parseInt(birthYear.slice(2,4));
    month = parseInt(month);
    DD = parseInt(DD);

    var a = (CC/4 - 2* CC - 1);
    var b = 5*YY/4;
    var c = ((26*(month+1)/10));
    var dob = (a + b + c + DD)%7;
    
    var akanFemaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
    var akanMaleNames = ["Kwasi", "Kwacho", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    var days= ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
    if (firstName== "" || secondName=="" ||birthYear=="") {
      alert("Please enter valid data");
    }
    else if ((dob>=0.0 && dob<1) && (items == 1)){
      document.getElementById("Result").innerHTML = "Hi "+fullName+ ". Your Akan name is "+akanFemaleNames[0]+". This means that you were born on "+days[0];
    } else if((dob>=1.0 && dob<2) && (items == 1)){
      document.getElementById("Result").innerHTML = "Hi "+fullName+ ". Your Akan name is "+akanFemaleNames[1]+". This means that you were born on "+days[1];
    }else if((dob>=2.0 && dob<3) && (items == 1)){
      document.getElementById("Result").innerHTML = "Hi "+fullName+ ". Your Akan name is "+akanFemaleNames[2]+". This means that you were born on "+days[2];
    }else if((dob>=3.0 && dob<4) && (items == 1)){
      document.getElementById("Result").innerHTML = "Hi "+fullName+ ". Your Akan name is "+akanFemaleNames[3]+". This means that you were born on "+days[3];
    }else if((dob>=4.0 && dob<5) && (items == 1)){
      document.getElementById("Result").innerHTML = "Hi "+fullName+ ". Your Akan name is "+akanFemaleNames[4]+". This means that you were born on "+days[4];
    }else if((dob>=5.0 && dob<6) && (items == 1)){
      document.getElementById("Result").innerHTML = "Hi "+fullName+ ". Your Akan name is "+akanFemaleNames[5]+". This means that you were born on "+days[5];
    }else if((dob>=6.0 && dob<7) && (items == 1)){
      document.getElementById("Result").innerHTML = "Hi "+fullName+ ". Your Akan name is "+akanFemaleNames[6]+". This means that you were born on "+days[6];
    } else if((dob>=0.0 && dob<1) && (items == 2)){
      document.getElementById("Result").innerHTML="Hi "+fullName+ ". Your Akan name is "+akanMaleNames[0]+". This means that you were born on "+days[0];
    } else if((dob>=1.0 && dob<2) && (items == 2)){
      document.getElementById("Result").innerHTML="Hi "+fullName+ ". Your Akan name is "+akanMaleNames[1]+". This means that you were born on "+days[1];
    }else if((dob>=2.0 && dob<3) && (items == 2)){
      document.getElementById("Result").innerHTML="Hi "+fullName+ ". Your Akan name is "+akanMaleNames[2]+". This means that you were born on "+days[2];
    }else if((dob>=3.0 && dob<4) && (items == 2)){
      document.getElementById("Result").innerHTML="Hi "+fullName+ ". Your Akan name is "+akanMaleNames[3]+". This means that you were born on "+days[3];  
    }else if((dob>=4.0 && dob<5) && (items == 2)){
      document.getElementById("Result").innerHTML="Hi "+fullName+ ". Your Akan name is "+akanMaleNames[4]+". This means that you were born on "+days[4];  
    }else if((dob>=5.0 && dob<6) && (items == 2)){
      document.getElementById("Result").innerHTML="Hi "+fullName+ ". Your Akan name is "+akanMaleNames[5]+". This means that you were born on "+days[5];
    }else{
      document.getElementById("Result").innerHTML="Hi "+fullName+ ". Your Akan name is "+akanMaleNames[6]+". This means that you were born on "+days[6];
    }
  }