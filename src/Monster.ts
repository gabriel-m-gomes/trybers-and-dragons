import { SimpleFighter } from './Fighter';

class Monster implements SimpleFighter {
  constructor(
    private _lifePoints: number = 85, 
    private _strength: number = 63,
  ) {}

  get lifePoints(): number {
    return this._lifePoints;
  }

  get strength():number {
    return this._strength;
  }

  verifyLife(): number {
    if (this._lifePoints <= 0) {
      this._lifePoints = -1;
      return this._lifePoints;
    }
    return this._lifePoints;
  }

  receiveDamage(attackPoints: number): number {
    const damage = attackPoints - this.lifePoints;
    this._lifePoints -= damage;
    return this.verifyLife();
  }

  attack(enemy: SimpleFighter): void {
    const enemyLifePoints = enemy.lifePoints; 
    const updatedLifePoints = enemyLifePoints - this._strength;
    enemy.lifePoints = updatedLifePoints;
  }
}

export default Monster;