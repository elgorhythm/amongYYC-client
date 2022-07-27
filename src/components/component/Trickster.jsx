import { collection, doc, setDoc } from "firebase/firestore";
import React, { useState } from "react";
import { useContext } from "react";
import { FirebaseContext } from "../../providers/FirebaseProvider";
import { Box, Button, MenuItem, Select, Typography } from "@mui/material";

const Trickster = () => {
  
  const fbContext = useContext(FirebaseContext);
  const db = fbContext.db;

  

  const addImposter = async () => {
    try {
      const imposterCollectionRef = collection(db, "test");
      let imposterDocRef = doc(imposterCollectionRef, "imposter1");
      let imposter = {
        Imposters: [
          { name: name1, uri: img1 },
          { name: name2, uri: img2 },
          { name: name3, uri: img3 },
          { name: name4, uri: img4 },
        ],
        activeTimes: [
          activeHr1 + ":" + activeMin1,
          activeHr2 + ":" + activeMin2,
          activeHr3 + ":" + activeMin3,
          activeHr4 + ":" + activeMin4,
          activeHr5 + ":" + activeMin5,
        ],
        hint: hint,
        correctAnswer: answer,
      };

      await setDoc(imposterDocRef, imposter);
      console.log("Imposter added successfully!");
      
      
    } catch (ex) {
      console.log("Firestore Add failure", ex.message);
    }
  };
  const [name1, setName1] = useState("");
  const [name2, setName2] = useState("");
  const [name3, setName3] = useState("");
  const [name4, setName4] = useState("");

  const [img1, setImg1] = useState("");
  const [img2, setImg2] = useState("");
  const [img3, setImg3] = useState("");
  const [img4, setImg4] = useState("");

  const [answer, setAnswer] = useState("");

  const [hint, setHint] = useState("");

  const [activeHr1, setActiveHr1] = useState();
  const [activeHr2, setActiveHr2] = useState();
  const [activeHr3, setActiveHr3] = useState();
  const [activeHr4, setActiveHr4] = useState();
  const [activeHr5, setActiveHr5] = useState();

  const [activeMin1, setActiveMin1] = useState();
  const [activeMin2, setActiveMin2] = useState();
  const [activeMin3, setActiveMin3] = useState();
  const [activeMin4, setActiveMin4] = useState();
  const [activeMin5, setActiveMin5] = useState();

  return (
    <Box>
      <h4 style={{ padding: 20, textAlign: "center" }}>Trickster</h4>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography> Add personalities for the trickster function</Typography>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <label>Trickster 1</label>
          <input
            type="text"
            value={name1}
            onChange={(e) => setName1(e.target.value)}
          />
          <input
            type="text"
            value={img1}
            onChange={(e) => setImg1(e.target.value)}
          />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <label>Trickster 2</label>
          <input
            type="text"
            value={name2}
            onChange={(e) => setName2(e.target.value)}
          />
          <input
            type="text"
            value={img2}
            onChange={(e) => setImg2(e.target.value)}
          />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <label>Trickster 3</label>
          <input
            type="text"
            value={name3}
            onChange={(e) => setName3(e.target.value)}
          />
          <input
            type="text"
            value={img3}
            onChange={(e) => setImg3(e.target.value)}
          />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <label>Trickster 4</label>
          <input
            type="text"
            value={name4}
            onChange={(e) => setName4(e.target.value)}
          />
          <input
            type="text"
            value={img4}
            onChange={(e) => setImg4(e.target.value)}
          />
        </div>

        <label> Active times</label>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <Select
            label="Hours"
            labelId="Hours"
            value={activeHr1}
            onChange={(e) => setActiveHr1(e.target.value)}
          >
            <MenuItem value={"09"}>09</MenuItem>
            <MenuItem value={"10"}>10</MenuItem>
            <MenuItem value={"11"}>11</MenuItem>
            <MenuItem value={"12"}>12</MenuItem>
            <MenuItem value={"13"}>13</MenuItem>
            <MenuItem value={"14"}>14</MenuItem>
            <MenuItem value={"15"}>15</MenuItem>
            <MenuItem value={"16"}>16</MenuItem>
            <MenuItem value={"17"}>17</MenuItem>
            <MenuItem value={"18"}>18</MenuItem>
            <MenuItem value={"19"}>19</MenuItem>
            <MenuItem value={"20"}>20</MenuItem>
          </Select>
          <Select
            label="Minutes"
            labelId="Minutes"
            value={activeMin1}
            onChange={(e) => setActiveMin1(e.target.value)}
          >
            <MenuItem value={"00"}>00</MenuItem>
            <MenuItem value={"05"}>05</MenuItem>
            <MenuItem value={"10"}>10</MenuItem>
            <MenuItem value={"15"}>15</MenuItem>
            <MenuItem value={"20"}>20</MenuItem>
            <MenuItem value={"25"}>25</MenuItem>
            <MenuItem value={"30"}>30</MenuItem>
            <MenuItem value={"35"}>35</MenuItem>
            <MenuItem value={"40"}>40</MenuItem>
            <MenuItem value={"45"}>45</MenuItem>
            <MenuItem value={"50"}>50</MenuItem>
            <MenuItem value={"55"}>55</MenuItem>
          </Select>
        </div>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <Select
            label="Hours"
            labelId="Hours"
            value={activeHr2}
            onChange={(e) => setActiveHr2(e.target.value)}
          >
            <MenuItem value={"09"}>09</MenuItem>
            <MenuItem value={"10"}>10</MenuItem>
            <MenuItem value={"11"}>11</MenuItem>
            <MenuItem value={"12"}>12</MenuItem>
            <MenuItem value={"13"}>13</MenuItem>
            <MenuItem value={"14"}>14</MenuItem>
            <MenuItem value={"15"}>15</MenuItem>
            <MenuItem value={"16"}>16</MenuItem>
            <MenuItem value={"17"}>17</MenuItem>
            <MenuItem value={"18"}>18</MenuItem>
            <MenuItem value={"19"}>19</MenuItem>
            <MenuItem value={"20"}>20</MenuItem>
          </Select>
          <Select
            label="Minutes"
            labelId="Minutes"
            value={activeMin2}
            onChange={(e) => setActiveMin2(e.target.value)}
          >
            <MenuItem value={"00"}>00</MenuItem>
            <MenuItem value={"05"}>05</MenuItem>
            <MenuItem value={"10"}>10</MenuItem>
            <MenuItem value={"15"}>15</MenuItem>
            <MenuItem value={"20"}>20</MenuItem>
            <MenuItem value={"25"}>25</MenuItem>
            <MenuItem value={"30"}>30</MenuItem>
            <MenuItem value={"35"}>35</MenuItem>
            <MenuItem value={"40"}>40</MenuItem>
            <MenuItem value={"45"}>45</MenuItem>
            <MenuItem value={"50"}>50</MenuItem>
            <MenuItem value={"55"}>55</MenuItem>
          </Select>
        </div>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <Select
            label="Hours"
            labelId="Hours"
            value={activeHr3}
            onChange={(e) => setActiveHr3(e.target.value)}
          >
            <MenuItem value={"09"}>09</MenuItem>
            <MenuItem value={"10"}>10</MenuItem>
            <MenuItem value={"11"}>11</MenuItem>
            <MenuItem value={"12"}>12</MenuItem>
            <MenuItem value={"13"}>13</MenuItem>
            <MenuItem value={"14"}>14</MenuItem>
            <MenuItem value={"15"}>15</MenuItem>
            <MenuItem value={"16"}>16</MenuItem>
            <MenuItem value={"17"}>17</MenuItem>
            <MenuItem value={"18"}>18</MenuItem>
            <MenuItem value={"19"}>19</MenuItem>
            <MenuItem value={"20"}>20</MenuItem>
          </Select>
          <Select
            label="Minutes"
            labelId="Minutes"
            value={activeMin3}
            onChange={(e) => setActiveMin3(e.target.value)}
          >
            <MenuItem value={"00"}>00</MenuItem>
            <MenuItem value={"05"}>05</MenuItem>
            <MenuItem value={"10"}>10</MenuItem>
            <MenuItem value={"15"}>15</MenuItem>
            <MenuItem value={"20"}>20</MenuItem>
            <MenuItem value={"25"}>25</MenuItem>
            <MenuItem value={"30"}>30</MenuItem>
            <MenuItem value={"35"}>35</MenuItem>
            <MenuItem value={"40"}>40</MenuItem>
            <MenuItem value={"45"}>45</MenuItem>
            <MenuItem value={"50"}>50</MenuItem>
            <MenuItem value={"55"}>55</MenuItem>
          </Select>
        </div>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <Select
            label="Hours"
            labelId="Hours"
            value={activeHr4}
            onChange={(e) => setActiveHr4(e.target.value)}
          >
            <MenuItem value={"09"}>09</MenuItem>
            <MenuItem value={"10"}>10</MenuItem>
            <MenuItem value={"11"}>11</MenuItem>
            <MenuItem value={"12"}>12</MenuItem>
            <MenuItem value={"13"}>13</MenuItem>
            <MenuItem value={"14"}>14</MenuItem>
            <MenuItem value={"15"}>15</MenuItem>
            <MenuItem value={"16"}>16</MenuItem>
            <MenuItem value={"17"}>17</MenuItem>
            <MenuItem value={"18"}>18</MenuItem>
            <MenuItem value={"19"}>19</MenuItem>
            <MenuItem value={"20"}>20</MenuItem>
          </Select>
          <Select
            label="Minutes"
            labelId="Minutes"
            value={activeMin4}
            onChange={(e) => setActiveMin4(e.target.value)}
          >
            <MenuItem value={"00"}>00</MenuItem>
            <MenuItem value={"05"}>05</MenuItem>
            <MenuItem value={"10"}>10</MenuItem>
            <MenuItem value={"15"}>15</MenuItem>
            <MenuItem value={"20"}>20</MenuItem>
            <MenuItem value={"25"}>25</MenuItem>
            <MenuItem value={"30"}>30</MenuItem>
            <MenuItem value={"35"}>35</MenuItem>
            <MenuItem value={"40"}>40</MenuItem>
            <MenuItem value={"45"}>45</MenuItem>
            <MenuItem value={"50"}>50</MenuItem>
            <MenuItem value={"55"}>55</MenuItem>
          </Select>
        </div>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <Select
            label="Hours"
            labelId="Hours"
            value={activeHr5}
            onChange={(e) => setActiveHr5(e.target.value)}
          >
            <MenuItem value={"09"}>09</MenuItem>
            <MenuItem value={"10"}>10</MenuItem>
            <MenuItem value={"11"}>11</MenuItem>
            <MenuItem value={"12"}>12</MenuItem>
            <MenuItem value={"13"}>13</MenuItem>
            <MenuItem value={"14"}>14</MenuItem>
            <MenuItem value={"15"}>15</MenuItem>
            <MenuItem value={"16"}>16</MenuItem>
            <MenuItem value={"17"}>17</MenuItem>
            <MenuItem value={"18"}>18</MenuItem>
            <MenuItem value={"19"}>19</MenuItem>
            <MenuItem value={"20"}>20</MenuItem>
          </Select>
          <Select
            label="Minutes"
            labelId="Minutes"
            value={activeMin5}
            onChange={(e) => setActiveMin5(e.target.value)}
          >
            <MenuItem value={"00"}>00</MenuItem>
            <MenuItem value={"05"}>05</MenuItem>
            <MenuItem value={"10"}>10</MenuItem>
            <MenuItem value={"15"}>15</MenuItem>
            <MenuItem value={"20"}>20</MenuItem>
            <MenuItem value={"25"}>25</MenuItem>
            <MenuItem value={"30"}>30</MenuItem>
            <MenuItem value={"35"}>35</MenuItem>
            <MenuItem value={"40"}>40</MenuItem>
            <MenuItem value={"45"}>45</MenuItem>
            <MenuItem value={"50"}>50</MenuItem>
            <MenuItem value={"55"}>55</MenuItem>
          </Select>
        </div>

        <input
          type="text"
          placeholder="Trickster Hint"
          value={hint}
          onChange={(e) => setHint(e.target.value)}
        />
        <Typography
              
            >
              {" "}
             Select the correct answer for the hint
            </Typography>
            <div class="form-check">
              <input
                value={name1}
                onChange={(e) => {
                  setAnswer(e.target.value);
                }}
                class="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
              />
              <label class="form-check-label" for="flexRadioDefault1">
                {" "}
               Trickster 1 {" "}
              </label>
            </div>
            <div class="form-check">
              <input 
                value={name2}
                onChange={(e) => {
                  setAnswer(e.target.value);
                }
                }
                class="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault2"
              />
              <label class="form-check-label" for="flexRadioDefault2">
                {" "}
                Trickster 2 {" "}
              </label>
            </div>
            <div class="form-check">
              <input 
                value={name3}
                onChange={(e) => {
                  setAnswer(e.target.value);
                }
                }
                class="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault2"
              />
              <label class="form-check-label" for="flexRadioDefault2">
                {" "}
                Trickster 3 {" "}
              </label>
            </div>
            <div class="form-check">
              <input 
                value={name4}
                onChange={(e) => {
                  setAnswer(e.target.value);
                }
                }
                class="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault2"
              />
              <label class="form-check-label" for="flexRadioDefault2">
                {" "}
                Trickster 4 {" "}
              </label>
            </div>
            
           









      
        <Button onClick={addImposter}>Submit</Button>
      </div>
    </Box>
  );
};
export default Trickster;
