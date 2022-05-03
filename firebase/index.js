import admin from "firebase-admin";


admin.initializeApp({
    credential: admin.credential.cert({
//credentials from firebase
    })
});

export default admin;