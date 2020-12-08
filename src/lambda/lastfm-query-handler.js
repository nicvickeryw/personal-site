import axios from 'axios';
require('dotenv').config();

export async function handler(event, context) {
    try {
        const url = `https://ws.audioscrobbler.com/2.0/?method=user.gettopalbums&user=eps11&period=1month&api_key=${process.env.REACT_APP_LAST_FM_API_KEY}&format=json&limit=25`;
        const response = await axios.get(url, {
            headers: { Accept: 'application/json' },
        });

        return {
            statusCode: 200,
            body: JSON.stringify(response.data),
        };
    } catch (err) {
        console.log(err); // output to netlify function log
        return {
            statusCode: 500,
            body: JSON.stringify({ msg: err.message }),
        };
    }
}
