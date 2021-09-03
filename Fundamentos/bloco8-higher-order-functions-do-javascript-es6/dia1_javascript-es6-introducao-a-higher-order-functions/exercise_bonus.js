const mage = {
    healthPoints: 130,
    intelligence: 45,
    mana: 125,
    damage: undefined,
  };
  
  const warrior = {
    healthPoints: 200,
    strength: 30,
    weaponDmg: 2,
    damage: undefined,
  };
  
  const dragon = {
    healthPoints: 350,
    strength: 50,
    damage: undefined,
  };
  
  const battleMembers = { mage, warrior, dragon };

  const attackDragon = (object)=>{
    const dragon = {object};
    const damageDragon =Math.floor(Math.random()*dragon.strength)+15
    return damageDragon
  }
  const attackWarrior = (object)=>{
    const warrior = {object};
    const damageWarrior = Math.floor(Math.random()*warrior.strength*warrior.weaponDmg)+warrior.strength
    return damageWarrior;
  }
  const attackMage = ()=>{
    const mage = {object};
    const damageMage = Math.floor(Math.random()*mage.intelligence*2)+mage.intelligence
    if(mage.mana < 15){
        return console.log('Nao possui mana suficiente')
    }
    mage.mana -= 15
    return damageMage;
  }
  const gameActions={
    turnWarrior: (callback) ={
        callback();
        
    }
  }