import arcjet, { tokenBucket, shield, detectBot } from "@arcjet/node";

import "dotenv/config";

//initialize arcject 
export const aj = arcjet({
    key: process.env.ARCJET_KEY,
    characteristics: ["ip.src"], 
    rules: [
        //shield protects the application from attacks like SQL injections, XSS, CSRF, etc.
        shield({mode: "LIVE"}),
        detectBot({
            mode: "LIVE",
            //block all the bots except search engines 
            allow:[
                "CATEGORY:SEARCH_ENGINE"
                //see the full list at https://arcjet.com/bot-list
            ]
        }),
        //rate limiting 
        tokenBucket({
            mode: "LIVE", 
            refillRate: 30, 
            interval: 5,
            capacity: 20,
        })
    ]
})

