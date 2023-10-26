import Race from './Race';

class Dwarf extends Race {
  static numberInstances = 0;
  constructor(_name: string, _dexterity: number, private _maxlifePoints = 80) {
    super(_name, _dexterity);
    Dwarf.incrementInstances();
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

export default Dwarf;