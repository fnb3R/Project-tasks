class Item {
    constructor(name) {
        this.id = Item.generateId();
        this.setName(name);
    }

    static generateId() {
        return Math.floor(Math.random() * 10000);
    }

    setName(name) {
        if (name.length < 3 || name.length > 50) {
            throw new Error("Name must be between 3 and 50 characters");
        }
        this.name = name;
    }

    getItemInfo() {
        return `Item ${this.id} - ${this.name}`;
    }
}

class Weapon extends Item {
    constructor(name, attack, damageType, twoHanded) {
        super(name); 
        this.setAttack(attack);
        this.setDamageType(damageType);
        this.setTwoHanded(twoHanded);
        this.chance = Math.floor(Math.random() * 46) + 5;
    }

    setAttack(attack) {
        if (attack < 1 || attack > 30000) {
            throw new Error("Attack must be between 1 and 30000");
        }
        this.attack = attack;
    }

    setDamageType(damageType) {
        const validDamageTypes = ['physical', 'poison', 'fire', 'water', 'air', 'earth'];
        if (!validDamageTypes.includes(damageType)) {
            throw new Error("Invalid damage type");
        }
        this.damageType = damageType;
    }

    setTwoHanded(twoHanded) {
        if (typeof twoHanded !== 'boolean') {
            throw new Error("Two-handed must be a boolean");
        }
        this.twoHanded = twoHanded;
    }

    getItemInfo() {
        return `${super.getItemInfo()} has ${this.attack} of ${this.damageType} damage`;
    }
}

class Sword extends Weapon {
    constructor(name, attack, damageType, twoHanded) {
        super(name, attack, damageType, twoHanded);
        this.cripple = this.twoHanded ? true : false;
        this.bleed = this.twoHanded ? true : false;
    }

    getItemInfo() { 
        let effect = this.cripple ? "cripple" : "bleed";
        return `${super.getItemInfo()} and has ${this.chance}% to ${effect}`;
    }
}


class Bow extends Weapon {
    constructor(name, attack, damageType, twoHanded, arrowType) {
        super(name, attack, damageType, twoHanded);
        this.setArrowType(arrowType);
        this.pierce = (arrowType === "normal");
        this.critical = (arrowType === "special");
    }

    setArrowType(arrowType) {
        const validArrowTypes = ['normal', 'special'];
        if (!validArrowTypes.includes(arrowType)) {
            throw new Error("Invalid arrow type");
        }
        this.arrowType = arrowType;
    }

    getItemInfo() { 
        let effect = this.pierce ? "pierce" : "critical";
        return `${super.getItemInfo()} and has ${this.chance}% to apply ${effect}`;
    }
}


class Staff extends Weapon {
    constructor(name, attack, damageType, twoHanded) {
        if (damageType === "physical") {
            throw new Error("Staves cannot have physical damage type");
        }
        super(name, attack, damageType, twoHanded);
        this.setDamageEffects(damageType);
    }

    setDamageEffects(damageType) {
        this.burn = damageType === "fire";
        this.poison = damageType === "poison";
        this.cold = damageType === "water";
        this.electrify = damageType === "air";
        this.tremor = damageType === "earth";
    }

    getItemInfo() {
        let effect;
        if (this.burn) effect = "burn";
        else if (this.poison) effect = "poison";
        else if (this.cold) effect = "cold";
        else if (this.electrify) effect = "electrify";
        else effect = "tremor";

        return `${super.getItemInfo()} and has ${this.chance}% to apply ${effect}`;
    }
}

class Armor extends Item {
    constructor(name, defense, resistance) {
        super(name);
        this.setDefense(defense);
        this.setResistance(resistance);
        this.chance = Math.floor(Math.random() * 91) + 10; 
    }

    setDefense(defense) {
        if (defense < 1 || defense > 50000) {
            throw new Error("Defense must be between 1 and 50000");
        }
        this.defense = defense;
    }

    setResistance(resistance) {
        const validResistances = ['physical', 'poison', 'fire', 'water', 'air', 'earth'];
        if (!validResistances.includes(resistance)) {
            throw new Error("Invalid resistance type");
        }
        this.resistance = resistance;
    }

    getItemInfo() {
        return `${super.getItemInfo()} has ${this.defense} defense and ${this.chance}% ${this.resistance} resistance`;
    }
}


class Helm extends Armor {
    constructor(name, defense, resistance, attractiveness) {
        super(name, defense, resistance);
        this.setAttractiveness(attractiveness);
    }

    setAttractiveness(attractiveness) {
        if (attractiveness < -5 || attractiveness > 5) {
            throw new Error("Attractiveness must be between -5 and 5");
        }
        this.attractiveness = attractiveness;
    }

    getItemInfo() {
        return `${super.getItemInfo()} and adds ${this.attractiveness} attractiveness`;
    }
}


class Boots extends Armor {
    constructor(name, defense, resistance, speed) {
        super(name, defense, resistance);
        this.setSpeed(speed);
    }

    setSpeed(speed) {
        if (speed < 1 || speed > 10) {
            throw new Error("Speed must be between 1 and 10");
        }
        this.speed = speed;
    }

    getItemInfo() {
        return `${super.getItemInfo()} and adds ${this.speed} speed`;
    }
}


class Gloves extends Armor {
    constructor(name, defense, resistance, crafting) {
        super(name, defense, resistance);
        this.setCrafting(crafting);
    }

    setCrafting(crafting) {
        if (crafting < 1 || crafting > 10) {
            throw new Error("Crafting must be between 1 and 10");
        }
        this.crafting = crafting;
    }

    getItemInfo() {
        return `${super.getItemInfo()} and adds ${this.crafting} crafting`;
    }
}


class Robe extends Armor {
    constructor(name, defense, resistance, reputation) {
        super(name, defense, resistance);
        this.setReputation(reputation);
    }

    setReputation(reputation) {
        if (reputation < 1 || reputation > 10) {
            throw new Error("Reputation must be between 1 and 10");
        }
        this.reputation = reputation;
    }

    getItemInfo() {
        return `${super.getItemInfo()} and adds ${this.reputation} reputation`;
    }
}


class Consumable extends Item {
    constructor(name, heals, type) {
        super(name);
        this.setHeals(heals);
        this.setType(type);
        this.setEffect(type);
    }

    setHeals(heals) {
        this.heals = heals;
    }

    setType(type) {
        const validTypes = ['minor', 'medium', 'big'];
        if (!validTypes.includes(type)) {
            throw new Error("Invalid type");
        }
        this.type = type;
    }

    setEffect(type) {
        if (type === 'minor') {
            this.effect = Math.floor(Math.random() * 10) + 1;
        } else if (type === 'medium') {
            this.effect = Math.floor(Math.random() * 10) + 11;
        } else {
            this.effect = Math.floor(Math.random() * 10) + 21;
        }
    }

    getItemInfo() {
        if (this.heals) {
            return `${super.getItemInfo()} it is ${this.type} potion and heals for ${this.effect}`;
        } else {
            return `${super.getItemInfo()} it is ${this.type} potion and damages for ${this.effect}`;
        }
    }
}
