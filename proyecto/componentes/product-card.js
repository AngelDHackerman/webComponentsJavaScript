class productCard extends HTMLElement { 
  constructor () { 
    super(); //usado para acceder a HTMLElement
    this.attachShadow({ mode: "open" }); //Abrimos y activamos el shadown DOM
  }
  getTemplate () { 
    const template = document.createElement("template");
    template.innerHTML = `
    

    ${this.getStyles()}
    `;
  }
  getStyles () { 
    return `

    `;
  }
  render () { 
    this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true));
  }
  connectedCallback () { 
    this.render();
  }
}

customElements.define("product-card", productCard);