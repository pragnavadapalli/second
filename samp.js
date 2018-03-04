function getfile(file,callback){
   var xhr=new XMLHttpRequest();
   xhr.overrideMimeType("applicaton/json");
   xhr.open("GET",file,true);
   xhr.onreadystatechange=function(){
     if(xhr.readyState === 4 && xhr.status== "200"){
       callback(xhr.responseText);
     }
   };
   xhr.send();
}
getfile("sample.json",function(text){
  let data=JSON.parse(text);
  console.log(data);
  basicinfo(data.basics);
});
function basicinfo(basic){
  var profile=document.getElementById("basics");
  var name=document.createElement("h1");
  name.innerHTML=basic.name;
  profile.appendChild(name);
    var phone=document.createElement("h5");
    phone.innerHTML=basic.phone;
    profile.appendChild(phone);
    var mail=document.createElement("h5");
    mail.innerHTML=basic.mail;
    profile.appendChild(mail);
    var photo=document.createElement("img");
    photo.src=basic.photo;
    profile.appendChild(photo);


    }
