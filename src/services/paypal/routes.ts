import { Request, Response } from "express";
import { createPayment, processPayment } from "./paypalController";

export default [
    {
        path: "/api/payment",
        method: "post",
        handler: [
            async (req: Request, res: Response) => {
                const response = await createPayment();
                res.status(200).send(response);
            }
        ]
    },
    {
        path: "/api/payment/:orderId/process",
        method: "post",
        handler: [
            async (request: Request, res: Response) => {
                const response = await processPayment(request.params.orderId);
                res.status(200).send(response);
            }
        ]
    }
]