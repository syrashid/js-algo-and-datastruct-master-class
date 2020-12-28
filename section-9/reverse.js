function reverse(str){
  if (str === '') return '';
  return str.slice(-1).concat(reverse(str.slice(0,-1)));
}

console.log('emosewa: ', reverse('awesome')) // 'emosewa'
console.log('loohcsmhtir: ', reverse('rithmschool')) // 'loohcsmhtir'
