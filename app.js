const template = document.querySelector('template');

class IronBtn extends HTMLElement {
    constructor() {
        super();
        this._shadowRoot = this.attachShadow({ 'mode': 'open' });
        this._shadowRoot.appendChild(template.content.cloneNode(true));
        this._button = this._shadowRoot.querySelector('button');
        this.translateAttributes();
        this.translateContent();
    }
    translateAttributes(){
      for(var i = 0; i < this.attributes.length; i++){
      	this._button.setAttribute(this.attributes[i].name,this.attributes[i].value);
        this.removeAttribute(this.attributes[i].name);
      }
    }
    translateContent(){
    	this._content = this.innerHTML;
      this.innerHTML = '';
      this._button.innerHTML = this._content;
    }
}

window.customElements.define('i-button', IronBtn);
