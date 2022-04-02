const ATTACK_VALUE = 10;
const STRONG_ATTACK_VALUE = 17;
const MONSTER_ATTACK_VALUE = 14;
const HEAL_VALUE = 20;

const enteredValue = prompt("Maximum life for you and the monster", "100");

let chosenMaxLife = parseInt(enteredValue);

if (isNaN(chosenMaxLife || chosenMaxLife <= 0)) {
  chosenMaxLife = 100;
}

let currentMonsterHealth = chosenMaxLife;
let currentHumanHealth = chosenMaxLife;
let hasBonusLife = true;

adjustHealthBars(chosenMaxLife);

function reset() {
  currentHumanHealth = chosenMaxLife;
  currentMonsterHealth = chosenMaxLife;
  resetGame(chosenMaxLife);
}

function monsterTurnAttack() {
  const initialPlayerHealth = currentHumanHealth;
  const monsterDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
  currentHumanHealth -= monsterDamage;

  if (currentHumanHealth <= 0 && hasBonusLife) {
    hasBonusLife = false;
    removeBonusLife();
    currentHumanHealth = initialPlayerHealth;
    setPlayerHealth(initialPlayerHealth);
    alert("Bonus life applied! Fighting!!");
  }

  if (currentMonsterHealth <= 0 && currentHumanHealth > 0) {
    alert("You Won!");
  } else if (currentHumanHealth <= 0 && currentMonsterHealth > 0) {
    alert("You Lost!");
  } else if (currentHumanHealth <= 0 && currentMonsterHealth <= 0) {
    alert("You have a draw!");
  }

  if (currentHumanHealth <= 0 || currentMonsterHealth <= 0) {
    reset();
  }
}

function attackMonster(mode) {
  let maxDamage;

  if (mode === "ATTACK") {
    maxDamage = ATTACK_VALUE;
  } else if (mode === "STRONG_ATTACK") {
    maxDamage = STRONG_ATTACK_VALUE;
  }

  const damage = dealMonsterDamage(maxDamage);
  currentMonsterHealth -= damage;
  monsterTurnAttack();
}

function attackHandler() {
  attackMonster("ATTACK");
}

function strongAttackHandler() {
  attackMonster("STRONG_ATTACK");
}

function healHandler() {
  let healValue;
  if (currentHumanHealth >= chosenMaxLife - HEAL_VALUE) {
    alert("You can't heal to more than your max HP");
    healValue = chosenMaxLife - currentHumanHealth;
  } else {
    healValue = HEAL_VALUE;
  }

  increasePlayerHealth(HEAL_VALUE);
  currentHumanHealth += HEAL_VALUE;
  monsterTurnAttack();
}

attackBtn.addEventListener("click", attackHandler);
strongAttackBtn.addEventListener("click", strongAttackHandler);
healBtn.addEventListener("click", healHandler);
