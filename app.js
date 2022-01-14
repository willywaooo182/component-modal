
//Control para el evento de tema oscuro / claro
document.getElementById("flexSwitchCheckChecked").addEventListener("change", () =>{
    if (document.getElementById("flexSwitchCheckChecked").checked){
        //alert("Activo :)");
        document.body.className = "lawrencium-dark";
        document.getElementById("nav").className="navbar navbar-expand-lg navbar-dark bg-dark"; 
        //removeClass("lawrencium-dark").addClass("lawrencium-light");
    } else {
        //alert("inActivo :(");
        document.body.className = "lawrencium-light";
        document.getElementById("nav").className="navbar navbar-expand-lg navbar-light bg-light";
        //document.body.removeClass("lawrencium-light").addClass("lawrencium-dark");
    }
});


//Codigo Vue Original para component modal
Vue.component('modal', {
    props: ['temax'], //tema x heredado de temas dado por el padre
    
    methods: {
        toggleShowModal () {
            //this.showModal = !this.showModal;
            this.$emit('show-modal');
        }
    },
    template: `
      <div v-show=showModal
      class="modal-mask">
        <div class="modal-wrapper">
        
          <div class="modal-container">          
            <h3><slot name="title"></slot></h3>
            <div><slot name="msj"></slot><br>
            <img 
            class="img-fluid"
            src="./img/isotipoPlatzi.webp" 
            v-bind:src="temax.link+temax.img"
            v-bind:alt="temax.title"
            v-bind:title="temax.title">
            <br>
            <small class="text-muted"><b>Fuente de infomación:</b>
                <a 
                v-bind:href="temax.link" target="_blank">
                <slot name="fuente"></slot>
                </a>
            </small>
            </div>
            <footer>             
              <button 
              v-on:click="toggleShowModal"
              type="button" class="btn btn-success btn-sm">Cerrar</button>
            </footer>
          </div>
        </div>
      </div>`
  });


//componente padre (root) 
new Vue ({
    el: '#app',

    data () {
        return {
            temaShow: { }, //tema a mostrar
            showModal: false, //valida si se muestra o no el modal
            tema: 0, //indice del tema aleatorio
            temasVue: [
                {   title: '¿Qué es Vue?', 
                    msj: 'Vue.js (también llamado Vue o VueJS) es un framework progresivo Javascript para crear interfaces de usuario, o en otras palabras, se trata de una «capa» añadida a Javascript formada por herramientas, convenciones de trabajo y un lenguaje particular que nos permite crear aplicaciones de forma rápida, agradable, sencilla y muy práctica.', 
                    link: 'https://lenguajejs.com/vuejs/introduccion/que-es-vue/',
                    img: 'vuejs.png' },
                {   title: '¿Qué son las directivas de Vue?', 
                    msj: 'Una de las ventajas de la sección <template> de los componentes SFC de Vue es que no sólo puedes escribir HTML clásico, sino que además también tienes una sintaxis avanzada para realizar algunas características interesantes que lo hacen mucho más potente que el HTML puro, como por ejemplo, el uso de directivas.', 
                    link: 'https://lenguajejs.com/vuejs/directivas-vue/que-son-directivas/',
                    img: 'directivas-vue.png' },
                {   title: 'Directiva v-for (bucles)', 
                    msj: 'La directiva v-for es muy interesante para crear estructuras repetitivas de código HTML de una forma sencilla y sin que el código resulte excesivamente complejo (sobre todo en estructuras que se repiten muchas veces).', 
                    link: 'https://lenguajejs.com/vuejs/directivas-vue/v-for/',
                    img: 'directiva-v-for.png' },
                {   title: 'Directiva v-bind (enlace)', 
                    msj: 'La directiva v-bind (dos puntos) es una de las directivas más utilizadas y populares de Vue. Esta directiva permite enlazar (bindear) una variable de Vue con un atributo específico de una etiqueta HTML. De esta forma, podemos colocar como valor de un atributo HTML el contenido que tengamos almacenado en una variable de la lógica de Javascript.', 
                    link: 'https://lenguajejs.com/vuejs/directivas-vue/v-bind/',
                    img: 'v-bind.png' },
                {   title: 'Options API (Vue 2+)', 
                    msj: 'La conocida como «Options API» es la forma tradicional de trabajar con Vue, estando disponible tanto en la versión Vue 2 como en Vue 3. Esta modalidad de API se basa en el uso de un objeto que contiene varias propiedades clave para el funcionamiento de los componentes Vue, como por ejemplo las propiedades props, data, computed, methods, etc...', 
                    link: 'https://lenguajejs.com/vuejs/componentes/options-api/',
                    img: 'vue-options-api.png' }
            ]
            
        }
    }, 

    methods: {
        updateModal () {            
            //Definir un método toggleModal que permita cambiar el valor de la propiedad showModal a su valor contrario

            //Voy a seleccionar un tema al azar, para que no se muestre siempre el mismo
            this.tema = Math.floor(Math.random() * (this.temasVue.length));

            //ya teniendo un tema x seleccionado, actualizo a temaShow
            this.temaShow = this.temasVue[this.tema];

            //actualizo mostar el Modal
            this.showModal = !this.showModal;                        
        }        
    },
    
})
