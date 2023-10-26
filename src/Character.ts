import Race, { Elf } from './Races';
import Archetype, { Mage } from './Archetypes';
import Fighter from './Fighter';
import getRandomInt from './utils';
import Energy from './Energy';

class Character implements Fighter {
  private _race: Race;
  private _archetype: Archetype;
  private _maxLifePoints: number;
  private _lifePoints: number;
  private _strength: number;
  private _defense: number;
  private _dexterity: number;
  private _energy: Energy;

  constructor(name: string) {
    this._race = new Elf(name, getRandomInt(1, 10));
    this._archetype = new Mage(name);
    this._dexterity = this._race.dexterity;
    this._maxLifePoints = (this._race.maxLifePoints / 2);
    this._lifePoints = this._maxLifePoints;
    this._strength = getRandomInt(1, 10);
    this._defense = getRandomInt(1, 10);
    this._energy = {
      type_: this._archetype.energyType,
      amount: getRandomInt(1, 10),
    };
  }

  get race() {
    return this._race;
  }

  get archetype() {
    return this._archetype;
  }

  get lifePoints() {
    return this._lifePoints;
  }

  get strength() {
    return this._strength;
  }

  get defense() {
    return this._defense;
  }

  get dexterity() {
    return this._dexterity;
  }

  get energy(): Energy {
    return {
      type_: this._energy.type_,
      amount: this._energy.amount,
    };
  }

  receiveDamage(attackPoints: number): number {
    const damage = this.calculateDamage(attackPoints);
    this.updateLifePoints(damage);
    this.checkIfDead();
    return this.lifePoints;
  }

  private calculateDamage(attackPoints: number): number {
    const damage = attackPoints - this.defense;
    return damage > 0 ? damage : 1;
  }

  private updateLifePoints(damage: number): void {
    this._lifePoints -= damage;
  }

  private checkIfDead(): void {
    if (this.lifePoints <= 0) {
      this._lifePoints = -1;
    }
  }

  attack(enemy: Fighter): void {
    enemy.receiveDamage(this._strength);
  }

  verifyMaxLife(increment: number) {
    if ((this._maxLifePoints + increment) < this._race.maxLifePoints) {
      this._maxLifePoints += increment;
      return;
    }
    this._maxLifePoints = this._race.maxLifePoints;
  }

  levelUp(): void {
    const increment = getRandomInt(1, 10);
    this.verifyMaxLife(getRandomInt(1, 10));
    this._defense += increment;
    this._dexterity += increment;
    this._strength += increment;
    this._energy.amount = 10;
    this._lifePoints = this._maxLifePoints;
  }

  special(enemy: Fighter): void {
    const damage = this._strength * 100;
    enemy.receiveDamage(damage);
  }
}

export default Character;