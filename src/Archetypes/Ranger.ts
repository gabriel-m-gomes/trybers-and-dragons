import Archetype from './Archetype';
import { EnergyType } from '../Energy';

class Ranger extends Archetype {
  static numberInstances = 0;
  private _type: EnergyType = 'stamina';

  constructor(_name: string, _special = 0, _cost = 0) {
    super(_name, _special, _cost);
    Ranger.incrementInstances();
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

export default Ranger;
