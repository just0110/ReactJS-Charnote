import firebase from "firebase";

export const Firestore = (() => {
  let firestore;

  function createInstance() {
    firestore = firebase.firestore();
    return firestore;
  }

  return {
    getDB: function() {
      if (!firestore) {
        firestore = createInstance();
      }
      return firestore;
    }
  };
})();
