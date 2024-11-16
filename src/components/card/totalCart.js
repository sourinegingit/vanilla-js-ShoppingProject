export const totalCart = (data) => {

  
    let totalP = data.cart.map((item) => item.quantity * item.price);
    // console.log(totalP);
    let sum = 0;
    for (let i = 0; i < totalP.length; i++) {
      sum += totalP[i];
    }
    // console.log(sum);
    document.getElementById("totalPriceCartPage").innerText = "$" + sum;
  };