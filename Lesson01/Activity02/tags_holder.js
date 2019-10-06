class TagsHolder extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this._selectedTags = [];
    this.render();
    this.renderTagList();
  }

  addTag(tag) {
    if (!this._selectedTags.includes(tag)) {
      this._selectedTags.push(tag);
      this._selectedTags.sort();
      this.renderTagList();
      this.triggerChanged();
    }
  }

  get selectedTags() {
    return this._selectedTags.slice(0);
  }

  removeTag(tag) {
    const index = this._selectedTags.indexOf(tag);
    if (index >= 0) {
      this._selectedTags.splice(index, 1);
      this.renderTagList();
      this.triggerChanged();
    }
  }

  render() {
    this.shadowRoot.innerHTML = `
    <link rel="stylesheet" type="text/css" href="css/semantic.min.css" />
    <div>
      Filtered by tags:
      <span class="tags"></span>
    </div>`;
  }

  renderTagList() {
    const tagsHolderElement = this.shadowRoot.querySelector('.tags');
    tagsHolderElement.innerHTML = '';

    const tags = this._selectedTags;

    if (tags.length == 0) {
      tagsHolderElement.innerHTML = 'No filters';
      return;
    }

    tags.forEach(tag => {
      const tagEl = document.createElement('span');
      tagEl.className = "ui label orange";
      tagEl.addEventListener('click', () => this.triggerTagClicked(tag));
      tagEl.innerHTML = tag;
      tagsHolderElement.appendChild(tagEl);
    });
  }

  triggerChanged(tag) {
    const event = new CustomEvent('changed', { bubbles: true });
    this.dispatchEvent(event);  
  }

  triggerTagClicked(tag) {
    const event = new CustomEvent('tag-clicked', { 
      bubbles: true,
      detail: { tag },
    });
    this.dispatchEvent(event);  
  }
}

customElements.define('tags-holder', TagsHolder);
