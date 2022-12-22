import SignUp from "./componrnts/SignUp";
import Login from "./componrnts/Login";
import { Content } from "./componrnts/Content";
import { Profilr } from "./componrnts/Profile/Profilr";
import Forgot from "./componrnts/Forgot";
import NotFound from "./componrnts/NotFound";
import { ViewPost } from "./componrnts/Profile/ViewPost";
import { useState, useEffect } from "react";
import MainFrnd from "./componrnts/Friends/MainFrnd";
import { createTheme, ThemeProvider } from "@mui/material";
import {
  Routes,
  Route,
} from "react-router-dom";
import addNotification from "react-push-notification";
import { Notifications } from "react-push-notification";
import app from "./firebase";
import { getToken, getMessaging } from "firebase/messaging";

function App() {

  const VAPID_PVT = "BMT3aq0W8aQy1LD_vgrRIom9jcysk4sschrt3I6nBPbPa_DzusN64m52QAA7GnOQkPpH5AE5FGIhUGohr8YN4ho"
  const [mode, setMode] = useState(localStorage.getItem("theme"));
  const [show, setShow] = useState(false);
  const [notification, setNotification] = useState({ title: '', body: '' });
  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });

  useEffect(() => {
    const messaging = getMessaging(app);
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
  });


  var routes = (
    <ThemeProvider theme={darkTheme}>
      <Routes>
        <Route path='/view/:val' element={<Profilr setMode={setMode} mode={mode} />} />
        <Route path="/profile" element={<Profilr setMode={setMode} mode={mode} />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Login setMode={setMode} mode={mode} />} />
        <Route path="/forgot" element={<Forgot setMode={setMode} mode={mode} />} />
        <Route path="/signup" element={<SignUp setMode={setMode} mode={mode} />} />
        <Route path="/home" element={<Content setMode={setMode} mode={mode} />} />
        <Route path="/frnd" element={<MainFrnd setMode={setMode} mode={mode} />} />
        <Route path="/post/:val" element={<ViewPost setMode={setMode} mode={mode} />} />
      </Routes>
    </ThemeProvider>
  );
  //console.log(routes);
  return routes;
}

export default App;
