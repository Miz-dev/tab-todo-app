import React from "react";
import type { NextPage } from "next";
import { useState } from "react";
import { InputTodo } from "../components/InputTodo";
import { IncompleteTodos } from "../components/IncompleteTodos";
import { CompleteTodos } from "../components/CompleteTodos";

const Home: NextPage = () => {
	const [todoText, setTodoText] = useState("");
	const [incompleteTodos, setIncompleteTodos] = useState([]);
	const [completeTodos, setCompleteTodos] = useState([]);

	const onChangeTodoText = (event) => setTodoText(event.target.value);

	const onClickAdd = () => {
		if (todoText === "") return;
		const newTodos = [...incompleteTodos, todoText];
		setIncompleteTodos(newTodos);
		setTodoText("");
	};

	const onClickDelete = (index) => {
		const newTodos = [...incompleteTodos];
		newTodos.splice(index, 1);
		setIncompleteTodos(newTodos);
	};

	const onClickComplete = (index) => {
		const newIncompleteTodos = [...incompleteTodos];
		newIncompleteTodos.splice(index, 1);

		const newCompleteTodos = [...completeTodos, incompleteTodos[index]];
		setIncompleteTodos(newIncompleteTodos);
		setCompleteTodos(newCompleteTodos);
	};

	const onClickBack = (index) => {
		const newCompleteTodos = [...completeTodos];
		newCompleteTodos.splice(index, 1);

		const newIncompleteTodos = [...incompleteTodos, completeTodos[index]];
		setCompleteTodos(newCompleteTodos);
		setIncompleteTodos(newIncompleteTodos);
	};

	return (
		<>
			{/* <h1 className="text-3xl font-bold underline bg-blue-400">Hello world!</h1>
			<div className="mx-auto prose lg:prose-xl">
				<h2>テスト</h2>
				<ul>
					<li className="line-clamp-2">
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam
						pariatur provident reiciendis ex rerum aperiam, veritatis deserunt?
						Voluptate dolore, sequi sed libero inventore rem mollitia ducimus
						ipsam optio, fuga a!
					</li>
					<li>テスト</li>
					<li>テスト</li>
				</ul>
			</div> */}
			<InputTodo
				todoText={todoText}
				onChange={onChangeTodoText}
				onClick={onClickAdd}
				disabled={incompleteTodos.length >= 5}
			/>
			{incompleteTodos.length >= 5 && (
				<p style={{ color: "red" }}>
					登録できるTODOは5個までです。残タスク消化してください。
				</p>
			)}
			<IncompleteTodos
				todos={incompleteTodos}
				onClickComplete={onClickComplete}
				onClickDelete={onClickDelete}
			/>
			<CompleteTodos todos={completeTodos} onClickBack={onClickBack} />
		</>
	);
};

export default Home;
