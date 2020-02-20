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
                const result = await getPlacesByName(query.q);
                res.status(200).send(result);
            }
        ]
    }
];