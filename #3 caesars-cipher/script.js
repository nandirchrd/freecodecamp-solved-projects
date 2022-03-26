function rot13(str) {
    let a = 
    [
      'A', 'B', 'C', 'D', 'E', 'F', 'G',
      'H', 'I', 'J', 'K', 'L', 'M',
      'N', 'O', 'P', 'Q', 'R', 'S', 'T',
      'U', 'V', 'W', 'X', 'Y', 'Z'
    ];
    let index = [];
    let result = '';
    console.log(a.indexOf('S'))
    for(let i = 0; i < str.length; i++){
      if(a.indexOf(str[i]) === -1 ){ 
        index.push(str[i]); 
        continue; 
      }
      index.push(a.indexOf(str[i]));
    }
    console.log(index)
    index = index.map((e)=> 
    { 
        if(e + 13 > 25){
          return e + 13 - 26;
        }else{
          if(typeof e === 'number'){
            return e + 13;
          }
          return e;
        }
    })
  
    for(let i = 0; i < index.length; i++){
      if(typeof index[i] !== 'number') {
        result += index[i];
        continue;
      }
      result += a[index[i]];
    }
    console.log(result)
  }
    
  
  rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.");