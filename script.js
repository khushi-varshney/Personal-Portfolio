
// main-page 
const typed = new Typed(".mee", {
    strings:[' STUDENT .', 'Web Developer .', 'Frontend Developer .', 'Java Developer .'],
    typeSpeed:50,
    backSpeed:50,
    backDelay:600,
    loop:true
});

document.querySelector('.close').style.display='none';
document.querySelector('.hamburger').addEventListener("click", ()=>{
    document.querySelector('.sidebar').classList.toggle('sidebarGo');
    if(document.querySelector('.sidebar').classList.contains('sidebarGo')){
        document.querySelector('.ham').style.display = 'inline';
        document.querySelector('.close').style.display = 'none';
    }else{
        document.querySelector('.ham').style.display = 'none';
      document.querySelector('.close').style.display = 'inline';
    }
})

