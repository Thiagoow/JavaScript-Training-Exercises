let thiago = '';
let pedro = '';

if (thiago == pedro) {
  console.log('EMPATE');
  //PEDRA E TESOURA
} else if (thiago == 'PEDRA' && pedro == 'TESOURA') {
  console.log('thiago');
} else if (thiago == 'TESOURA' && pedro == 'PEDRA') {
  console.log('pedro');
  //PAPEL E TESOURA
} else if (thiago == 'PAPEL' && pedro == 'TESOURA') {
  console.log('pedro');
} else if (thiago == 'TESOURA' && pedro == 'PAPEL') {
  console.log('thiago');
  //PAPEL E PEDRA
} else if (thiago == 'PAPEL' && pedro == 'PEDRA') {
  console.log('thiago');
} else if (thiago == 'PEDRA' && pedro == 'PAPEL') {
  console.log('pedro');
}
