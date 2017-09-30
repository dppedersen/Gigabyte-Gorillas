import { MY_IP } from "./../myip";
import { fetchUserSuccess } from "./UserActions.js";
import { Actions, ActionConst } from "react-native-router-flux";
import { AsyncStorage, Alert } from "react-native";

export const authInit = () => {
  return {
    type: "AUTH_INIT"
  };
};

export const authSuccess = data => {
  return {
    type: "AUTH_SUCCESS",
    response: data
  };
};

export const setLandingTimeout = bool => {
  return {
    type: "LANDING_TIMEOUT",
    response: bool
  };
};

export const authFail = err => {
  return {
    type: "AUTH_FAIL",
    response: err
  };
};

export const checkAuthInit = () => {
  return {
    type: "CHECK_AUTH_INIT"
  };
};

export const checkAuthSuccess = bool => {
  return {
    type: "CHECK_AUTH_SUCCESS",
    response: bool
  };
};

export const checkAuthFail = bool => {
  return {
    type: "CHECK_AUTH_FAIL",
    response: bool
  };
};

export const landingTimeout = (token, route) => {
  return dispatch => {
    if (!token && route === "Landing") {
      Actions.auth({ type: ActionConst.RESET });
      dispatch(setLandingTimeout(true));
    }
  };
};

export const checkAuth = () => {
  return dispatch => {
    AsyncStorage.getItem("token", (err, result) => {
      if (err || !result) {
        setTimeout(() => {
          Actions.auth({ type: ActionConst.RESET });
          console.log("err token", err);
        }, 1000);
      } else {
        console.log("fetching ha", result);
        fetch(`http://${MY_IP}:3000/signedin`, {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            "x-custom-header": result
          }
        })
          .then(res => {
            console.log("successful fetch");
            if (res) {
              console.log("res", res);
              dispatch(checkAuthSuccess(res.ok));
              Actions.challenges({ type: ActionConst.RESET });
            } else {
              console.log("res not ok", res);
              dispatch(checkAuthFail(res.ok));
              Actions.auth({ type: ActionConst.RESET });
            }
          })
          .catch(err => {
            dispatch(checkAuthFail(err));
          });
      }
    });
  };
};

export const auth = (username, password, email, route) => {
  return dispatch => {
    dispatch(authInit());
    const authData = {
      username,
      password,
      email
    };
    const path = route === "Log In" ? "login" : "register";
    return fetch(`http://${MY_IP}:3000/` + path, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(authData)
    })
      .then(data => {
        return data
          .json()
          .then(data => {
            if (data) {
              console.log("data:", data);
              console.log("data.ok", data.ok);
              AsyncStorage.setItem("token", data.token);
              dispatch(authSuccess());
              dispatch(fetchUserSuccess(data));
              Actions.camera({ type: ActionConst.RESET });
            } else {
              console.log("data from successful auth response", data);
              Alert.alert(data);
              dispatch(authFail(data));
            }
          })
          .catch(err => dispatch(authFail(err)));
      })
      .catch(err => dispatch(authFail(err)));
  };
};
