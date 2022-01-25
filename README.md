## Testing custom theme

Para probar el tema se agregó una carpeta de contenido de muestra que luego se deberá importar a la base de datos de wordpress para generar todo el contenido que estaremos probando. Este procedimiento es el recomendado por wordpress en el [codex](https://codex.wordpress.org/Theme_Unit_Test), el cual, también indica pasos a seguir para configurar nuestra instalación y poder realizar las pruebas de nuestro theme correctamente.

### Importando el contenido con WP-CLI

1. Primero instalar el plugin de importación de wordpress.

   wp plugin install wordpress-importer --activate

- Contenido para blog y páginas.

  wp import ./sample-data/themeunittestdata.wordpress.xml --authors=create

- Contenido para Woocommerce.

  wp import ../../plugins/woocommerce/sample-data/sample_products.xml --authors=create
