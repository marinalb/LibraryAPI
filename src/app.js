import express from 'express';

const app = express();
app.use(express.json()); //middleware
const books = [
    {
        id: 1,
        title: "Lord of Rings"
    },
    {
        id: 2,
        title: "The Hobbit"
    }
];

function getBookId(id) {
    return books.findIndex(i => {
        return i.id === Number(id);
    });

}

app.get("/", (req, res) => {
    res.status(200).send("Server JS")
});

app.get("/books", (req, res) => {
    res.status(200).json(books);
});

app.get("/books/:id", (req, res) => {
    const index = getBookId(req.params.id);
    res.status(200).json(books[index]);
});

app.post("/books", (req, res) => {
    books.push(req.body);
    res.status(201).send("Book added");

});

app.put("/books/:id", (req, res) => {
    const index = getBookId(req.params.id);
    books[index].title = req.body.title;
    res.status(200).json(books);
});

app.delete("/books/:id", (req, res) => {
    const index = getBookId(req.params.id);
    books.splice(index, 1);
    res.status(204).send("Book DELETED");
});

export default app;

//mongodb+srv://marina:<db_password>@cluster0.wole3pp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0