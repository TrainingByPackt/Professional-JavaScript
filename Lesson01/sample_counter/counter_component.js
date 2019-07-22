class Counter extends HTMLElement {
  static get observedAttributes() {
    return ['value', 'increment'];
  }

  constructor() {
    super();

    // Creates the shadow DOM to attach the parts of this component
    this.attachShadow({mode: 'open'});

    this.value = parseInt(this.getAttribute('value') || 0);
    this.increment = parseInt(this.getAttribute('increment') || 1);

    // Create and attach the parts of this component
    this.addStyles();
    this.createButton('-', () => this.decrementValue());
    this.createValueSpan();
    this.createButton('+', () => this.incrementValue());
  }

  attributeChangedCallback(attribute, _, newValue) {
    switch(attribute) {
      case 'increment':
        this.increment = parseInt(newValue);
        break;
      case 'value':
        this.value = parseInt(newValue);
        break;
    }

    this.updateState();
  }

  connectedCallback() {
    console.log("I'm connected to the DOM!");
  }

  createButton(text, handler) {
    const decrementButton = document.createElement('button');
    decrementButton.innerText = text;
    decrementButton.addEventListener('click', handler);
    this.shadowRoot.appendChild(decrementButton);
  }

  addStyles() {
    const linkEl = document.createElement('link');
    linkEl.setAttribute('rel', 'stylesheet');
    linkEl.setAttribute('type', 'text/css');
    linkEl.setAttribute('href', 'counter_component.css');
    this.shadowRoot.appendChild(linkEl);
  }

  createValueSpan() {
    this.span = document.createElement('span');
    this.shadowRoot.appendChild(this.span);
    this.updateState();
  }

  decrementValue() {
    this.value -= this.increment;
    this.triggerValueChangedEvent();
    this.updateState();
  }

  incrementValue() {
    this.value += this.increment;
    this.triggerValueChangedEvent();
    this.updateState();
  }

  triggerValueChangedEvent() {
    const event = new CustomEvent('value-changed', {
      bubbles: true,
      detail: { value: this.value },
    });
    this.dispatchEvent(event);
  }

  updateState() {
    this.span.innerText = `Value is: ${this.value}`;
  }
}

customElements.define('counter-component', Counter);

const newCounter = document.createElement('counter-component');
newCounter.setAttribute('increment', '2');
newCounter.setAttribute('value', '3');
document.querySelector('div').appendChild(newCounter);
