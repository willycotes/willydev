( async function() {
    const container = document.querySelector('.cluster-services');
    //parameters 
    // const data = new FormData;
    // data.append('action', cluster_services_object.action);
    // data.append('nonce', cluster_services_object.nonce);

    // async function getData() {
    //     const response = await fetch(cluster_services_object.url, {
    //         method: 'Post',
    //         credentials: 'same-origin',
    //         body: data
    //     });
    //     const datos = await response.json();
    //     return datos;
    // }

    // getData();

    function templateString(name, description, url, src) {
        return(
            `<li class="cluster-services__item">
                <div class="thumbnail-container">
                    <a class="thumbnail-link" href="${url}">
                        <img class="thumbnail-image" src="${src}" alt="${name}">
                    </a>
                </div>
                <div class="description-container">
                    <h2 class="title">
                        <a class="title-link" href="${url}">
                            ${name}
                            <svg class="icon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="20px" height="20px" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 20 20"><path d="M6 15l5-5l-5-5l1-2l7 7l-7 7z" fill="#16a9ae;"/></svg>
                         </a>
                    </h2>
                    <p class="description">
                        ${description}
                        <span class="more">Más</span>
                    </p>
                    <a class="button" href="${url}">
                        Ver más
                        <svg class="icon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="20px" height="20px" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 20 20"><path d="M2 11V9h12l-4-4l1-2l7 7l-7 7l-1-2l4-4H2z" fill="#ffffff"/></svg>
                    </a>
                </div>
            </li>`
        );
    }
    // function convertHTML(HTMLString) {
    //     const HTML = document.implementation.createHTMLDocument();
    //     HTML.body.innerHTML = HTMLString;
    //     return HTML.body.children[0];
    // }
    function renderHTML(datos, container) {
        // debugger;
        datos.forEach( dato => {
            // debugger;
            const HTMLString = templateString(dato.name, dato.description, dato.url, dato.src);
            const HTML = convertHTML(HTMLString);
            container.append(HTML);
            const image = HTML.querySelector('.thumbnail-image');
            image.addEventListener('load', (e) => {
                image.classList.add('fadeIn');
            } );
        });
    }
    async function cacheExist() {
        if (sessionStorage.getItem('services')) {
            const datosCache = await sessionStorage.getItem('services');
            renderHTML(JSON.parse(datosCache), container);
        }
        else { 
            window.addEventListener('scroll', async (e) => {
                if ( !container.dataset.render ) {
                    container.setAttribute('data-render', 'render');
                    const datos = await getData( cluster_services_object.action, cluster_services_object.nonce, cluster_services_object.url);
                    renderHTML(datos, container );
                    sessionStorage.setItem('services', JSON.stringify(datos));
                }
            } );
        }
    }
    cacheExist();
    
    

} )();