function solve(input) {

    let userList = [];
    let articleList = new Map();

    class Article {
        constructor(articleName) {
            this.name = articleName;
            this.commentCount = 0;
            this.comment = new Map();
        }

        addComment(commentTitel, commentContent, user) {
            this.commentCount++;
            this.comment.set(commentTitel, {
                "title": commentTitel,
                "content": commentContent,
                "username": user
            });
        }
    }

    class Comment {
        constructor(user, commentTitel, commentContent) {
            this.user = user;
            this.commentTitel = commentTitel;
            this.commentContent = commentContent;
        }
    }

    input.forEach(item => {

        if (item.includes("posts on")) {
            let [firstPart, secondPart] = item.split(": ");
            let [user, article] = firstPart.split(" posts on ");
            let [title, content] = secondPart.split(", ");


            addComment(user, article, title, content);


        } else {
            let [cmd, value] = item.split(" ");
            switch (cmd) {
                case "user":
                    addUser(value);
                    break;
                case "article":
                    addArticle(value);
                    break;
                default:
                    break;
            }
        }

    })

    function addUser(userName) {
        if (userList.indexOf(userName) === -1) {
            userList.push(userName);
        }
    }

    function addArticle(articleName) {
        if (!articleList.has(articleName)) {
            articleList.set(articleName, new Article(articleName))
        }
    }

    function addComment(user, article, commentTitle, content) {
        if (userList.indexOf(user) != -1) {
            if (articleList.has(article)) {
                articleList.get(article).addComment(commentTitle, content, user);
            }
        }
    }

    let sortedArticles = [...articleList].sort((a, b) => b[1].commentCount - a[1].commentCount);

    for (const article of sortedArticles) {
        console.log(`Comments on ${article[0]}`);
        let sortUser = [...article[1].comment].sort((a, b) => a[1].username.localeCompare(b[1].username));
        for (const user of sortUser) {
            console.log(`--- From user ${user[1].username}: ${user[1].title} - ${user[1].content}`);
        }
    }

}


let input = [
    'user aUser123',
    'someUser posts on someArticle: NoTitle, stupidComment',
    'article Books',
    'article Movies',
    'article Shopping',
    'user someUser',
    'user uSeR4',
    'user lastUser',
    'uSeR4 posts on Books: I like books, I do really like them',
    'uSeR4 posts on Movies: I also like movies, I really do',
    'someUser posts on Shopping: title, I go shopping every day',
    'someUser posts on Movies: Like, I also like movies very much',
    'someUser2 posts on Movies: Like, I also like movies very much',
]

solve(input);