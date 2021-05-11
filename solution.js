function substrCount(n, s) {
    var total = s.length;
    var count = 1;
    var count2 = 1;
    var temp = ''
    s = s.split('')
    
  const next = () => {
    if (s[i]===s[i+count]){
      count++
      total++
      next()
    }
  }

  const next2 = () => {
    if ((s[i]!==s[i+1])&&(s[i-count2]===s[i+count2])){
      console.log(s[i], s[i-count2], s[i+count2])
      if(temp === s[i-count2]){
        count2++
        total++
        next2()
      }
    }
  }

    for(var i = 0; i<s.length; i++){
      count = 1
      count2 = 1
      temp = s[i+1]
      next();
      next2();
    }

    return total;
}
