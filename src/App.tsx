import { useState } from "react";
import "./App.css";

function App() {
 const [value, setValue] = useState("");
 const [displayText, setDisplayText] = useState([]);
 const [completedText, setCompletedText] = useState([]);

 const handleChangeInput = (event: any) => {
    setValue(event.target.value);
 };

 const handleAddClick = () => {
    setDisplayText([...displayText, { text: value, completed: false }]);
    setValue("");
 };

 const handleCheckboxChange = (index: number) => {
    let newDisplayText = [...displayText];
    let newCompletedText = [...completedText];
    let task = newDisplayText[index];
    task.completed = !task.completed;

    if (task.completed) {
      newCompletedText.push(task);
    } else {
      newCompletedText = newCompletedText.filter((item: any) => item.text !== task.text);
    }

    newDisplayText = newDisplayText.filter((item: any) => !item.completed);
    setCompletedText(newCompletedText);
    setDisplayText(newDisplayText);
 };

 const handleDeleteClick = (index: number) => {
    let newDisplayText = [...displayText];
    newDisplayText = newDisplayText.filter((item: any) => item.text !== newDisplayText[index].text);
    setDisplayText(newDisplayText);
 };

 return (
    <div className="App">
      <h1>Task Manager</h1>
      <input type="text" value={value} onChange={handleChangeInput} />
      <button type="button" onClick={handleAddClick}>Add</button>

      <h2>Display Tasks</h2>
      <ul>
        {displayText.map((task, index) => (
          <li key={index}>
            <input type="checkbox" checked={task.completed} onChange={() => handleCheckboxChange(index)} />
            <p>{task.text}</p>
            <button type="submit" onClick={() => handleDeleteClick(index)}>Delete</button>
          </li>
        ))}
      </ul>

      <h2>Completed Tasks</h2>
      <ul>
        {completedText.map((task, index) => (
          <li className="completed" key={index}>{task.text}</li>
        ))}
      </ul>
    </div>
 );
}

export default App;