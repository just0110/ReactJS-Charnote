import { Firestore } from "../configs/firestore";

// todo case insensitive
// todo search + pagination
export const getUnits = async () => {
  return await Firestore.getDB()
    .collection("units")
    .orderBy("timestamp", "desc")
    .get()
    .then(querySnapshot => {
      const result = [];
      querySnapshot.docs.forEach(doc => {
        result.push({ id: doc.id, ...doc.data() });
      });
      return result;
    })
    .catch(err => {
      console.log("Error getting document: ", err);
      return err;
    });
};

// todo handle Errors and Responses
export const addUnit = async data => {
  return await Firestore.getDB()
    .collection("units")
    .add(data)
    .then(() => {
      console.log("Document successfully written!");
      return "ok";
    })
    .catch(error => {
      console.error("Error writing document: ", error);
    });
};

export const updateUnit = async (
  id,
  { timestamp, firstName, lastName, volunteer, role }
) => {
  return await Firestore.getDB()
    .collection("units")
    .doc(id)
    .set({
      timestamp,
      firstName,
      lastName,
      volunteer,
      role
    })
    .then(() => {
      console.log("Document successfully updated!");
      return "ok";
    })
    .catch(error => {
      console.error("Error update document: ", error);
    });
};

export const deleteUnit = async id => {
  return await Firestore.getDB()
    .collection("units")
    .doc(id)
    .delete()
    .then(() => {
      console.log("Document successfully deleted!");
      return "ok";
    })
    .catch(error => {
      console.error("Error delete document: ", error);
    });
};
