module.exports = function toReadable (number) {
  if(number < 0 || number >= 1000){
    return 'The number '+ number +' is out of bounds!';
  }
  const numsFromZeroToNine = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  const numsFromTenToNineteen = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  const numsTens = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  let count = 1, res = 0, nums = '';  
  do {
    count = String(number).length;
    switch(count){
      case 3:
        res = Math.trunc(number / 100);
        nums += numsFromZeroToNine[res] + ' hundred ';
        number -= res * 100;
        break;
      case 2:
        res = Math.trunc(number / 10);
        if(res === 1){
          nums += numsFromTenToNineteen[number - 10];
          count = 0;
        } else {
          nums += numsTens[res - 2] + ' ';
          number -= res * 10;
        }        
        break;
      case 1:
        nums += numsFromZeroToNine[number];
        count = 0;
        break;
    }
    if(!number){
      break;
    }
  } while(count > 0);
  return nums.trim();
}
