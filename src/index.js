module.exports = function getZerosCount(number, base) {
  //var zerosCount=0;
  var zeros =0;
  var a = [];
  var j  = 0;
  var i  = 2;
  var step =0;
  var step1 =0;
  var st=0;
   if (base  == 2){
    base = 2;
    st =1;
   }
   else{
  do {
     if (base  % i == 0){
    a[j] = i;
    j++;
    base = base / i;
   }
   else
   {
    i++;
   }
  }
  while (i < base);
  a[j] = i;
      var index, len;
  var k = a.length-1;
  for (index = k, len = -1; index> len; --index) {
          if (a[k] == a[index])
         step++;
        }
  for (var i = 0, L = a.length, N = L - 1; i < N; i++)
  {
  if (a[0] == a[i])
         step1++;
  }
    if (step1*a[0]>step*a[k]+3)
  {base = a[0];
  st=step1;
  }
  else
  {base = a[k];
  st=step;
  }
  }
   while(number > 0)
    {
      number= number/base>>0;
      zeros += number;
    }
          zerosCount =zeros/st>>0;
  return(zerosCount);
}

