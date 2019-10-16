type scrollObject = {name : string,  count : number};

class item {
    name : string;
    baseStats : statObject;
    additionalStats : statObject;
    cubeOptions : cubeOptionObject;
    starForce : number;
    scrollInfo : scrollObject[];

    constructor(name : string, baseStats : statObject, additionalStats : statObject, cubeOptions : cubeOptionObject, starForce : number, scrollInfo : scrollObject[]) {
        this.name = name;
        this.baseStats = baseStats;
        this.additionalStats = additionalStats;
        this.cubeOptions = cubeOptions;
        this.starForce = starForce;
        this.scrollInfo = scrollInfo;
    }
}


module.exports = item;
