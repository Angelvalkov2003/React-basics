import React, { useState } from "react";
import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import MyButton from "./components/MyButton";

function App() {
  const [alertVisible, setAlertVisibility] = useState(false);

  const handleSelectItem = (item: string) => {
    // Handle the selected item logic here
    console.log("Selected item:", item);
    setAlertVisibility(true);
  };

  return (
    <>
      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}>
          Hi <h1>Papaaa</h1>
        </Alert>
      )}
      <div>
        <MyButton name="YEsss" type="good" onClicked={handleSelectItem} />
      </div>

      <div>
        <MyButton name="Baddddddd" type="bad" onClicked={handleSelectItem} />
      </div>
    </>
  );
}

export default App;
