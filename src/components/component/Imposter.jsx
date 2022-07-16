import { collection, doc, setDoc } from "firebase/firestore";
import React, { useState } from "react";
import { useContext } from "react";
import { FirebaseContext } from "../../providers/FirebaseProvider";
import { Box } from "@mui/material";
const Imposter = () => {
  const fbContext = useContext(FirebaseContext);
  const db = fbContext.db;

  let timesActive = [
    "08:00",
    "09:00",
    "10:00",
    "11:00",
    "12:00",
    "13:00",
    "14:00",
    "15:00",
  ];
  const [imposterId, setImposterId] = useState("");
  const [imposterName, setImposterName] = useState("");
  const [imposterDescription, setImposterDescription] = useState("");
  const [imposterHint, setImposterHint] = useState("");
  const [imposterImage, setImposterImage] = useState("");
  const [imposterActive, setImposterActive] = useState(true);
  const [imposterActiveTimes, setImposterActiveTimes] = useState(timesActive);

  const addImposter = async () => {
    try {
      let imposterCollectionRef = doc(db, "imposters", imposterId);
      await setDoc(imposterCollectionRef, {
        imposterId: imposterId,
        name: imposterName,
        description: imposterDescription,
        hint: imposterHint,
        image: imposterImage,
        active: imposterActive,
        activeTimes: imposterActiveTimes,
      });
      setImposterName("");
      setImposterDescription("");
      setImposterHint("");
      setImposterImage("");
      setImposterActive(true);
      setImposterActiveTimes(timesActive);
    } catch (ex) {
      console.log("Firestore Add failure", ex.message);
    }
  };

  return (
    <Box>
      <h4 style={{ padding: 20, textAlign: "center" }}>Add Imposter</h4>
      <div> 
        <label htmlFor="imposterId">Imposter Id</label>
        <input
          style={{ width: "100%", marginBottom: 10, marginTop: 10 ,padding:10,borderRadius:5}}
          name={imposterId}
          value={imposterId}
          onChange={(e) => setImposterId(e.target.value)}
        />
        <label htmlFor="imposterName">Imposter Name</label>
        <input
          style={{ width: "100%", marginBottom: 10, marginTop: 10 ,padding:10,borderRadius:5}}
          name={imposterName}
          value={imposterName}
          onChange={(e) => setImposterName(e.target.value)}
        />
        <label htmlFor="imposterDescription">Imposter Description</label>
        <input
          style={{ width: "100%", marginBottom: 10, marginTop: 10 ,padding:10,borderRadius:5}}
          name={imposterDescription}
          value={imposterDescription}
          onChange={(e) => setImposterDescription(e.target.value)}
        />
        <label htmlFor="imposterHint">Imposter Hint</label>
        <input
          style={{ width: "100%", marginBottom: 10, marginTop: 10 ,padding:10,borderRadius:5}}
          name={imposterHint}
          value={imposterHint}
          onChange={(e) => setImposterHint(e.target.value)}
        />
        <label htmlFor="imposterImage">Imposter Image</label>
        <input
          style={{ width: "100%", marginBottom: 10, marginTop: 10 ,padding:10,borderRadius:5}}
          name={imposterImage}
          value={imposterImage}
          onChange={(e) => setImposterImage(e.target.value)}
        />
        <label htmlFor="imposterActive">Imposter Active</label>
        <input
          style={{ width: "100%", marginBottom: 10, marginTop: 10 ,padding:10,borderRadius:5}}
          name={imposterActive}
          value={imposterActive}
          onChange={(e) => setImposterActive(e.target.value)}
        />
        <label htmlFor="imposterActiveTimes">Imposter Active Times</label>
        <input

          style={{ width: "100%", marginBottom: 10, marginTop: 10 ,padding:10,borderRadius:5}}
          name={imposterActiveTimes}
          value={imposterActiveTimes}
          onChange={(e) => setImposterActiveTimes(e.target.value)}
        />
      </div>
      <button onClick={addImposter}>Add Imposter</button>
    </Box>
  );
}
export default Imposter;




