import Archetype from './Archetype';
import { EnergyType } from '../Energy';

class Mage extends Archetype {
  private _type: EnergyType = 'mana';
  static numberInstances = 0;

  constructor(_name: string, _special = 0, _cost = 0) {
    super(_name, _special, _cost);
    Mage.incrementInstances();
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

export default Mage;
