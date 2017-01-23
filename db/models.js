function isObject(obj) {
    return typeof obj === 'object';
}

class Post {
    constructor(arg) {
        if (isObject(arg)) {
            const {title = '', text = '', stat = {}, tags = [], comments = []}=arg;
            this.title = title;
            this.text = text;
            this.stat = new Stat(stat);
            this.tags = tags.map(tag => new Tag(tag));
            this.comments = comments.map(comment => new Comment(comment));
        }
        else {
            this.title = '';
            this.owner = '';
            this.text = '';
            this.stat = new Stat();
            this.tags = [];
            this.comments = [];
        }
    }
}
class Stat {
    constructor(arg) {
        if (isObject(arg)) {
            const {owner = '', date = '', viewCount = 0, voteCount = 0,}=arg;
            this.owner = owner;
            this.date = date;
            this.viewCount = viewCount;
            this.voteCount = voteCount;
        }
        else {
            this.owner = '';
            this.date = '';
            this.viewCount = 0;
            this.voteCount = 0;
        }
    }
}
class Tag {
    constructor(arg) {
        if (isObject(arg)) {
            const {text}=arg;
            this.text = text;
        }
        else {
            this.text = '';
        }
    }
}
class Comment {
    constructor(arg) {
        if (isObject(arg)) {
            const {owner = '', date = '', time = '', text = ''}=arg;
            this.owner = owner;
            this.date = date;
            this.time = time;
            this.text = text;
        }
        else {
            this.owner = '';
            this.date = '';
            this.time = '';
            this.text = '';
        }
    }
}

module.exports = {
    Post,
};