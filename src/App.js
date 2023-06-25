import { useState } from "react";
import "./App.css";
import TodoList from "./TodoList";

function App() {
  const [inputList, setInputList] = useState("");
  const [items, setItems] = useState([]);

  const handleChange = (e) => {
    const store = e.target.value;
    setInputList(store);
  };

  const listOfItems = () => {
    setItems((oldItems) => {
      return [...oldItems, inputList];
    });
    setInputList("");
  };

  const deleteItems = (id) => {
    console.log("Deleted");
    setItems((oldItems)=>{
        return oldItems.filter((arrElem,index)=>{
            return index!== id;
        });
    });
  };
  return (
    <div className="main_div">
      <div className="center_div">
        <br />
        <h1>ToDO List</h1>
        <br />
        <input
          type="text"
          placeholder="Make Lists of item"
          value={inputList}
          onChange={handleChange}
        />
        <button onClick={listOfItems}>+</button>

        <ol>
          {items.map((itemval, index) => {
            return (
              <TodoList
                id={index}
                key={index}
                onSelect={deleteItems}
                text={itemval}
              />
            );
          })}
        </ol>
      </div>
    </div>
  );
}

export default App;
