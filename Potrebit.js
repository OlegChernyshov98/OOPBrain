class Potrebit {
  constructor() {
    this.tovar = 0;
    this.nepoluchil = 0;
    this.ostatok = 0;
  }

  // метод определения желаемого количества товара
  hochu() {
    this.tovar = Math.floor(Math.random() * (120 - 70 + 1) + 70);
    return this.tovar;
  }

  // запомнить сколько он недополучил
  nexvatka(pozhelal, poluchil) {
    if (pozhelal > poluchil) {
      this.nepoluchil += pozhelal - poluchil;
    }// возможно тут условие надо прописать
    return this.nepoluchil;
  }

  naZavtra(a) {
    if (a > 0) {
      this.ostatok += a;
    } else {
      this.ostatok += 0;
    }
    return this.ostatok;
  }
  // производитель делает меньше чем мы хотим, то мы запоминаем это и прибавляем на следующий запрос
}
module.exports = Potrebit;
