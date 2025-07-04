declare const process: any;

export const environment = {
  production: false,
  emailJSServiceId: process.env.NG_APP_EMAIL_JS_SERVICE_ID,
  emailJStemplateId: process.env.NG_APP_EMAIL_JS_TEMPLATE_ID,
  emailJSPublicAPIKey: process.env.NG_APP_EMAIL_JS_PUBLIC_API_KEY,
};
