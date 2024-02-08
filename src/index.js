
    // barre de navigation responsive
    const hamburger = document.querySelector(".hamburger")
    const menu = document.querySelector(".menu")
    const cross = document.querySelector(".cross")

    hamburger.addEventListener('click', () => {
        menu.classList.toggle('mobile-menu')
    })

    cross.addEventListener('click', () => {
        menu.classList.remove('mobile-menu')

    })


   
    //  carousel de la section services
    const buttons = document.querySelectorAll(".button");
    const cards = document.querySelectorAll(".prod");

    buttons.forEach((btn) => {
        btn.addEventListener('click', (e) => {
            const calcnextslide = e.target.id === "next" ? 1 : -1;
            const slideActive = document.querySelector(".active");
            newIndex = calcnextslide + [...cards].indexOf(slideActive);
            
            if (newIndex < 0 ) newIndex =[...cards].length - 1;
        if (newIndex >= [...cards].length) newIndex = 0;
            cards[newIndex].classList.add("active");
            slideActive.classList.remove("active");

        });
    });


    // caroussel des best seller
    const buttonsb = document.querySelectorAll(".button-best");
    const bests = document.querySelectorAll(".best");
  
    buttonsb.forEach((btn) => {
        btn.addEventListener('click', (e) => {
            const calcnextslidebest = e.target.id === "next-best" ? 1 : -1;
            const slideActivebest = document.querySelector(".active-best");
            nextIndexbests = calcnextslidebest + [...bests].indexOf(slideActivebest);
            console.log(nextIndexbests)
        if (nextIndexbests < 0 ) nextIndexbests =[...bests].length - 1;
        if (nextIndexbests >= [...bests].length) nextIndexbests = 0;
            bests[nextIndexbests].classList.add("active-best");
            slideActivebest.classList.remove("active-best");
       
        });
    });

 
