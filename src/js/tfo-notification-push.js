( async function() {
    const notificationIcon = document.querySelector('#notification-icon'),
        notificationIconContent = document.getElementById('notification-icon__content'),
        notificationContainer = document.getElementById('notification-container'),
        notificationClose = document.getElementById('notification-close'),
        notificationList = notificationContainer.querySelector('.notification-list');
    //link base root home url
    const homeURL = document.getElementById('home-url').href;

    if ( ! tfo_is_mobile() ) { //si no es mobile
       //function iterar object
        function addAttribute(element, attributes) {
            for (let attribute in attributes) {
                element.setAttribute(attribute, attributes[attribute]);
            }
        }
        const loader = document.createElement('img');
        addAttribute(loader, {
            src: homeURL + '/wp-content/plugins/tfo-notification-push/assets/image/loader.gif',
            width: 50,
            height: 50,
            class: 'loader'
        });
        //add parameters ajax
        let data = new FormData();
        data.append( 'nonce',  ajax_notification_object.nonce);
        data.append( 'action', ajax_notification_object.action );
        //function get data ajax
        async function getData() {
            const response = await fetch(ajax_notification_object.url, {
                method: 'POST',  
                credentials: 'same-origin',
                body: data         
            });
            const datos = await response.text();
            return datos;
        }
        notificationIcon.addEventListener('click', async (e) => {
            e.preventDefault();
            notificationIcon.style.display = 'none';
            notificationIconContent.append(loader);
            if (sessionStorage.getItem('notification-push')) {
                const datos = sessionStorage.getItem('notification-push');
                notificationList.innerHTML = datos;
                notificationContainer.classList.add('active');
                notificationIconContent.querySelector('.loader').remove();
                notificationIcon.style.display = 'block';
                return;
            }
            const datos = await getData();
            notificationList.innerHTML = datos;
            notificationIconContent.querySelector('.loader').remove();
            notificationContainer.classList.add('active');
            notificationIcon.style.display = 'block';
            window.sessionStorage.setItem('notification-push', datos);
        });
        notificationClose.addEventListener('click', (e) => {
            notificationContainer.classList.remove('active');
        } );
    }
})();