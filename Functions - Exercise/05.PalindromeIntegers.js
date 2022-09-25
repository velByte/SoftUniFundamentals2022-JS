function solve(input){

    for (let i = 0; i < input.length; i++) {
        let number = Number(input[i]);
        let isPalindrome = number === revurseNumber(number);
        console.log(isPalindrome);
    }

    function revurseNumber(number){
        let reversed = Number(String(number).split('').reverse().join(''));
        return reversed;
    }

}