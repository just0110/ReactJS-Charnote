import firebase from "firebase";

export const signIn = async ({ email, password }) => {
  return firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(res => {
      return {
        token: res.user.refreshToken,
        email: res.user.email,
        name: res.user.displayName,
        phone: res.user.phoneNumber,
        photo: res.user.photoURL
      };
    })
    .catch(err => {
      console.error("Sign in failed: ", err);
      return err;
    });
};

export const signUp = async ({ email, password }) => {
  return firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then(res => {
      return {
        token: res.user.refreshToken,
        email: res.user.email,
        name: res.user.displayName,
        phone: res.user.phoneNumber,
        photo: res.user.photoURL
      };
    })
    .catch(err => {
      console.error("Sign up failed: ", err);
      return err;
    });
};

export const checkSignIn = async () => {
  return firebase.auth().onAuthStateChanged(res => {
    if (res != null) {
      return {
        token: res.refreshToken,
        email: res.email,
        name: res.displayName,
        phone: res.phoneNumber,
        photo: res.photoURL
      };
    } else {
      return null;
    }
  });
};
