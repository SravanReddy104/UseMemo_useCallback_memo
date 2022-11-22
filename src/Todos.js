import { memo } from "react";
const Todos = ({ List, handleTodos }) => {
  console.count("in child");
  return (
    //  const handleTodos = () =>{

    //  }
    <>
      <div>
        {List.map((l, i) => (
          <div key={i}>{l} </div>
        ))}
      </div>
      <button onClick={handleTodos}>Add Todos</button>
    </>
  );
};
export default memo(Todos);
