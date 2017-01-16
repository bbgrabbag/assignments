//There are 6 input variables: pricing and total-caught.
//There are 4 output variables: individual-total and total-price.
//individual-totals are equal to each div's pricing * total-caught
//total price is equal to the addSum of div's individual-total.

document.getElementById("koopa-pricing").textContent = 3;
document.getElementById("koopa-total-caught").textContent = 7;
document.getElementById("koopa-individual-total").textContent = document.getElementById("koopa-pricing").textContent * document.getElementById("koopa-total-caught").textContent;

document.getElementById("goomba-pricing").textContent = 1;
document.getElementById("goomba-total-caught").textContent = 8;
document.getElementById("goomba-individual-total").textContent = document.getElementById("goomba-pricing").textContent * document.getElementById("goomba-total-caught").textContent;

document.getElementById("boo-pricing").textContent = 9;
document.getElementById("boo-total-caught").textContent = 2;
document.getElementById("boo-individual-total").textContent = document.getElementById("boo-pricing").textContent * document.getElementById("boo-total-caught").textContent;

