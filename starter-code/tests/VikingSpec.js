describe("Soldier", function () {
  var soldier;
  var strength = 150;
  var health = 300;

  beforeEach(function () {
    soldierStrong = new Soldier(health, strength);
    soldierSmall = new Soldier(100, 100)
  });

  it("when a soldier attacks, he loses some health", function () {
    expect(soldierStrong.health).toBe(300)
    soldierStrong.attack()

    var minimumHealth = 140
    expect(soldierStrong.health).toBe(150 + minimumHealth)
  })

  it("when we call getCharacteristics we obtain an explanatory object of the soldier ", function () {
    var soldierCharacteristics = { name: "grunt", age: 30, speed: 10, strength: 150 }

    soldierCharacteristics.health = health

    expect(soldierStrong.getCharacteristics()).toEqual(
      soldierCharacteristics
    )

    soldierStrong.attack()

    soldierCharacteristics.health = health - 10

    expect(soldierStrong.getCharacteristics()).toEqual(
      soldierCharacteristics
    )
  })

  it("when the soldier is not strong, he doesnt get a bazooka", function () {
    expect(soldierStrong.getWeapons()).toEqual([
      "gun", "pistol", "hand grenade", "firebazooka" 
    ])

    expect(soldierSmall.getWeapons()).toEqual([
      "gun", "pistol", "hand grenade"
    ])

    expect(soldierStrong.getWeapons(true)).toEqual([
      "gun", "pistol", "hand grenade", "firebazooka", "long knife", "short knife"
    ])
  })
});
