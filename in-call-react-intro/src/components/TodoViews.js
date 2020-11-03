import React from "react";
import { arrayOf, shape, number, string } from "prop-types";
const TodoView = ({ todoList }) => {
  //console.log(todoList);
return (
    <ul style={{ listStyle: "none" }}>
    {todoList.map(({ id, todo }) => {
        return (
        <>
            <li key={id} style={{ margin: 20 }}>
            {todo}{" "}
            <span
                style={{
                margin: 10,
                padding: 5,
                backgroundColor: "blue",
                color: "white",
                borderRadius: 5,
                }}
            >
                Edit
            </span>
            <span
                style={{
                margin: 10,
                padding: 5,
                backgroundColor: "red",
                color: "white",
                borderRadius: 5,
                }}
            >
                Delete
            </span>
            </li>
            </>
        );
        })}
    </ul>
    );
};
// TodoView.propTypes = {
//   nameString: PropTypes.string.isRequired,
// };
TodoView.propTypes = {
todoList: arrayOf(
    shape({
    id: string.isRequired,
    todo: string.isRequired,
    })
),
};
export default TodoView;
