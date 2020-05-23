import { useEffect, useState, useCallback } from "react";
import firebase from "firebase";

/** @Param method: enum = signin, signup, signout
 * @Param data: object = { email, password }
 **/
export default method => {
  const [isError, setError] = useState(null);
  const [response, setResponse] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [data, setOptions] = useState({});

  const doFetch = useCallback(data => {
    setError(null);
    setLoading(true);
    setOptions(data);
  }, []);

  useEffect(() => {
    if (!isLoading) {
      return;
    }

    const { email, password } = data;
    switch (method) {
      case "signin":
        firebase
          .auth()
          .signInWithEmailAndPassword(email, password)
          .then(res => {
            const user = {
              token: res.user.refreshToken,
              email: res.user.email,
              name: res.user.displayName,
              phone: res.user.phoneNumber,
              photo: res.user.photoURL
            };
            console.log("RESPONSE", user);
            setResponse(user);
            setLoading(false);
          })
          .catch(err => {
            console.log("ERROR", err);
            setError(err.message);
            setLoading(false);
          });
        break;
      case "signup":
        firebase
          .auth()
          .createUserWithEmailAndPassword(email, password)
          .then(res => {
            const user = {
              token: res.user.refreshToken,
              email: res.user.email,
              name: res.user.displayName,
              phone: res.user.phoneNumber,
              photo: res.user.photoURL
            };

            setResponse(user);
            setLoading(false);
          })
          .catch(err => {
            setError(err.message);
            setLoading(false);
          });
        break;
      default:
        break;
    }
  }, [isLoading, method, data]);

  return [{ isLoading, response, isError }, doFetch];
};
