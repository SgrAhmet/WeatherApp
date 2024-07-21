import React, { useState } from "react";
import "./ToDo.css";

const ToDo = () => {
  const [data, setData] = useState([
    {
      content: "School Project",
      isCompleted: true,
    },
    {
      content: "Homework - Mathematics",
      isCompleted: false,
    },
    {
      content: "English Article",
      isCompleted: false,
    },
    {
      content: "Exercise - Running",
      isCompleted: false,
    },
    {
      content: "Shopping List",
      isCompleted: true,
    },
    {
      content: "Reading a Book",
      isCompleted: true,
    },
  ]);
  const [newTask, setNewTask] = useState("");
  const [whatShown, setWhatShown] = useState("All");
  const [dataLength, setDataLength] = useState(data.length);

  //! console.log(data) her inputa değer girdiğinde yeniden yazılıyor

  const handleInputChange = (e) => {
    setNewTask(e.target.value);
  };

  const handleAddTask = (e) => {
    e.preventDefault();

    if (newTask.trim() !== "") {
      setData([...data, { content: newTask, isCompleted: false }]);
      setNewTask("");

      // console.log(data);
    }
  };

  const handleCheckBox = (index) => {
    const newData = [...data];

    // İlgili öğenin isCompleted değerini tersine çevir
    newData[index].isCompleted = !newData[index].isCompleted;

    // State'i güncelle
    setData(newData);
    // console.log(data)
  };

  const handleButton = (e) => {
    // console.log(e.target.innerText)
    setWhatShown(e.target.innerText);
    if (e.target.innerText === "All") {
      setDataLength(data.length);
    } else if (e.target.innerText === "Active") {
      setDataLength(data.filter((item) => item.isCompleted === false).length);
    } else {
      setDataLength(data.filter((item) => item.isCompleted === true).length);
    }
  };

  return (
    <div className="toDoMain">
      <div className="toDoDiv">
        <h1>Things To Do</h1>
        <form onSubmit={handleAddTask}>
          <input
            placeholder="Add New..."
            type="text"
            value={newTask}
            onChange={handleInputChange}
          />
          <button type="submit">+</button>
        </form>

        {/* ------------------------------------------ */}

        {whatShown === "All" &&
          data.map((item, index) => (
            <div className="toDoItem" key={item.content}>
              <input
                type="checkbox"
                name=""
                id=""
                onClick={() => handleCheckBox(index)}
                checked={item.isCompleted}
              />
              <p>{item.content}</p>
            </div>
          ))}
        {/* ------------------------------------------ */}
        {whatShown === "Active" &&
          data
            .filter((item) => item.isCompleted === false)
            .map((item, index) => (
              <div className="toDoItem" key={item.content}>
                <input
                  type="checkbox"
                  name=""
                  id=""
                  onClick={() => handleCheckBox(index)}
                  checked={item.isCompleted}
                />
                <p>{item.content}</p>
              </div>
            ))}
        {/* ------------------------------------------ */}

        {whatShown === "Completed" &&
          data
            .filter((item) => item.isCompleted === true)
            .map((item, index) => (
              <div className="toDoItem" key={item.content}>
                <input
                  type="checkbox"
                  name=""
                  id={item.content}
                  onClick={() => handleCheckBox(index)}
                  checked={item.isCompleted}
                />
                <p>{item.content}</p>
              </div>
            ))}
        {/* ------------------------------------------ */}

        <div className="footer">

        <p>{dataLength} item</p>
          <div className="buttons">
            <button className={whatShown === "All" ? "active" : ""} onClick={(e) => handleButton(e)}>All</button>
            <button className={whatShown === "Active" ? "active" : ""} onClick={(e) => handleButton(e)}>Active</button>
            <button className={whatShown === "Completed" ? "active" : ""} onClick={(e) => handleButton(e)}>Completed</button>
          </div>

         
        </div>
      </div>
    </div>
  );
};

export default ToDo;
