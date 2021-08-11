const battles = require('./battles');

const attackerKing = battles.map(item => item.attacker_king);
const defenderKing = battles.map(item => item.defender_king);
const region = battles.map(item => item.region);
const name = battles.map(item => item.name);

const maxValue = (givenArray) => givenArray.reduce((previous, current, i, arr) =>
    arr.filter(item => item === previous).length >
    arr.filter(item => item === current).length
    ? previous
    : current
    );

const win = battles.filter(item => item.attacker_outcome == "win").length;
const loss = battles.filter(item => item.attacker_outcome == "loss").length;

const battleType = battles.map(item => item.battle_type);
const defenderSize = battles.map(item => item.defender_size).filter(item => item != null);

var min = Math.min( ...defenderSize ),
    max = Math.max( ...defenderSize );

const sum = defenderSize.reduce((a, b) => a + b, 0);
const avg = (sum / defenderSize.length);

const result = {
    'most_active': {
        'attacker_king': maxValue(attackerKing),
        'defender_king': maxValue(defenderKing),
        'region': maxValue(region),
        'name': maxValue(name)
    },

    'attacker_outcome':{
        'win': win,
        'loss': loss
    },

    'battle_type':[...new Set(battleType)],
    'defender_size': {
        'average': avg,
        'min': min,
        'max': max

    }
};

console.log(result);

