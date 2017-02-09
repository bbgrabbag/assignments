function toDollars (input){
    var decimal = input.toLocaleString;
    decimal = parseFloat(input).toFixed(2);
    console.log (`\$${numberWithCommas(decimal)}`);
}
toDollars(1000);

function numberWithCommas(x) {
    var parts = x.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return parts.join(".");
}