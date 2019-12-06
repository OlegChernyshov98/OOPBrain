class Posred {
  constructor() {
    this.tovar = 0;
    this.koefPolz = 0;
  }

  // метод передачи
  peredast(a, b) {
    if ((a >= b) && (a <= 100) && (b <= 100)) {
      this.tovar = b;
    } else if ((a < b) && (a < 100) && (b < 100)) {
      this.tovar = a;
    } else if ((a >= 100) && (b >= 100)) {
      this.tovar = 100;
    } else if ((a > 100) && (b < 100)) {
      this.tovar = b;
    } else if ((a < 100) && (b > 100)) {
      this.tovar = a;
    }
    return this.tovar;
  }

  // KPD
  kpd(a, b) { // получил, передал
    this.koefPolz = b / a;
    return this.koefPolz;
  }
}

module.exports = Posred;
