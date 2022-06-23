import Card from "./card.js";

export default class CardsList {
  constructor (data = []) {
    this.data = data;
    this.render();
    this.renderCards();
  }

  getTemplate () {
    return `
      <div class=cards-list-block>
        <div class="cards-list-content" data-element="body">

        </div>
      </div>

    `;

  }

  render () {
    const wrapper = document.createElement('div');
    wrapper.innerHTML = this.getTemplate();
    this.element = wrapper.firstElementChild;

  }

  renderCards () {
    const cards = this.data.map(item => {
      const card = new Card(item);
      return card.element;
    });

    const body = this.element.querySelector('[data-element="body"]');

    body.innerHTML = '';
    body.append(...cards);
  }
  update (data = []) {
    this.data = data;

    this.renderCards();
  }
}
