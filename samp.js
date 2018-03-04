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
  education(data.education);
});

var main=document.querySelector('.flex-parent')

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




  var right=document.createElement("div");
  right.classList.add("content-child");
  main.appendChild(right);
  //appendChild ie.. right div to main
  //education div
  function education(education){
  var e1=document.createElement("div");
  e1.classList.add("edu");
  right.appendChild(e1);
  //appending dive1 to right
  var h1=document.createElement("h1");
  h1.setAttribute("id","heading");
  h1.textContent="Education Details";
  e1.appendChild(h1);
  //appending h1 to e1 div
  // function eduinfo(education){
    for(i in education){
        //creation of course
      var h2=document.createElement("h2");
      h2.classList.add("edu1");
      h2.innerHTML=education[i].course;
      //creation of College
      h1.appendChild(h2);
      var h3=document.createElement("h3");
      h3.classList.add("edu2");
      h3.textContent=education[i].college;
      h2.appendChild(h3);
     var ul=document.createElement("ul");
     ul.classList.add("edu3");
     h3.appendChild(ul);
        for(j in education){
           var li=document.createElement("li");
           li.textContent=education[i].data[j];
           ul.appendChild(li);
        }
        // ul.appendChild(li);
    }
  }
