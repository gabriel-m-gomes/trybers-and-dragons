import Archetype from './Archetype';
import { EnergyType } from '../Energy';

class Warrior extends Archetype {
  private _type: EnergyType = 'stamina';
  static numberInstances = 0;

  constructor(_name: string, _special = 0, _cost = 0) {
    super(_name, _special, _cost);
    Warrior.incrementInstances();
  }

  get energyType(): EnergyType {
    return this._type;
  }

  private static incrementInstances() {
    this.numberInstances += 1;
  }

  static createdArchetypeInstances() {
    return this.numberInstances;
  }
}

export default Warrior;
