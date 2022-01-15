( async function() {
    const container = document.querySelector('.cluster-categories');
    const homeURL = document.getElementById('home-url').href;
    const loader = document.createElement('img');

    // function addAttribute(element, attributes) {
	// 	for (let attribute in attributes) {
	// 	  element.setAttribute(attribute, attributes[attribute]);
	// 	}
	// }
	addAttribute( loader, {
		src: homeURL + '/wp-content/plugins/cluster-categories/assets/images/loader.gif',
		width: 50,
        height: 50,
        class: 'loader-categories'
	});
    //parameters 
    // const data = new FormData;
    // data.append('action', cluster_categories_object.action);
    // data.append('nonce', cluster_categories_object.nonce);

    // async function getData() {
    //     const response = await fetch(cluster_categories_object.url, {
    //         method: 'Post',
    //         credentials: 'same-origin',
    //         body: data
    //     });
    //     const datos = await response.json();
    //     return datos;
    // }

    // getData();

    function templateString(name, description, url, src, index) {
        let lengthText = description.length;
        let excerpt;
        //is mobile
        if ( window.innerWidth < 425 ) {
            if ( lengthText > 100 ) {
                excerpt = description.slice(0 , 100) + '... <span class="more">más</span>';
            }
            else {
                excerpt = description;
            }
        }
        else {
            excerpt = description;
        }
        
        return(
            `<li class="cluster-categories__item">
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
                    <p class="description" data-index="${index}">
                        ${excerpt}
                        
                    </p>
                    <a class="button" href="${url}">
                        Ver ofertas
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
        let index = 0;
        datos.forEach( dato => {
            // debugger;
            const HTMLString = templateString(dato.name, dato.description, dato.url, dato.src, index++);
            const HTML = convertHTML(HTMLString);
            container.append(HTML);
            const image = HTML.querySelector('.thumbnail-image');
            image.addEventListener('load', (e) => {
                image.classList.add('fadeIn');
            } );
        });
    }
    //function ver mas
    function more(datos) {
        if ( document.querySelector('.more') ) {
            let showMore = document.querySelectorAll('.more');
            
            // debugger;
            showMore.forEach( (element) => {
                element.addEventListener('click', (e) => {
                    let excerpt = element.parentNode;
                    let index = excerpt.dataset.index;
                    excerpt.textContent = datos[index].description;
                } ); //listener
            } );//foreach
                
            }
        }
    async function cacheExist() {
        if (sessionStorage.getItem('categories')) {
            const datosCache = await sessionStorage.getItem('categories');
            renderHTML(JSON.parse(datosCache), container);
            more( JSON.parse(datosCache));
        }
        else { 
            window.addEventListener('scroll', async (e) => {
                
                if ( ! container.dataset.render ) {
                    container.append(loader);
                    container.setAttribute('data-render', 'render');
                    const datos = await getData( cluster_categories_object.action, cluster_categories_object.nonce, cluster_categories_object.url );
                    renderHTML(datos, container );
                    more(datos);
                    // document.querySelector('.loader-categories').style.display = 'none';
                    container.querySelector('.loader-categories').remove();
                    sessionStorage.setItem('categories', JSON.stringify(datos));
                }
            } );
        }
    }
    cacheExist();
    
    

} )();