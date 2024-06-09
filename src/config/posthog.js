import posthog from 'posthog-js';

posthog.init('your-api-key', { api_host: 'https://app.posthog.com' });

export default posthog;
