import Race from './Race';

class Elf extends Race {
  static numberInstances = 0;
  constructor(_name: string, _dexterity: number, private _maxlifePoints = 99) {
    super(_name, _dexterity);
    Elf.incrementInstances();
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

export default Elf;