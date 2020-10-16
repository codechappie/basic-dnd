import React, { useState } from "react";
import BoxDnD from "./BoxDnD";
import ContainerDnD from "./ContainerDnD";

const DragAndDrop = () => {
  const datos = [
    {
      question: "Ordena en el grupo correspondiente",
      alternative: ["manzana", "pera", "fresa", "papa"],
      answer: ["manzana", "fresa", "pera"],
    },
  ];

  const checkAnswer = e => {
    console.log("Revisando");
  }

  const [myData, setMyData] = useState(datos);
  const [groupOne, setGroupOne] = useState([]);
  const [groupTwo, setGroupTwo] = useState([]);
  // console.log(myData)
  return (
    <div className="container">
      <div className="options">
        {myData[0].alternative.map((i, iT) => (
          <BoxDnD key={iT} id={iT} className="dnd-box" draggable="true">
            {i}
          </BoxDnD>
        ))}
      </div>
      <div className="container-fluid">
        <ContainerDnD id="board-1" className="dnd-container">
        
        </ContainerDnD>
        <ContainerDnD id="board-2" className="dnd-container">

        </ContainerDnD>
      </div>
      <button onClick={e => {checkAnswer(e)}}>Comprobar</button>
    </div>
  );
};

export default DragAndDrop;
