const template = document.createElement('div'); 
template.innerHTML = ` 
<style>
  .texto { 
    color: red;
  }
  p { 
    color: blue;
  }
</style>
<p class="texto">hola mundo 3.0</p>
<p>hola mundo 3.0 texto ejemplo para la clase</p>
`;

class myElement extends HTMLElement { // Con extends HTMLElement comenzamos los elementos personalizados
  constructor () { 
    super();        // ? La palabra clave super es usada para acceder y llamar funciones del padre de un objeto.

    this.p = document.createElement("p");
  }

  connectedCallback () { // ? para visualizar en la etiqueta p, vamos a usar el connected Callback.
    this.p.textContent = "Hola mundo v2 !!!";
    this.append(this.p);
    this.appendChild(template);
  }          
}





customElements.define('my-element', myElement) // * Asi es como se crea la etiqueta HTML del web component



