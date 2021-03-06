/// <reference types="react-scripts" />
/**
 * Overwriting types to remove annoying warnings for environment variables.
 */
declare namespace NodeJS {
    interface ProcessEnv {
        NODE_ENV: 'development' | 'production' | 'test';
        PUBLIC_URL: string;
        REACT_APP_LAST_FM_API_KEY: string;
    }
}
