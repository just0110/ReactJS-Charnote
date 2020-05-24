import { useEffect, useState, useCallback } from "react";

import { signIn, signUp } from "../api";

/** @Param method: enum = signin, signup, check
 * @Param data for Auth: object = { email, password }
 **/
const useFetch = method => {
  const [error, setError] = useState(null);
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

    switch (method) {
      case "signin":
        signIn(data).then(res => {
          if (res.token) {
            setResponse(res);
          } else {
            setError(res.message);
          }
          setLoading(false);
        });
        break;
      case "signup":
        signUp(data).then(res => {
          if (res.token) {
            setResponse(res);
          } else {
            setError(res.message);
          }
          setLoading(false);
        });
        break;
      default:
        break;
    }
  }, [isLoading, method, data, setLoading]);

  return [{ isLoading, response, error }, doFetch];
};

export default useFetch;
