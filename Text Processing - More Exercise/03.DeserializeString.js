function solve(input) {

    let index = 0;
    let result = [];
    while (input[index] !== 'end') {
        let letter = input[index].split(':')[0];
        let indexes = input[index].split(':')[1].split('/').map(Number);
        for (let i = 0; i < indexes.length; i++) {
            result[indexes[i]] = letter;
        }
        index++;
    }
    console.log(result.join(''));
}

solve(['a:0/3/5/11',
    'v:1/4',
    'j:2',
    'm:6/9/15',
    's:7/13',
    'd:8/14',
    'c:10',
    'l:12',
    'end']

)