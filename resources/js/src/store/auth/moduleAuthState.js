/*=========================================================================================
  File Name: moduleAuthState.js
  Description: Auth Module State
==========================================================================================*/


export default {
  isUserLoggedIn: () => {
    let isUserLoggedIn = false

    return localStorage.getItem('userInfo') && isUserLoggedIn
  }
}
