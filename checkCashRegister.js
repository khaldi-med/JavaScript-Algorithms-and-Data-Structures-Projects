function checkCashRegister(price, cash, cid) {
  const currencyUnits = [
    { name: "ONE HUNDRED", value: 100.0 },
    { name: "TWENTY", value: 20.0 },
    { name: "TEN", value: 10.0 },
    { name: "FIVE", value: 5.0 },
    { name: "ONE", value: 1.0 },
    { name: "QUARTER", value: 0.25 },
    { name: "DIME", value: 0.1 },
    { name: "NICKEL", value: 0.05 },
    { name: "PENNY", value: 0.01 }
  ];

  let change = cash - price;
  let totalCid = cid.reduce((acc, curr) => acc + curr[1], 0).toFixed(2);
  
  if (totalCid < change) {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  } 
  else if (totalCid == change) {
    return { status: "CLOSED", change: cid };
  } 
  else {
    cid = cid.reverse();
    let result = [];

    for (let i = 0; i < currencyUnits.length; i++) {
      let currentValue = 0.0;

      while (
        change >= currencyUnits[i].value &&
        cid[i][1] >= currencyUnits[i].value
      ) {
        currentValue += currencyUnits[i].value;
        change -= currencyUnits[i].value;
        change = change.toFixed(2);
        cid[i][1] -= currencyUnits[i].value;
      }

      if (currentValue > 0) {
        result.push([currencyUnits[i].name, currentValue]);
      }
    }

    return change == 0
      ? { status: "OPEN", change: result }
      : { status: "INSUFFICIENT_FUNDS", change: [] };
  }
}
