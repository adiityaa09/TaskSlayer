
const monsterEl = document.getElementById('monster');
const bossNameEl = document.getElementById('boss-name');
const hpFillEl = document.getElementById('hp-fill');
const currentHpEl = document.getElementById('current-hp');
const maxHpEl = document.getElementById('max-hp');
const killCountEl = document.getElementById('kill-count');

const questInput = document.getElementById('quest-input');
const addBtn = document.getElementById('add-btn');
const questList = document.getElementById('quest-list');
const arenaEl = document.getElementById('arena');

let kills = 0;
let monster = {
    name: "Dark Dragon",
    emoji: "🐉",
    maxHp: 100,
    hp: 100
};

const MONSTERS = [
    { name: "Dark Dragon", emoji: "🐉", hp: 100 },
    { name: "Goblin Thief", emoji: "👺", hp: 40 },
    { name: "Slime King", emoji: "🦠", hp: 60 },
    { name: "Stone Golem", emoji: "🗿", hp: 150 },
    { name: "Ghost of Procrastination", emoji: "👻", hp: 80 }
];

initGame();

function initGame() {
    spawnMonster();
    addBtn.addEventListener('click', addQuest);
    questInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') addQuest();
    });
}

function spawnMonster() {
    const template = MONSTERS[Math.floor(Math.random() * MONSTERS.length)];
    const difficultyMult = 1 + (kills * 0.1);

    monster.name = template.name;
    monster.emoji = template.emoji;
    monster.maxHp = Math.floor(template.hp * difficultyMult);
    monster.hp = monster.maxHp;

    updateMonsterUI();

    monsterEl.style.transform = "scale(0)";
    setTimeout(() => {
        monsterEl.style.transform = "scale(1)";
    }, 100);
}

function updateMonsterUI() {
    monsterEl.textContent = monster.emoji;
    bossNameEl.textContent = monster.name;
    currentHpEl.textContent = monster.hp;
    maxHpEl.textContent = monster.maxHp;

    const percentage = (monster.hp / monster.maxHp) * 100;
    hpFillEl.style.width = `${percentage}%`;
}

function addQuest() {
    const text = questInput.value.trim();
    if (!text) return;

    const li = document.createElement('li');
    li.className = 'quest-item';

    const span = document.createElement('span');
    span.textContent = text;
    li.appendChild(span);

    const btnContainer = document.createElement('div');
    btnContainer.className = 'quest-actions';

    const attackBtn = document.createElement('button');
    attackBtn.innerHTML = '⚔️ SLAY';
    attackBtn.onclick = () => {
        completeQuest(li);
    };

    btnContainer.appendChild(attackBtn);
    li.appendChild(btnContainer);

    questList.appendChild(li);
    questInput.value = '';
}

function completeQuest(questElement) {
    questElement.style.transform = 'translateX(100%)';
    questElement.style.opacity = '0';
    setTimeout(() => questElement.remove(), 200);

    const damage = Math.floor(Math.random() * 16) + 15;
    const isCrit = Math.random() > 0.8;
    const finalDamage = isCrit ? damage * 2 : damage;

    takeDamage(finalDamage, isCrit);
}

function takeDamage(amount, isCrit) {
    monster.hp -= amount;
    if (monster.hp < 0) monster.hp = 0;

    updateMonsterUI();

    showDamageNumber(amount, isCrit);
    shakeArena();
    flashMonster();

    if (monster.hp <= 0) {
        setTimeout(handleMonsterDeath, 600);
    }
}

function showDamageNumber(amount, isCrit) {
    const el = document.createElement('div');
    el.classList.add('damage-number');
    if (isCrit) el.classList.add('crit');
    el.textContent = isCrit ? `CRIT! -${amount}` : `-${amount}`;

    const randomLeft = 40 + (Math.random() * 20 - 10);
    const randomTop = 40 + (Math.random() * 20 - 10);

    el.style.left = `${randomLeft}%`;
    el.style.top = `${randomTop}%`;

    arenaEl.appendChild(el);

    setTimeout(() => {
        el.remove();
    }, 1000);
}

function shakeArena() {
    monsterEl.classList.remove('shake');
    void monsterEl.offsetWidth;
    monsterEl.classList.add('shake');
}

function flashMonster() {
    monsterEl.classList.add('flash-red');
    setTimeout(() => {
        monsterEl.classList.remove('flash-red');
    }, 200);
}

function handleMonsterDeath() {
    monsterEl.textContent = "💀";

    kills++;
    killCountEl.textContent = kills;

    setTimeout(() => {
        spawnMonster();
    }, 1500);
}
