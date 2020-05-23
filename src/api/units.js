import { Firestore } from "../configs/firestore";

export const getUnits = () => {
  Firestore.getDB()
    .collection("units")
    .get()
    .then(querySnapshot => {
      querySnapshot.docs.map(doc => {
        console.log("LOG getUnits", doc.data());
        return doc.data();
      });
    });
};

export const addUnit = data => {
  Firestore.getDB()
    .collection("units")
    .add(data)
    .then(() => {
      console.log("Document successfully written!");
    })
    .catch(error => {
      console.error("Error writing document: ", error);
    });
};

export const updateUnit = (id, data) => {
  Firestore.getDB()
    .collection("units")
    .doc(id)
    .set({ data })
    .then(() => {
      console.log("Document successfully written!");
    })
    .catch(error => {
      console.error("Error writing document: ", error);
    });
};

export const deleteUnit = id => {
  Firestore.getDB()
    .collection("units")
    .doc(id)
    .delete()
    .then(() => {
      console.log("Document successfully written!");
    })
    .catch(error => {
      console.error("Error writing document: ", error);
    });
};
