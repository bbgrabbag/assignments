function toDollars (input){
   return input.toLocaleString({style: "currency", currency: "USD"});
}
console.logtoDollars(9896242624564256);