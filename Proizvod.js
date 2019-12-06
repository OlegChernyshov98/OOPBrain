class Proizvod {
  constructor() {
    this.tovar = 0;
    this.sklad = 0;
  }

  // метод создания товара
  sozdat() {
    this.tovar = Math.floor(Math.random() * (150 - 50 + 1) + 50);
    return this.tovar;
  }

  // метод накопления
  nakopl(sdelano, peredat) { // ltkf
    if (sdelano > peredat) {
      this.sklad += sdelano - peredat;
    } else {
      this.sklad += 0;
    }
    return this.sklad;
  }
}
module.exports = Proizvod;
