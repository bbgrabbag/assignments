var listOfEnemies = [];
var Enemy = function () {
    this.type = typeGenerator();
    this.hitPoints = hitPointGenerator(this.type);
    this.defense = defenseGenerator(this.hitPoints);
}

var typeGenerator = function () {
    var types = ["Ancient Dragon", "Prowler", "Mighty Grunt"];
    var type = types[Math.floor(Math.random() * types.length)];
    return type;
}
var hitPointGenerator = function (type) {
    if (type === "Ancient Dragon") {
        var hitPoints = Math.floor((Math.random() * 20) + 80);
        return hitPoints;
    } else if (type === "Prowler") {
        var hitPoints = Math.floor((Math.random() * 29) + 50);
        return hitPoints;
    } else {
        var hitPoints = Math.floor((Math.random() * 29) + 20);
        return hitPoints;
    }
}

var defenseGenerator = function (hitPoints) {
    var hitPoints = Number((hitPoints) * 3);
    return hitPoints;
}


var enemyHordeGenerator = function () {
    for (var i = 0; i < 100; i++) {
        var enemy = new Enemy();
        listOfEnemies.push("Enemy " + i, enemy);
    }
    console.log(listOfEnemies);
}
enemyHordeGenerator();