type statObject = {attack : number, hp : number, mp : number, str : number, dex : number, int : number, luk : number};
type cubeOptionObject = {mainStat : number, subStat : number, attack : number};
type criticalObject = {min : number, max : number, damage : number};
type itemObject = any; // todo


class character {
    lv : number;
    job : string;
    stats : statObject;
    cubeOptions : cubeOptionObject;
    weaponConst : number;
    weaponExpert : number;
    bossAttack : number;
    ignoreDefense : number;
    critical : criticalObject;
    elementalReset : number;
    increaseDamage : number;
    amplification : number;
    items : itemObject[];
    constructor(lv : number, job : string) {
        this.lv = lv;
        this.job = job;
    }

    calculateStatSum() {

    }
};


module.exports = character;