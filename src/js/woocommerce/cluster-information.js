( async function() {
    const container = document.querySelector('.cluster-information');
    //parameters 
    // const data = new FormData;
    // data.append('action', cluster_information_object.action);
    // data.append('nonce', cluster_information_object.nonce);

    // async function getData() {
    //     const response = await fetch(cluster_information_object.url, {
    //         method: 'Post',
    //         credentials: 'same-origin',
    //         body: data
    //     });
    //     const datos = await response.json();
    //     return datos;
    // }

    // getData();

    function templateString(post_title, post_excerpt, url, src) {
        return(
            `<li class="cluster-information__item">
                <div class="thumbnail-container">
                    <a class="thumbnail-link" href="${url}">
                        <img class="thumbnail-image" src="${src}" alt="${post_title}">
                    </a>
                </div>
                <div class="post_excerpt-container">
                    <h2 class="title">
                        <a class="title-link" href="${url}">${post_title}</a>
                    </h2>
                    <p class="post_excerpt">
                        ${post_excerpt}
                        <span class="more">Más</span>
                    </p>
                    <a class="link" href="${url}">
                        Ver más información
                        <svg class="icon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="20px" height="20px" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 20 20"><path d="M2 11V9h12l-4-4l1-2l7 7l-7 7l-1-2l4-4H2z" fill="#3e3e3e"/></svg>
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
            const HTMLString = templateString(dato.post_title, dato.post_excerpt, dato.url, dato.src);
            const HTML = convertHTML(HTMLString);
            container.append(HTML);
            const image = HTML.querySelector('.thumbnail-image');
            image.addEventListener('load', (e) => {
                image.classList.add('fadeIn');
            } );
        });
    }
    async function cacheExist() {
        if (sessionStorage.getItem('information')) {
            const datosCache = await sessionStorage.getItem('information');
            renderHTML(JSON.parse(datosCache), container);
        }
        else { 
            window.addEventListener('scroll', async (e) => {
                if ( !container.dataset.render ) {
                     container.setAttribute('data-render', 'render');
                    const datos = await getData( cluster_information_object.action, cluster_information_object.nonce, cluster_information_object.url);
                    renderHTML(datos, container );
                    sessionStorage.setItem('information', JSON.stringify(datos));
                }
               
            } );
        }
    }
    cacheExist();
    
    

} )();