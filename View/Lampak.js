class Lampak {
  #parentElement;
  #size
  constructor(parentElement, size) {
    this.#size = size
    this.#parentElement = parentElement;
    this.#createTheLamps(size);

  }

  #createTheLamps(size) {
    let txt = ""
    for (let index = 0; index < size; index++) {
        txt += `<div class="lamp" id="${index}"></div>`;
    }
    this.#parentElement.html(txt);
  }
}

export default Lampak;
