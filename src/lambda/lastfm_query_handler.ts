import { Handler, Context, Callback, APIGatewayEvent } from 'aws-lambda';
import axios from 'axios';

interface HelloResponse {
    statusCode: number;
    body: string;
}

const handler: Handler = async (event: APIGatewayEvent, context: Context) => {
    try {
        const url = `https://ws.audioscrobbler.com/2.0/?method=user.gettopalbums&user=eps11&api_key=${process.env.LAST_FM_API_KEY}&format=json`;
        const response = await axios.get(url, {
            headers: { Accept: 'application/json' },
        });
        const data = response.data;
        return {
            statusCode: 200,
            body: JSON.stringify({ msg: data.joke }),
        };
    } catch (err) {
        console.log(err); // output to netlify function log
        return {
            statusCode: 500,
            body: JSON.stringify({ msg: err.message }), // Could be a custom message or object i.e. JSON.stringify(err)
        };
    }
};

export { handler };
