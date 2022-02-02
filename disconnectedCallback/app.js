class MyCustomeElement extends HTMLElement { 
  constructor () { 
    super() 
    console.log("Hola desde el constructor - Memoria");
  }
  connectedCallback () { 
    console.log('Hola desde el DOM')
  }
  disconnectedCallback () { 
    console.log('Adios del DOM');
  }
}

customElements.define('my-custome-element', MyCustomeElement);

document.querySelector('my-custome-element').remove();

