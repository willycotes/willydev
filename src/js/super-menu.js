(function() {
	const btnMenuToggle = document.getElementById('btn-nav__toggle'),
	btnCerrarMenu = document.getElementById('btn-nav__close'),
	grid = document.getElementById('grid'),
	contenedorSubCategorias = document.getElementById('subcategory-container');

	//version desktop 

	if ( ! tfo_is_mobile() ) {
		//cuando se hace click sobre un elemento de la bara de menu
		document.querySelectorAll('.menu-bar--desktop .menuBar-list__items .icon').forEach((items) => {
			items.addEventListener('click', (e) => {
				//show grid
				grid.classList.add('active');
				//show list items especific
				document.querySelectorAll('.grid .supermenu-item__list').forEach((itemList) => {
					itemList.classList.remove('active');
					if(itemList.dataset.categoria == items.dataset.categoria) {
						itemList.classList.add('active');
					}						
				});
				//show banner specific 
				document.querySelectorAll('.grid-container .grid .subcategory-container .supermenu-banner').forEach((bannerMenu) => {
					bannerMenu.classList.remove('active');
					if(bannerMenu.dataset.categoria == items.dataset.categoria) {
						bannerMenu.classList.add('active');
					}
				});
				//hidden subcategories specific
				document.querySelectorAll('.grid-container .grid .subcategory-content').forEach((subcategoria) => {
					subcategoria.classList.remove('active');
				});
			});
		});
		//cuando el puntero del mouse salga del grid
		grid.addEventListener('mouseleave', () => {
			document.querySelectorAll('.grid-container .active').forEach((elemento) => {
				elemento.classList.remove('active');
			});
		});
		// cuando el puntero salga de la bara de menu y entre en el header
		document.getElementById('header').addEventListener('mouseover', (e) => {
			document.querySelectorAll('.grid-container .active').forEach((elemento) => {
				elemento.classList.remove('active');
			});
		});
		//show subcategory content cursor items
		document.querySelectorAll('.grid-container .grid .category-container .supermenu-item__list .list-item__category').forEach((elemento) => {
			elemento.addEventListener('mouseenter', (e) => {
				//show subcategory content specific
				document.querySelectorAll('.grid-container .grid .subcategory-content').forEach((subcategoria) => {
					subcategoria.classList.remove('active');
					if(subcategoria.dataset.categoria == elemento.dataset.categoria) {
						document.querySelectorAll('.grid-container .grid .subcategory-container .supermenu-banner').forEach((bannerMenu) => {
							bannerMenu.classList.remove('active');
						});
						subcategoria.classList.add('active');
					}
				});
			});
		});

	}

	//-------------------------------- version mobile ---------------------//

	if (tfo_is_mobile()) {
		// Click en boton menu (Para version movil).
		btnMenuToggle.addEventListener('click', (e) => {
			e.preventDefault();
			grid.classList.add('active');
			document.querySelector(".grid-container__overlay").classList.add('active');
			btnCerrarMenu.classList.add('active');
			document.querySelector('body').style.overflow = 'hidden';
		});
		//click en los h3 principales
		document.querySelectorAll('.grid .supermenu-item__mobile').forEach((elemento) => {
			elemento.addEventListener('click', (e) => {
				//show list container 
				document.querySelectorAll('.grid .supermenu-item__list').forEach((list) => {
					// list.classList.remove('active');
					if (list.dataset.categoria == elemento.dataset.categoria) {
						list.classList.toggle('active');
					}
				}); 
				//animation icon transform
				document.querySelectorAll('.grid .supermenu-item__mobile .icon-plus').forEach((icono) => {
					if (icono.dataset.categoria == elemento.dataset.categoria) {
						icono.classList.toggle('active');
					}
				});
				//animation padding items
				document.querySelectorAll('.grid .supermenu-item__list .list-item__category').forEach((link) => {
					if(link.dataset.items == elemento.dataset.categoria) {
						link.classList.toggle('active');
					}
				}); 
			});
		});
		// Boton de regresar en el menu de categorias
		document.querySelector('#grid .category-container .btn-back').addEventListener('click', () => {
			document.querySelectorAll('.grid-container .active').forEach((elemento) => {
				elemento.classList.remove('active');
				document.querySelector(".grid-container__overlay").classList.remove('active');
			});
			document.querySelector('body').style.overflow = 'visible';
		});
		//click en los enlaces de las categorias en los link
		document.querySelectorAll('.grid-container .category-container .list-item__category').forEach((elemento) => {
			elemento.addEventListener('click', (e) => {
				document.querySelectorAll('.grid-container .subcategory-content').forEach((categoria) => {
					categoria.classList.remove('active');
					if (categoria.dataset.categoria == elemento.dataset.categoria) {
						contenedorSubCategorias.classList.add('active');
					 	categoria.classList.add('active');
					}
				});
			});
		});
		// Boton de regresar en el menu de subcategorias
		document.querySelectorAll('#grid .subcategory-container .btn-regresar').forEach((boton) => {
			boton.addEventListener('click', (e) => {
				e.preventDefault();
				contenedorSubCategorias.classList.remove('active');
			});
		});
		//boton cerrar menu
		btnCerrarMenu.addEventListener('click', (e)=> {
			e.preventDefault();
			document.querySelectorAll('.grid-container .active').forEach((elemento) => {
				elemento.classList.remove('active');
			});
			document.querySelector('body').style.overflow = 'visible';
			document.querySelector(".grid-container__overlay").classList.remove('active');
		});
		// cerrar tocando fuera del grid
		document.querySelector(".grid-container__overlay").addEventListener('click', (e)=> {
			if(e.target === document.querySelector(".grid-container__overlay")) {
				document.querySelectorAll('.grid-container__overlay .active').forEach((elemento) => {
					elemento.classList.remove('active');
					document.querySelector(".grid-container__overlay").classList.remove('active');
					document.querySelector('body').style.overflow = 'visible';
				});
			}
		});
		//responsive admin bar wordpress
		if (document.body.classList.contains('admin-bar')) {
			grid.style.top = '46px';
		}
		
	}
})();