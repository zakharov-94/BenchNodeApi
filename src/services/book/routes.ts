import { Request, Response } from "express";
import { addBook, getBooks, getBook, deleteBook, updateBook } from "./bookController";

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
                const id = query.id as string;
                const result = await getBook(id);
                res.status(200).send(result);
            }
        ]
    },
    {
        path: "/api/book",
        method: "put",
        handler: [
            async ({ query, body }: Request, res: Response) => {
                const id = query.id as string;
                const result = await updateBook(id, body);
                res.status(200).send(result);
            }
        ]
    },
    {
        path: "/api/book",
        method: "delete",
        handler: [
            async ({ query }: Request, res: Response) => {
                const id = query.id as string;
                const book = await deleteBook(id);
                res.status(200).send(book);
            }
        ]
    }
];