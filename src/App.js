import React, { useState } from "react";
import "./App.css";
import Header from "./component/Header";
import Input from "./component/Input";
import List from "./component/List";

function App() {
  const [todos, setTodos] = useState([
    { id: 1, title: "리액트 공부하기", text: "리액트 공부하기", isDone: false },
    { id: 2, title: "리액트 공부하기", text: "리액트 공부하기", isDone: true },
    { id: 3, title: "Test 보기", text: "오늘 시험을 봤다.", isDone: false },
  ]);
  // 파생시킨다.
  /** */

  //
  // isDone = false 인 요소들로 filter를 이용해서 배열을 만들어보세요. doArray라는 변수에 담아주세요.add
  //const doArray = todos.filter((todo) => todo.isDon === false);
  // console.log(doArray); // undefine => console.log(todos)
  // true 인 친구들 모임
  //const deArray = todos.filter((todo) => todo.isDon === true);
  // 』

  return (
    <div className="black">
      <Header />
      {/*input*/}
      <Input todos={todos} setTodos={setTodos} />
      <List todos={todos} setTodos={setTodos} />
    </div>
  );
}
export default App;
