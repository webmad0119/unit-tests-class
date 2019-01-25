// Soldier
function Soldier(health, strength) {
    this.health = health
    this.strength = strength
}

Soldier.prototype.attack = function () {
    this.health -= 10
}

Soldier.prototype.getCharacteristics = function () {
    return {
        name: "grunt", 
        age: 30,
        speed: 10,
        health: this.health,
        strength: this.strength
    }
}

Soldier.prototype.getWeapons = function (knife) {
    var standardWeapons = ["gun", "pistol", "hand grenade" ]

    if (this.health > 250) {
        standardWeapons.push("firebazooka")
    }
    
    if (knife) {
        standardWeapons.push("long knife")

        standardWeapons.push("short knife")
    }


    return standardWeapons;
}