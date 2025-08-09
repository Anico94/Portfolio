// Define the type of the environment variables.
declare namespace NodeJS {
  interface ProcessEnv {
    readonly NODE_ENV: string;
    // Replace the following with your own environment variables.

    NG_APP_EMAIL_JS_SERVICE_ID: string;
    NG_APP_EMAIL_JS_TEMPLATE_ID: string;
    NG_APP_EMAIL_JS_PUBLIC_API_KEY: string;
  }
}

// Choose how to access the environment variables.
// Remove the unused options.

// 1. Use process.env.YOUR_ENV_VAR in your code. (conventional)
declare var process: {
  env: NodeJS.ProcessEnv;
};
