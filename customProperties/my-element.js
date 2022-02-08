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
  getStyles () { // ! usando variables podemos modificar desde "Afuera" nuestros estilos en el shadown dom.
    return `
      <style> 
        :host { 
          --primary-color: tomato;
          --secondary-color: salmon;
          --heading-primary: 30px;
          --heading-secondary: 25px;
          display: inline-block;
          width: 100%;
          min-width: 300px;
          max-width: 450px;

        }
        section {
          background: var(--primary-color);
        }
        section div {
          background: var(--secondary-color);
        }
        h1 {
          font-size: var(--heading-primary);
        }
        p { 
          font-size: var(--heading-secondary);
        }
      </style> 
      
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