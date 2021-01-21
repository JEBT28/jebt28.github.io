let darkmode = false;
let navBarActive  =false;

function navBarAction() {
    const lateralnavbar = document.getElementById('lateralnavbar');

    if (navBarActive)
    {
        lateralnavbar.style.display ='none';
        navBarActive =!navBarActive;
    }
    else
    {
        lateralnavbar.style.display ='block';
        navBarActive =!navBarActive;
    }

}

function theme(){
    const switchMode =  document.getElementById('switch');
    const body =  document.body;
    const btnMenuImg = document.getElementById('btnMenuImg')
    const switchCircle = document.getElementById('circle')

    if(darkmode)
    {
        switchMode.style.justifyContent='start';
        switchMode.style.backgroundColor='white';
        switchMode.style.border='1px solid grey';
        switchCircle.style.backgroundColor='grey';
        body.style.setProperty('--background-color','white')
        body.style.setProperty('--color','black')
        btnMenuImg.src='img/menu.svg';
        darkmode = !darkmode;
    }
    else
    {
        switchMode.style.justifyContent='flex-end';
        switchMode.style.backgroundColor='#0877F8';
        switchMode.style.border='none';
        switchCircle.style.backgroundColor='white';
        body.style.setProperty('--background-color','#292929')
        body.style.setProperty('--color','white')
        btnMenuImg.src='img/menu-white.svg';
        darkmode = !darkmode;
    }
}











