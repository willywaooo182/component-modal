# component-modal
Práctica Módulo 3
Armar un componente modal que se muestre al hacer click en un boton del componente padre (root) y que pueda ocultarse/cerrarse con otro boton dentro del componente modal

Hace fork de este CodePen para obtener la estructura básica del proyecto:

Consideraciones:
El componente modal debe:

Usar una propiedad title para poder establecer el titulo del modal.
Definir un slot para poder establecer el body del modal.
Tener un boton con una directiva v-on a un metodo que emita un evento llamado close.
El componente root (Componente Principal) debe:

Utilizar el component modal y mostrarlo solo cuando la propiedad showModal sea true.
Definir una propiedad boolean llamada showModal que permite ocultar y mostrar el modal.
Definir un método toggleModal que permita cambiar el valor de la propiedad showModal a su valor contrario (este metodo debe usarse con el boton “Show Modal”).
Escuchar el evento close del modal y ejecutar el metodo toggleModal cuando este se emite.
Establecer el contenido de title del modal usando una propiedad y el contenido del bodyusando slots.

# Solucion Aplicada
Se crea todo tal cual lo solicitado, y se le agrega un array de objetos que tienen temas de Vue de una pagina web que me gustaron sus imagenes.

El objeto (temas) tiene los campos: titulo, mensaje o explicación, imagen sobre el tema y el link fuente del tema.

Se crea un array de objetos (temas) interno en el padre, y usando una funcion o metodo, se selecciona un tema aleatorio al darle click al boton "Show Modal" para que sea mostrado en el modal.


![vistas-vue-modal](https://user-images.githubusercontent.com/44087262/149447425-94f3a65d-d1cb-4ee9-ac78-712bec14ec45.jpg)
