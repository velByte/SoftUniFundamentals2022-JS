function loadingBar(n) {
    let percent = n / 10;
    let bar = '%'.repeat(percent) + '.'.repeat(10 - percent);
    if (n === 100) {
        console.log(`100% Complete!`);
        console.log(`[${bar}]`);
    } else {
        console.log(`${n}% [${bar}]`);
        console.log(`Still loading...`);
    }
}

loadingBar(100);