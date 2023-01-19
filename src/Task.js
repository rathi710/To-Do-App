import { useState } from "react";
import "./App.css";
export const Task = (props) => {
  const[line,setLine] = useState(false);

  const cutIt = () => {
    line ? setLine(false) : setLine(true);
  };

  return (
    <>
      <div style={{ maxHeight: "210px", overflowY: "auto" }}>
        <ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
          <li
            className="checked"
            style={{
              display: "flex",
              justifyContent: "space-between",
              backgroundColor: "lightgray",
              fontSize: "18px",
              fontWeight: "600",
              color: "black",
              padding: "15px",
            }}
          >
            <div style={{textDecoration: line ? "line-through":"none"}} >{props.taskName}</div>
            <div className="icon">
                <i
                  title="Complete"
                  onClick={cutIt}
                  className="fas fa-check circle pointer"
                />
                <i
                  title="Delete"
                  onClick={() => props.handleDelete(props.id)}
                  className="fas fa-trash-alt"
                />
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};
