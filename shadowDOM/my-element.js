class myElement extends HTMLElement { // Con extends HTMLElement comenzamos los elementos personalizados
  constructor () { 
    super();        // ? La palabra clave super es usada para acceder y llamar funciones del padre de un objeto.
    this.attachShadow({ mode: "open"}); // ? Asi abrimos el shadown dom (shadow-root (open))
  }
  getTemplate () { 
    const template = document.createElement('template'); 
    template.innerHTML = ` 
      <section>
        <h2 class="title">Hola mundo ! </h2>
        <div>
          <p>Soy mas texto de ejemplo</p>
        </div>
      </section>
      ${this.getStyles()}  /* Asi agregamos los estilos al HTML.  */
    `;
    return template;
  }
  getStyles () { 
    return `
    <style> 
      h2 { 
        color: red;
      }
    </style>  
    `;
  }
  render () { // * es importate agregar esto this.shadowRoot.appendChild para que al final renderice todo lo que escribimos
   this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true)); // ! Asi clonamos el nodo de getTemplate, true se usa para que clone todos los elementos del getTemplate
  }
  connectedCallback () { // ? para visualizar en la etiqueta p, vamos a usar el connected Callback.
    this.render();
  }          
}





customElements.define('my-element', myElement) // * Asi es como se crea la etiqueta HTML del web component



