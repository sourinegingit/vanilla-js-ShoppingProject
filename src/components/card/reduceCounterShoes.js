
export const reduceCounterShoe=(data)=>{
    const counterShoe=document.getElementById("counterShoe").firstChild.data;
    console.log(counterShoe);
    // const totalPriceShoe = Number(
    //     document.getElementById("totalPriceShoe").firstChild.data.substr(2)
    //   );
      if (counterShoe > 1) {
        const newcounterShoe = counterShoe - 1;
        const newtotalPriceShoe = newcounterShoe * data.price;
        document.getElementById("counterShoe").innerText = newcounterShoe;
        document.getElementById("totalPriceShoe").innerText =
          "$ " + newtotalPriceShoe;
      }
}

