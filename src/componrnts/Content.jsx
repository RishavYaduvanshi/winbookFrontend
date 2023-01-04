import React from 'react'
import { useState } from 'react';
import { Main } from './Main';
import { useEffect } from 'react';
import Unauthorized from './Unauthorized';
import { initMessaging } from '../messaging';


export const Content = ({ mode, setMode }) => {


  const [logindata, setLogindata] = useState([]);
  const calllogin = () => {
    var authtoken = localStorage.getItem("authtoken");
    if (authtoken && authtoken.length) {
      setLogindata(authtoken);
    }
    //console.log(logindata);
  }
  useEffect(() => {
    calllogin();
    initMessaging();
  }, [])

  return (
    <>
      {
        logindata.length === 0 ? <Unauthorized /> :
          <>
            <Main setMode={setMode} mode={mode} />
          </>
      }
    </>
  )
}
