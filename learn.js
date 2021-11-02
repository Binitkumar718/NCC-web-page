const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.link');

    
 
     burger.addEventListener('click',()=>{
       nav.classList.toggle('nav-active');

       burger.classList.toggle('toggle');
     });

     
    
  }
  navSlide();

  function openPage(pageName, elmnt, color) {
    
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
   
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
    }
  
    tablinks = document.getElementsByClassName("tablink");
   for (i = 0; i < tablinks.length; i++) {
     tablinks[i].style.backgroundColor = "";
   }
  
 
    document.getElementById(pageName).style.display = "block";
  
   elmnt.style.backgroundColor = color;
  }
  
  document.getElementById("defaultOpen").click();
