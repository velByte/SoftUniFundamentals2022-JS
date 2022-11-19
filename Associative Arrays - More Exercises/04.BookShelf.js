function solve(input) {

    let shelfList = new Map();

    class Book {
        constructor(title, author, genre) {
            this.title = title;
            this.author = author;
            this.genre = genre;
        }
    }

    class Shelf {
        constructor(id, genre) {
            this.id = id;
            this.genre = genre;
            this.books = [];
        }

        addBook(book) {
            this.books.push(book);
            this.books.sort((a, b) => a.title.localeCompare(b.title));
            return this;
        }
        getBookCount() {
            return this.books.length;
        }
    }

    input.forEach(item => {
        if (item.includes("->")) {
            let [id, genre] = item.split(" -> ");
            if (!shelfList.has(id)) {
                shelfList.set(id, new Shelf(id, genre));
            }
        }

        if (item.includes(":")) {
            let [title, author] = item.split(": ");
            let [authorName, genre] = author.split(", ");
            let book = new Book(title, authorName, genre);
            shelfList.forEach((value, key) => {
                if (value.genre === genre) {
                    value.addBook(book);
                }
            })
        }
    });

    let sortedShelfs = [...shelfList].sort((a, b) => b[1].getBookCount() - a[1].getBookCount());

    sortedShelfs.forEach((value, key) => {
        console.log(`${value[1].id} ${value[1].genre}: ${value[1].getBookCount()}`);
        value[1].books.forEach(book => {
            console.log(`--> ${book.title}: ${book.author}`);
        })
    })

}


let input = ['1 -> history', '1 -> action', 'Death in Time: Criss Bell, mystery', '2 -> mystery', '3 -> sci-fi', 'Child of Silver: Bruce Rich, mystery', 'Hurting Secrets: Dustin Bolt, action', 'Future of Dawn: Aiden Rose, sci-fi', 'Lions and Rats: Gabe Roads, history', '2 -> romance', 'Effect of the Void: Shay B, romance', 'Losing Dreams: Gail Starr, sci-fi', 'Name of Earth: Jo Bell, sci-fi', 'Pilots of Stone: Brook Jay, history']

solve(input);