import "./App.css";
export const Task = (props) => {
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
            <div>{props.taskName}</div>

            <i
              title="Delete"
              onClick={() => props.handleDelete(props.id)}
              className="fas fa-trash-alt"
            />
          </li>
        </ul>
      </div>
    </>
  );
};
