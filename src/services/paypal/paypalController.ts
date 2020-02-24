import { createOrder, processOrder } from "./providers/paypalProvider"

export const createPayment = async () => {
    const response = await createOrder(100);
    return response;
}

export const processPayment = async (orderId: string) => {
    const response = await processOrder(orderId);
    return response;
}