function makeRandomNum() {
  const num = Math.floor(Math.random() * 10);
  return Math.floor(Math.random() * 10 ** num);
}

//Create a formatter with internalization API (Intl):
const formatter = new Intl.NumberFormat('en', {
  notation: 'compact'
  /* To display as currency: 
  style: 'currency',
  currency: 'BRL' */
});

function formatNumber() {
  const num = makeRandomNum();
  //Use the formatter:
  return formatter.format(num);
}

console.log(formatNumber());
