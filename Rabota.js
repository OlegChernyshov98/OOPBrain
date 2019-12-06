// колонки количество товара у производителя +
// количество необходимого товара потребителю +
// количество доставленного товара за день +
// количество произведенного товара за последние 3 дня -
// количество доставленного товара за последгние 3 дня -
// КПД посредника +
const Proizvod = require('./Proizvod');
const Posred = require('./Posred');
const Potrebit = require('./Potrebit');
const Product = require('./Product');

const proizvod = new Proizvod();
const potrebit = new Potrebit();
const posred = new Posred();
const product = new Product();


const itog = [];
const day = 10;
let itog3Day = 0;
let proizvodstvo = 0;
let itog3DayProizv = 0;

for (let i = 1; i < day; i += 1) {
  proizvodstvo = proizvod.sozdat();
  product.prProduct += proizvodstvo + proizvod.nakopl(product.prProduct[i - 1], product.peredProduct[i - 1]) - product.peredProduct;
  product.hotProduct += potrebit.hochu() + potrebit.nexvatka(product.hotProduct[i - 1], product.peredProduct[i - 1]) - product.peredProduct;
  product.peredProduct = posred.peredast(product.hotProduct, product.prProduct);
  posred.koefPolz = posred.kpd(product.prProduct, product.peredProduct);

  const tablica = {
    created: product.prProduct,
    peredano: product.peredProduct,
    Zaxoteloc: product.hotProduct,
    KPD: Number(posred.koefPolz.toFixed(5)),
  };
  itog[i] = tablica;
  if (i > day - 4) {
    itog3Day += product.peredProduct;
    itog3DayProizv += proizvodstvo;
  }
}
console.table(itog);
console.log('proizvodstvo tovara za 3 days: ', itog3DayProizv); // сделать универсально
console.log('dostavleno tovara za 3 days: ', itog3Day) // сделать универсально
