for (var i = 0; i < 3; i++) {
   P = i % 2;
   if (P == 0) {
      P = true;
      
   } else {
      P = false;
   }
   
   Q = i % 3;
   if (Q == 0) {
      Q = true;
   } else {
      Q = false;
   }
   console.log(`${P}| ${Q}| ${reultado}`);