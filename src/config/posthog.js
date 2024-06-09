import posthog from 'posthog-js';
require('dotenv').config();

posthog.init(process.env.POSTHOG_API_KEY, { api_host: 'https://app.posthog.com' });

export default posthog;
