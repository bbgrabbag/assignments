function fixTeen(n){
    n = Number(n);
    if(n >=13 && n <= 19 && n !== 15 && n !== 16){
        n = 0
    }
    return n;
}

function noTeenSum(a, b, c){
    a = fixTeen(a);
    b = fixTeen(b);
    c = fixTeen(c);
    return a + b + c;
}

console.log(noTeenSum(15, 17, 1));