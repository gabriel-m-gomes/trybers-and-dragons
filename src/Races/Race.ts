abstract class Race {
  constructor(private _name: string, private _dexterity: number) {}
  
  static createdRacesInstances(): void {
    throw new Error('Not implemented');
  }

  get name() {
    return this._name;
  }

  get dexterity() {
    return this._dexterity;
  }

  abstract get maxLifePoints(): number;
}

export default Race;