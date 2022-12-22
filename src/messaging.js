import { getToken, getMessaging } from "firebase/messaging";
import app from "./firebase";


export const initMessaging = () => {

    const VAPID_PVT = "BMT3aq0W8aQy1LD_vgrRIom9jcysk4sschrt3I6nBPbPa_DzusN64m52QAA7GnOQkPpH5AE5FGIhUGohr8YN4ho"
    const messaging = getMessaging(app);
    console.log("init messaging", messaging);
    Notification.requestPermission().then((permission) => {
        if (permission === "granted") {
            console.log("Notification permission granted.");
            getToken(messaging, { vapidKey: VAPID_PVT }).then((currentToken) => {
                if (currentToken)
                    console.log("current token for client: ", currentToken);
            });
        } else {
            console.log("Unable to get permission to notify.");
        }
    }
    );
}