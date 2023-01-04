import { getToken, getMessaging } from "firebase/messaging";
import app from "./firebase";

const registerDevice = (token) => {
    const url = "https://winbookbackend.d3m0n1k.engineer/gcm/";
    fetch(url, {
        method: "GET",
        headers: {
            "Accept": "application/json",
            "Authorization": "Token " + localStorage.getItem('authtoken')
        },

    }).then((response) => {
        console.log(response);
        return response.json();
    }).then((data) => {
        console.log(data);
        var registered = false;

        for (var i = 0; i < data.length; i++) {
            if (data[i].registration_id === token) {
                console.log("device already registered");
                registered = true;
            }
        }

        if (!registered) {
            console.log("registering device");
            fetch(url, {
                method: "POST",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    "Authorization": "Token " + localStorage.getItem('authtoken')
                },
                body: JSON.stringify({
                    "registration_id": token,
                    "name": String(navigator.userAgent),
                    "cloud_message_type": "FCM",
                })
            }).then((response) => {
                console.log(response);
                if (response.status === 201) {
                    console.log("device registered");
                }
            }).catch((error) => {
                console.error(error);
            });
        }


    });

}

export const initMessaging = () => {

    const VAPID_PVT = "BMT3aq0W8aQy1LD_vgrRIom9jcysk4sschrt3I6nBPbPa_DzusN64m52QAA7GnOQkPpH5AE5FGIhUGohr8YN4ho"
    const messaging = getMessaging(app);
    console.log("init messaging", messaging);
    Notification.requestPermission().then((permission) => {
        if (permission === "granted") {
            console.log("Notification permission granted.");
            getToken(messaging, { vapidKey: VAPID_PVT }).then((currentToken) => {
                if (currentToken) {
                    registerDevice(currentToken);
                    console.log("current token for client: ", currentToken);
                }
            });
        } else {
            console.log("Unable to get permission to notify.");
        }
    }
    );
}