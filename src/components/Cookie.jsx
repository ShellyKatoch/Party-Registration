import React from 'react';

function Cookie(props) {

 


    return (
        <div>
          
        </div>
    );
}

export default Cookie;

 export  function setCookie(cname,cvalue,exp){
    let date = new Date();
    date.setTime(date.getTime() + exp*24*60*60*1000);
    document.cookie = `${cname}=${cvalue};expires=${date.toUTCString()};path=/`;
}

 export function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    console.log(ca,name, "ca")
    for(let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }
  export function deleteCookie(cname){
    document.cookie = `${cname}=; expires = Thu, 01 Jan 1970 00:00:00 UTC; path=/;`
  }