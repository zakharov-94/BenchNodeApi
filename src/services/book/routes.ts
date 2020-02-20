import { Request, Response } from "express";
import { addBook, getBooks, getBook, deleteBook } from "./bookController";

export default [
    {
        path: "/api/books",
        method: "post",
        handler: [
            async ({ body }: Request, res: Response) => {
                const result = await addBook(body);
                res.status(200).send(result);
            }
        ]
    },
    {
        path: "/api/books",
        method: "get",
        handler: [
            async (req: Request, res: Response) => {
                const result = await getBooks();
                res.status(200).send(result);
            }
        ]
    },
    {
        path: "/api/book",
        method: "get",
        handler: [
            async ({ query }: Request, res: Response) => {
                const result = await getBook(query.id);
                res.status(200).send(result);
            }
        ]
    },
    {
        path: "/api/book",
        method: "delete",
        handler: [
            async ({ query }: Request, res: Response) => {
                const book = await deleteBook(query.id);
                res.status(200).send(book);
            }
        ]
    }
];