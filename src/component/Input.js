import { useState } from "react";

function Input({ todos, setTodos }) {
  const [input, setInput] = useState({ title: "", text: "" });

  const addUserHandler = () => {
    if (!input.title || !input.text) return; //input에 값을 넣지 않았을때 리턴으로 끝낸다.
    //input에 값을 입력했을때 입력값을 받는다.
    const newTodos = {
      id: todos.length + 1,
      title: input.title,
      text: input.text,
      isDone: false,
    };
    //todos에 todo를 추가한다.
    setTodos([...todos, newTodos]);
    console.log(newTodos);

    setInput({ title: "", text: "" });
  };

  return (
    <div className="input">
      <span>제목</span>
      <input
        className="add-input"
        type="text"
        value={input.title}
        onChange={(e) => setInput({ ...input, title: e.target.value })}
      ></input>
      <span>내용</span>
      <input
        className="add-input"
        type="text"
        value={input.text}
        onChange={(e) => setInput({ ...input, text: e.target.value })}
      ></input>

      <button className="btn" onClick={addUserHandler}>
        등록하기
      </button>
    </div>
  );
}
export default Input;
