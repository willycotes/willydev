        
( function() {
    const btn_next = document.getElementById("btn-tematicas__next"),
    btn_prev = document.getElementById('btn-tematicas__prev'),
    sliderTematicasContent = document.querySelector(".slider-tematicas-content");
    const alto_img = document.querySelector(".slide-tematicas__items").clientHeight;
    // const homeURL = document.getElementById('home-url').href;
    // const sliderList = document.getElementById('slider-tematicas-content');
    
    btn_prev.addEventListener("click", () => {
        sliderTematicasContent.scrollBy( {top:0, left: -alto_img*4, behavior:"smooth"});                                    
    });
    btn_next.addEventListener("click", () => {
        sliderTematicasContent.scrollBy({top:0, left: alto_img*4, behavior:"smooth"});         
        });
        //ajax
        // let data = new FormData();
        // data.append('nonce', 'prueba'  );
        // async function getData() {
        //     const response = await fetch(location.href + '?wc-ajax=carousel', {
        //         method: 'POST',
        //         credentials: 'same-origin',
        //         body: data
                
        //     });
        //     const datos = await response.text();
        //     return datos;
        // }
        // const datos = await getData();

        // sliderList.innerHTML = datos;
})();


