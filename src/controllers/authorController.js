import {author} from "../models/Author.js";


class AuthorController {

    static async listAuthors(req, res) {
        try {
            const authorList = await author.find({});
            res.status(200).json(authorList);
        } catch (error) {
            res.status(500).json({ message: `${error.message} - Failed!` });
        }
    };

    static async listAuthorById(req, res) {
        try {
            const id = req.params.id;
            const found = await author.findById(id);
            res.status(200).json(found);
        } catch (error) {
            res.status(500).json({ message: `${error.message} - Failed!` });
        }
    };

    static async addAuthor(req, res) {
        try {
            const newAuthor = await author.create(req.body);
            res.status(201).json({
                message: "Author added", author:
                    newAuthor
            });
        } catch (error) {
            res.status(500).json({ message: `${error.message} - Failed!` });
        }
    }

    static async updadeAuthorById(req, res) {
        try {
            const id = req.params.id;
            await author.findByIdAndUpdate(id, req.body);
            res.status(200).json({ message: "Author Updated" });
        } catch (error) {
            res.status(500).json({ message: `${error.message} - Failed!` });
        }
    };

    static async deleteAuthorById(req, res) {
        try {
            const id = req.params.id;
            await author.findByIdAndDelete(id);
            res.status(200).json({ message: "Author Deleted" });
        } catch (error) {
            res.status(500).json({ message: `${error.message} - Failed!` });
        }
    };
};

export default AuthorController;