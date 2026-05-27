let amt1;
let amt2;
let amt3;

function calculateTotAmt() {
    amt1 = parseFloat(document.getElementById('grocery1').value);
    amt2 = parseFloat(document.getElementById('grocery2').value);
    amt3 = parseFloat(document.getElementById('grocery3').value);
    let TotAmt = amt1 + amt2 + amt3;
    document.getElementById('result').innerText = `The Total amount of Grocery Items is: ${TotAmt}`;
}
