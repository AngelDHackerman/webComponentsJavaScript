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
                // ? :host(.class) se usa para cambiar los estilos desde el host que tiene una CLASE.
                // * :host([atributo]) se usa para cambiar estilos del elemento que tiene un ATRIBUTO
                // ? :host-context(article.class) damos especificidad, la clase .class que este dentro de article.
    return `
      <style>
        :host { 
          display: inline-block;
          width: 100%;
          min-width: 300px;
          max-width: 450px;
          font-size: 20px;
          background: grey;
        }
        :host(.blue) { 
          background: blue;
        }
        :host([yellow]) { 
          background: yellow;
        }
        :host([yellow]) h2 { 
          color: blue;
        }
        :host([yellow]) p { 
          color: #7A0BC0;
        }
        :host-context(article.card) { 
          background: orange;
          display: block; 
          max-width: 100%;
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



