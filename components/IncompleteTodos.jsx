import React from "react";

// const style = {
// 	backgroundColor: "#c6ffe2",
// 	width: "400px",
// 	minHeight: "200px",
// 	padding: "8px",
// 	margin: "8px",
// 	borderRadius: "8px",
// };

export const IncompleteTodos = (props) => {
	const { todos, onClickComplete, onClickDelete } = props;

	return (
		<div className="p-5 m-5 w-96 bg-green-200 rounded-lg">
			<p className="title">未完了のTODO</p>
			<ul>
				{todos.map((todo, index) => {
					return (
						<div key={todo} className="list-row">
							<li>{todo}</li>
							<button onClick={() => onClickComplete(index)}>完了</button>
							<button onClick={() => onClickDelete(index)}>削除</button>
						</div>
					);
				})}
			</ul>
		</div>
	);
};
