const paypal = require('@paypal/checkout-server-sdk');

// Creating an environment
const clientId = process.env.PAYPAL_CLIENT_ID || "clientID";
const clientSecret = process.env.PAYPAL_CLIENT_SECRET || "clientSecret";
const environment = new paypal.core.SandboxEnvironment(clientId, clientSecret);
const client = new paypal.core.PayPalHttpClient(environment);

// Call API with your client and get a response for your call
export const createOrder = async (paymentAmount: number) => {
    const request = new paypal.orders.OrdersCreateRequest();
    request.requestBody({
        "intent": "CAPTURE",
        "redirect_urls": {
            "return_url": "http://localhost:3000/api/payment/process"
        },
        "purchase_units": [
            {
                "amount": {
                    "currency_code": "USD",
                    "value": paymentAmount.toString()
                }
            }
        ]
    });

    let response = await client.execute(request);
    return response;
}

export const processOrder = async (orderId: string) => {
    const request = new paypal.orders.OrdersCaptureRequest(orderId);
    request.requestBody({});

    // Call API with your client and get a response for your call
    let response = await client.execute(request);
    return response
}