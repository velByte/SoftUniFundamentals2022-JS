function solve(num) {

    let sequence = "ATCGTTAGGG";

    let counter = 0;

    for (let i = 0; i < num; i++) {
        switch (i % 4) {
            case 0:
                console.log("**" + sequence[counter % 10] + sequence[(counter + 1) % 10] + "**");
                counter += 2;
                break;
            case 1:
                console.log("*" + sequence[counter % 10] + "--" + sequence[(counter + 1) % 10] + "*");
                counter += 2;
                break;
            case 2:
                console.log(sequence[counter % 10] + "----" + sequence[(counter + 1) % 10]);
                counter += 2;
                break;
            case 3:
                console.log("*" + sequence[counter % 10] + "--" + sequence[(counter + 1) % 10] + "*");
                counter += 2;
                break;
        }

    }

}

solve(4)