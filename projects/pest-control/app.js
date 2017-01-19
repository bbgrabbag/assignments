//set the prices of each baddie:
document.getElementById("koopa-pricing").textContent = 5;
document.getElementById("goomba-pricing").textContent = 3;
document.getElementById("boo-pricing").textContent = 9;

function total() {
    document.getElementById("koopa-individual-total").textContent = Number(document.getElementById("koopa-pricing").textContent) * Number(document.getElementById("koopa-total-caught").value);

    document.getElementById("goomba-individual-total").textContent = Number(document.getElementById("goomba-pricing").textContent) * Number(document.getElementById("goomba-total-caught").value);

    document.getElementById("boo-individual-total").textContent = Number(document.getElementById("boo-pricing").textContent) * Number(document.getElementById("boo-total-caught").value);

    document.getElementById("total-price").textContent =
        Number(document.getElementById("koopa-individual-total").textContent) + Number(document.getElementById("goomba-individual-total").textContent) + Number(document.getElementById("boo-individual-total").textContent);
}

document.getElementById("koopa-total-caught").addEventListener("change", total);

document.getElementById("goomba-total-caught").addEventListener("change", total);

document.getElementById("boo-total-caught").addEventListener("change", total);