import axios from 'axios';
require('dotenv').config();

export async function handler(event, context) {
    try {
        const key = process.env.REACT_APP_LAST_FM_API_KEY;
        console.log(key);
        // const key = 'f52d074c84b533dec19a5fe149293cc9';
        const url = `https://ws.audioscrobbler.com/2.0/?method=user.gettopalbums&user=eps11&api_key=${key}&format=json`;
        const response = await axios.get(url, {
            headers: { Accept: 'application/json' },
        });
        return {
            statusCode: 200,
            body: JSON.stringify(response.data),
        };
    } catch (err) {
        console.log('there was an error');
        // console.log(err); // output to netlify function log
        return {
            statusCode: 500,
            body: JSON.stringify({ msg: err.message }), // Could be a custom message or object i.e. JSON.stringify(err)
        };
    }
};
