import admin from "firebase-admin";
import "firebase-admin/firestore";
import "firebase-admin/app";

import { App, initializeApp, ServiceAccount } from "firebase-admin/app";
import { getAuth } from "firebase-admin/auth";

let app: App | undefined;
const env = process.env;

if (!admin.apps.length) {
  console.log(env.PRIVATE_KEY_ID);
  app = initializeApp({
    credential: admin.credential.cert({
      type: env.TYPE,
      project_id: env.PROJECT_ID,
      private_key_id: env.PRIVATE_KEY_ID,
      private_key: env.PRIVATE_KEY,
      client_email: env.CLIENT_EMAIL,
      client_id: env.CLIENT_ID,
      auth_uri: env.AUTH_URI,
      token_uri: env.TOKEN_URI,
      auth_provider_x509_cert_url: env.AUTH_PROVIDER_X509_CERT_URL,
      client_x509_cert_url: env.CLIENT_X509_CERT_URL,
    } as ServiceAccount),
    databaseURL: env.NEXT_PUBLIC_DB_URL,
  });
}

export { app };
export const AdminAuth = getAuth(app);
