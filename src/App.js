import SignUp from "./componrnts/SignUp";
import Login from "./componrnts/Login";
import { Content } from "./componrnts/Content";
import { Profilr } from "./componrnts/Profile/Profilr";
import Forgot from "./componrnts/Forgot";
import NotFound from "./componrnts/NotFound";
import { ViewPost } from "./componrnts/Profile/ViewPost";
import { useState } from "react";
import MainFrnd from "./componrnts/Friends/MainFrnd";
import { createTheme, ThemeProvider } from "@mui/material";
import {
  Routes,
  Route,
} from "react-router-dom";
import ChatScreen from "./componrnts/Chats/ChatScreen";
// import addNotification from "react-push-notification";
// import { Notifications } from "react-push-notification";



function App() {


  const [mode, setMode] = useState(localStorage.getItem("theme"));
  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
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
        <Route path="/connections" element={<MainFrnd setMode={setMode} mode={mode} />} />
        <Route path="/chat" element={<ChatScreen setMode={setMode} mode={mode} />} />
        <Route path="/post/:val" element={<ViewPost setMode={setMode} mode={mode} />} />
      </Routes>
    </ThemeProvider>
  );
  //console.log(routes);
  return routes;
}

export default App;
