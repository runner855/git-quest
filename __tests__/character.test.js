const Character = require("../src/character");

describe("character", () => {
  let character;
  let config;
  beforeEach(() => {
    config = {
      name: "npc",
      health: 10,
      maxHealth: 10,
      dialogue: "hello",
    };
    character = new Character(config);
  });
  describe("constructor function", () => {
    it("returns an object", () => {
      expect(character).toBeInstanceOf(Object);
    });
    it("set the level to 1", () => {
      expect(character.level).toEqual(1);
    });

    it("has a name", () => {
      expect(character.name).toBe(config.name);
    });
    it("has health", () => {
      expect(character.health).toBe(config.health);
    });
    it("has a maximum health", () => {
      expect(character.maxHealth).toBe(config.maxHealth);
    });
    it("has dialogue", () => {
      expect(character.dialogue).toBe(config.dialogue);
    });
    it("has baseAttack", () => {
      expect(character.baseAttack).toBe(0);
    });
    it("defence Total", () => {
      expect(character.defenceTotal).toBe(1);
    });
    it("attack total", () => {
      expect(character.attackTotal).toBe(1);
    });


  });
  describe("speak", () => {
    it("returns its dialogue", () => {
      expect(character.speak()).toBe(config.dialogue);
    });
  });
  describe("isAlive", () => {
    it("returns alive if health is above 0", () => {
      expect(character.isAlive).toBe(true);
    });
    it("returns dead if health is 0", () => {
      character.health = 0;
      expect(character.isAlive).toBe(false);
    });
  });
  describe("take damage", () => {
    it("can take damage", () => {
      const startingHealth = character.health;
      const damage = 5;
      character._takeDamage(damage);
      expect(character.health).toBe(startingHealth - damage);
    });
    it("cannot be damaged to less than 0", () => {
      const damage = 100;
      character._takeDamage(damage);
      expect(character.health).toBe(0);
    });
  });
  describe("healing", () => {
    it("can recover health", () => {
      character.health = 1;
      const potion = 9;
      character._heal(potion);
      expect(character.health).toBe(10);
    });
    it("cannot recover more than its maxHealth", () => {
      character.health = 1;
      const potion = 100;
      character._heal(potion);
      expect(character.health).toBe(10);
    });
  });
});
