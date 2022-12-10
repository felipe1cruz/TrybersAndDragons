import { SimpleFighter } from './Fighter';

export default class Monster implements SimpleFighter {
  private _lifePoints: number;
  private _strength: number;

  constructor() {
    this._lifePoints = 85;
    this._strength = 63;
  }

  get lifePoints(): number {
    return this._lifePoints;
  }

  get strength(): number {
    return this._strength;
  }

  attack(enemy: SimpleFighter): void {
    enemy.receiveDamage(this._strength);
  }
  
  receiveDamage(attackPoints: number): number {
    const currentLifePoints = this._lifePoints - attackPoints;
    
    if (currentLifePoints < 1) {
      this._lifePoints = -1;
      return this._lifePoints;
    }

    this._lifePoints = currentLifePoints;
    return this._lifePoints;
  }

}