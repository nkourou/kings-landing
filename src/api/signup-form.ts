import { GatsbyFunctionRequest, GatsbyFunctionResponse } from "gatsby"
import fetch from "node-fetch"

interface ContactBody {
    email: string
}
  
export default async function handler(
    req: GatsbyFunctionRequest<ContactBody>,
    res: GatsbyFunctionResponse
) {
    if (!req.body.email) {
        return res.status(422).send("Email field is required")
    }

    // POST data to Zapier who sends it to Google sheet & Slack 
    // TODO: trigger Poshmarkmapp email template send
    const url = process.env.SLACK_WZ_WEBHOOK_URL!
    const headers = {
        // "Access-Control-Allow-Origin": "https://wuruzeka.com",
        "Content-Type": "application/json"
    }
    const data = {
        text: `New user signed up for beta: ${req.body.email}`
    }
    // https://api.slack.com/reference/surfaces/formatting#date-formatting
    // const data = {
    //     datetime: Date.now(),
    //     date: new Date(Date.now()).toUTCString(),
    //     email: req.body.email
    // }

    try {
        await fetch(url, {
            method: "POST",
            headers: headers,
            body: JSON.stringify(data),
        }).then(res => {
            return res.json()
        })
        res.status(200)
    } catch (error) {
        res.status(500)
    }
}