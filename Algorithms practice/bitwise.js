// function getSum(a, b) {
//     // Loop until there is no carry left
//     while (b !== 0) {
//         // Calculate the carry using bitwise AND
//         let carry = a & b;
        
//         // XOR to get the sum of bits without carry
//         a ^= b;
        
//         // Shift the carry to the left by 1 position
//         b = carry << 1;

//         // If both carry and b are zero, exit the loop
//         if (b === 0 && carry === 0) break;
//     }

//     // Return the final sum
//     return a;
// };

// console.log(getSum(1, 5));










// //containd bit wise practice
// //questions write a js function that subracts two integers without using the - operater


function getDiff(x, y) {
    //we loop untill y is not 0
    //this also points difference to calculate
    while (y !== 0) {
        //calculates the borrow 
      const borrow = (~x) & y;
      //calculates the difference
      x = x ^ y;
      //propagte the borrrow
      y = borrow << 1;
    }
    return x;
  }
  
  const result = getDiff(80, 30);
  
  console.log(result);
  