import { Request, Response } from "express";
import { getPlacesByName } from "./searchController";
import { checkSearchParams } from "../../middleware/checks";

export default [
    {
        path: "/",
        method: "get",
        handler: async (req: Request, res: Response) => {
            res.send("Hello world!");
        }
    },
    {
        path: "/api/search",
        method: "get",
        handler: [
            checkSearchParams,
            async ({ query }: Request, res: Response) => {
                const name: string = query.q as string;
                const result = await getPlacesByName(name);
                res.status(200).send(result);
            }
        ]
    }
]