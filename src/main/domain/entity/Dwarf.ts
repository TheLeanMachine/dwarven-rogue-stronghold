/**
 * A member of the dwarven stronghold that is being defended.
 */
class Dwarf {
    private _name: string;
    private _initialHp: number;
    private _hp: number;

    constructor(name: string, initialHp: number) {
        this._name = name;
        this._initialHp = initialHp;
        this._hp = this._initialHp;
    }

    isDead(): boolean {
        return true;
    }

    takeDamage(damage: number) {
        this._hp += damage;
    }


    get name() {
        return this._name;
    }

    get hp() {
        return this.hp;
    }
}