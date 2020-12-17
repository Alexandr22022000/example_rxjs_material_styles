const shit = function (param) {
    console.log(param);
    console.log('CALL!');
    console.log('THIS:', this.q);
    return "FUNCTION RESULT";
};

shit.prototype = {
    q: 'PARAM OF NEW OBJ',
};

shit.param = 'PARAM OF MAIN OBJ';

console.log(new shit('PARAM 1').q);
console.log(shit('PARAM 2'));
console.log(shit.param);

console.log('---BUILDER DEMO---');

const builder = (strings, ...vars) => {
    return num => {
        let string = '';
        vars.forEach((v, index) => {
            if (v.call) v = v(num);
            string += strings[index];
            string += v;
        });
        string += strings[vars.length];
        return string;
    };
};

const build = builder`TEXT: ${'COOL'} TEXT2: ${a => a*a}`;
console.log(build(2));
