import Race from './Race';

class Halfling extends Race {
  static numberInstances = 0;
  constructor(_name: string, _dexterity: number, private _maxlifePoints = 60) {
    super(_name, _dexterity);
    Halfling.incrementInstances();
  }

  get maxLifePoints(): number {
    return this._maxlifePoints;
  }

  private static incrementInstances() {
    this.numberInstances += 1;
  }

  static createdRacesInstances() {
    return this.numberInstances;
  }
}

export default Halfling;