module.exports = function toReadable (number) {
       if(number < 0 || number >= 1000){
    return 'The number '+ number +' is out of bounds!';
  }
  const numsFromZeroToNine = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  const numsFromTenToNineteen = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  const numsTens = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  const count = String(number).length;
  let res = 0, 
      nums = '';      
  for(let i = count; i > 0; i--){
    switch(i){
      case 3:
        res = Math.trunc(number / 100);
        nums += res + ' ';
        number -= res * 100;
        break;
      case 2:
        res = Math.trunc(number / 10);
        if(res === 1){
          nums += numsFromTenToNineteen[number - 10];
          break;
        } else {
          nums += numsTens[res - 2] + ' ';
        }
        number -= res * 10;
        break;
      case 1:
        nums += numsFromZeroToNine[number];
        break;
    }
    if(number === 0 || res === 1){
      break;
    } 
  }      
  return nums.trim();
}
