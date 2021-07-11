// Collaps Sidebar
$(document).ready(function () {
    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
    });
});




// Scrips for collaps of Steps of javascript

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}


function scroll(element){   
    var ele = document.getElementById(element);   
    window.scrollTo(ele.offsetLeft,ele.offsetTop); } 
    

   
    
      //   Array Methods
    const fruits=["Banana","Orang","Apple", "Mango"];
    console.log(fruits.toString());
    document.getElementById("fruits").innerHTML=fruits.toString();






// Tab in Card
$('#bologna-list a').on('click', function (e) {
  e.preventDefault()
  $(this).tab('show')
})





    