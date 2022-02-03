class myElement extends HTMLElement { 
  constructor () { 
    super(); // ? La palabra clave super es usada para acceder y llamar funciones del padre de un objeto.
    this.attachShadow({ mode: 'open'}) // ? Asi abrimos el shadown dom (shadow-root (open))
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
  getStyles () { 
    return `

    `;
  }
  render () { // * es importate agregar esto this.shadowRoot.appendChild para que al final renderice todo lo que escribimos
    this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true)); // ? .content.cloneNode(true)); es para que copie todos los nodos que estan dentro de el "template"
  }
  connectedCallback () {  // ? El método connectedCallback() se ejecuta cada vez que el elemento se añade al DOM 
    this.render();
  }
}

customElements.define('my-element', myElement); // * Asi es como se crea la etiqueta HTML del web component