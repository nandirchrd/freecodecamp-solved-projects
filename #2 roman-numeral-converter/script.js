function convertToRoman(num) {
  if(num < 0){
    alert('Put a positive number, Please!');
    return false;
  }
  if(num > 9999){
    alert('This program can\'t handle that much numbers')
    return false;
  }
  let checkNum = '' + num;
  if(isNaN(num)){
    console.log('ERROR, PLEASE PUT NUMBERS');
    return false;
  }
  if(checkNum.length === 0){
    console.log("ERROR, PLEASE PUT SOME NUMBER!"); 
    return false;
  }
  let romNums = {
    satuan:{
      1: 'I', 2: 'II', 3: 'III',
      4: 'IV', 5: 'V', 6: 'VI',
      7: 'VII', 8: 'VIII', 9: 'IX'
    },
    puluhan:{
      1: 'X', 2: 'XX', 3: 'XXX',
      4: 'XL', 5: 'L', 6: 'LX',
      7: 'LXX', 8: 'LXXX', 9: 'XC'
    },
    ratusan:{
      1: 'C', 2: 'CC', 3: 'CCC',
      4: 'CD', 5: 'D', 6: 'DC',
      7: 'DCC', 8: 'DCCC', 9: 'CM'
    },
    ribuan:{
      1: 'M', 2: 'MM', 3: 'MMM',
      4: 'MV', 5: 'V', 6: 'VM',
      7: 'VMM', 8: 'VMMM', 9: 'MX'
    }
  }
  //  ###################################################
  // SATUAN
  if(checkNum.length === 1) return romNums.satuan[checkNum[0]];
  // PULUHAN
  if(checkNum.length === 2) return checkNum[1] === '0' ? romNums.puluhan[checkNum[0]] : romNums.puluhan[checkNum[0]] + romNums.satuan[checkNum[1]];
  // RATUSAN
  if(checkNum.length === 3) 
  return checkNum[1] === '0' && checkNum[2] === '0' ?
      romNums.ratusan[checkNum[0]]: 
          checkNum[1] !== '0' && checkNum[2] === '0' ?
          romNums.ratusan[checkNum[0]] + romNums.puluhan[checkNum[1]] : 
              checkNum[1] === '0' && checkNum[2] !== '0' ?
              romNums.ratusan[checkNum[0]] + romNums.satuan[checkNum[2]] : 
                  romNums.ratusan[checkNum[0]] + romNums.puluhan[checkNum[1]] + romNums.satuan[checkNum[2]];
  // RIBUAN
  if(checkNum.length === 4)
  return checkNum[1] === '0' && checkNum[2] === '0' && checkNum[3] === '0' ? 
      romNums.ribuan[checkNum[0]]:
          checkNum[1] !== '0' && checkNum[2] === '0' && checkNum[3] === '0' ?
          romNums.ribuan[checkNum[0]] + romNums.ratusan[checkNum[1]] :
              checkNum[1] === '0' && checkNum[2] !== '0' && checkNum[3] === '0' ?
              romNums.ribuan[checkNum[0]] + romNums.puluhan[checkNum[2]] :
                  checkNum[1] === '0' && checkNum[2] === '0' && checkNum[3] !== '0' ?
                  romNums.ribuan[checkNum[0]] + romNums.satuan[checkNum[3]] :
                      checkNum[1] !== '0' && checkNum[2] !== '0' && checkNum[3] === '0' ?
                      romNums.ribuan[checkNum[0]] + romNums.ratusan[checkNum[1]] + romNums.puluhan[checkNum[2]] :
                          checkNum[1] !== '0' && checkNum[2] === '0' && checkNum[3] !== '0' ?
                          romNums.ribuan[checkNum[0]] + romNums.ratusan[checkNum[1]] + romNums.satuan[checkNum[3]] :
                              checkNum[1] === '0' && checkNum[2] !== '0' && checkNum[3] !== '0' ?
                              romNums.ribuan[checkNum[0]] + romNums.puluhan[checkNum[2]] + romNums.satuan[checkNum[3]] : 
                                  romNums.ribuan[checkNum[0]] + romNums.ratusan[checkNum[1]] + romNums.puluhan[checkNum[2]] + romNums.satuan[checkNum[3]];
  return false;
}
   
let input = document.getElementById('input');
let output = document.getElementById('output');
input.addEventListener('keyup', (e)=>{ output.value = `${convertToRoman(parseInt(input.value))}` });