import Race from './Race';

class Orc extends Race {
  static numberInstances = 0;
  constructor(_name: string, _dexterity: number, private _maxlifePoints = 74) {
    super(_name, _dexterity);
    Orc.incrementInstances();
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

export default Orc;