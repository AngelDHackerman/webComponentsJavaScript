class myElement extends HTMLElement { // Con extends HTMLElement comenzamos los elementos personalizados
  constructor () { 
    super();        // ? La palabra clave super es usada para acceder y llamar funciones del padre de un objeto.
    this.attachShadow({ mode: "open"}); // ? Asi abrimos el shadown dom (shadow-root (open))
  }
  getTemplate () { 
    const template = document.createElement('template'); 
    template.innerHTML = ` 
      <section>

        <h2>
          <slot name="title"></slot>
        </h2>

        <div>
          <p>
            <slot name="parrafo"></slot>
          </p>
        </div>

      </section>
      ${this.getStyles()}
    `;
    return template;
  }
  getStyles () { // ! :host es una pseudo clase, y host se refiere al componenete mismo (my-element)
                // ? ::slotted (span) todo lo que venga de fuera y este dentro de un span agregale los estilos a ejecutar.
                // ::slotted(span) debe estar junto sino no funciona.
    return `
      <style>
        ::slotted(span) {
          font-size: 30px;
          color: red;
        }
        ::slotted(.texto) { 
          color: blue;
        }
      </style>
    `;
  }
  render () { // * es importate agregar esto this.shadowRoot.appendChild para que al final renderice todo lo que escribimos
   this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true)); 
  }
  connectedCallback () { // ? para visualizar en la etiqueta p, vamos a usar el connected Callback.
    this.render();
  }          
}

customElements.define('my-element', myElement) // * Asi es como se crea la etiqueta HTML del web component



