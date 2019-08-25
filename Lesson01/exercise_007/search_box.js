class SearchBox extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.render();
    this.shadowRoot.querySelector('input').addEventListener('keyup', (e) => {
      this.triggerTextChanged(e.target.value);
    });
  }

  render() {
    this.shadowRoot.innerHTML = `
      <link rel="stylesheet" type="text/css" href="../css/semantic.min.css" />
      <div class="ui icon input">
        <input type="text" placeholder="Search..." />
        <i class="search icon"></i>
      </div>
    `;
  }

  triggerTextChanged(text) {
    const event = new CustomEvent('changed', { 
      bubbles: true,
      detail: { text },
    });
    this.dispatchEvent(event);  
  }
}

customElements.define('search-box', SearchBox);
