function solve(input) {
    console.log(input.match(/\b[A-Z][a-z]+ [A-Z][a-z]+\b/g).join(' '));
}

solve("Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan	Ivanov")    