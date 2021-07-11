const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const corsOptions ={
    origin:true, 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}
const stripe = require('stripe')(
  'sk_test_51Ij4vLIwEdB0Tb7VKAbapnfDkCnZRYSSskSJmz3hgh3wKHbVxvh5uUEbe32inrjtOj3Hc58DEkvnq8HFkWCXL92T00ovMpFIOG'
);

//API

//App config
const app = express();

//Middlewares
app.use(cors(corsOptions));
app.use(express.json());

//API routes
app.get('/', (req, res) => res.status(200).send('wesh wesh wesh'));

/*app.get('/secret', async (req, res) => {
  const intent = res.json({ client_secret: intent.client_secret }); // ... Fetch or create the PaymentIntent
}); */



app.post('/payment/create', cors(), async (req, res) => {
    console.log('route reached', req.body);

    const total = req.query.total;

    let { amount, id } = req.body;

    console.log('Payment request received for this amount',total)

    

    try{
    const paymentIntent = await stripe.paymentIntents.create({
      amount: total,
      currency: "eur",
      metadata: { integration_check: "accept_a_payment" },
      payment_method_types: ["card"],
      payment_method: id,
      confirm: true,
    });
    console.log('payment', paymentIntent);

    res.status(201).send({
      clientSecret: paymentIntent.client_secret,
      publishable_key: pk_test_51Ij4vLIwEdB0Tb7VvBl7keKAS2iLcZ62GhyeUI50cUMk51edNPUe4NPIYqRbr1TSyFUfCLwiROUEr5vNjypaw2PI00vlQQ4Tqi,
    }).json({ message: "Payment Successful", success: true,});
    } catch(err) {
        res
          .status(500)
          .send("Client Secret not found" + err)
          .json({ message: "Payment Failed", success: false });
    }
})

//Listen command
exports.api = functions.https.onRequest(app);

//Example endpoint
//http://localhost:5001/clone-30ce2/us-central1/api
