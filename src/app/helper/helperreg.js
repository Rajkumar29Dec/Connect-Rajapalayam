function register_helper(){
    var name;
    var email;
    var city;
    var work;
    var gender;
    var phone;
    var password;
    name=document.getElementById('disp_name_helper').value;
    email=document.getElementById('email_helper').value;
    city=document.getElementById('city_helper').value;
    gender=document.getElementById('gender_helper').value;
    work=document.getElementById('work_helper').value;
    password=document.getElementById('pswd_helper').value;
    phone=document.getElementById('phone_helper').value;

    var dbrefreg=firebase.database();
    dbrefreg.ref('helper').child(city).child(work).set({
        Name:name,
        Email:email,
        Password:password,
        Phone:phone,
        Gender:gender,
        Work:work
    });
    getElementById('disp_name_helper').value="";
    getElementById('email_helper').value="";
    getElementById('pswd_helper').value="";
    getElementById('city_helper').value="";
    getElementById('gender_helper').value="";
    getElementById('work_helper').value="";
    getElementById('phone_helper').value="";
}