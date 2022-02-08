import React from "react";

// const style = {
// 	backgroundColor: "#c1ffff",
// 	width: "400px",
// 	height: "30px",
// 	padding: "8px",
// 	margin: "8px",
// 	borderRadius: "8px",
// };

export const InputTodo = (props) => {
	const { todoText, onChange, onClick, disabled } = props;

	return (
		<div className="p-5 m-5 w-96 bg-blue-300 rounded-lg">
			<input
				className="p-1 rounded-md"
				disabled={disabled}
				placeholder="TODOを入力"
				value={todoText}
				onChange={onChange}
			/>
			<button
				className="p-1 ml-3 bg-gray-300 rounded-md"
				disabled={disabled}
				onClick={onClick}
			>
				追加
			</button>
		</div>
	);
};
