

export default function useMetaData() {
  const meta = {
    app: {
      URL: process.env.REACT_APP_URL,
    },
    unsplash: {
      ACCESS_KEY: process.env.REACT_APP_UNSPLASH_API_ACCESS_KEY,
      SECRET_KEY: process.env.REACT_APP_UNSPLASH_API_SECRET_KEY,
    },
    firebase: {
      API_KEY: process.env.REACT_APP_FIREBASE_API_KEY,
      AUTH_DOMAIN: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
      PROJECT_ID: process.env.REACT_APP_FIREBASE_PROJECT_ID,
      STORAGE_BUCKET: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
      MESSAGING_SENDER_ID: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
      APP_ID: process.env.REACT_APP_FIREBASE_APP_ID,
    },
  };
  return meta
}
