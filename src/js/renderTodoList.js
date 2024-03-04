import { deleteDoc, doc } from "firebase/firestore";
import { database } from "./app";

const renderTodoList = (todos)=> {	
	const listUl = document.querySelector(".display-todos-ul");
	listUl.textContent = "";
	let listIndex = -1;

	todos.forEach((todo) => {
		const newTodo = {id: todo.id, ...todo.data()};
		listIndex++;

		const todoLi = document.createElement("li");
		const nrSpan = document.createElement("span");
		const titleSpan = document.createElement("span");
		const dateSpan = document.createElement("span");
		const descSpan = document.createElement("span");
		const deleteSpan = document.createElement("span");
		const deleteButton = document.createElement("button");
		
		todoLi.classList.add("todo-li");
		nrSpan.classList.add("nr-span");
		titleSpan.classList.add("title-span");
		dateSpan.classList.add("date-span");
		descSpan.classList.add("description-span");
		deleteSpan.classList.add("delete-button-span");
		deleteButton.classList.add("delete-button");
		
		nrSpan.textContent = `${listIndex + 1}`;
		titleSpan.textContent = newTodo.title;
		dateSpan.textContent = newTodo.dueDate;
		descSpan.textContent = newTodo.description;
		deleteButton.textContent = "🗑️";
		
		todoLi.dataset.id = newTodo.id;
		
		listUl.append(todoLi);
		todoLi.append(nrSpan, titleSpan, dateSpan, descSpan, deleteSpan);
		deleteSpan.append(deleteButton);		

		deleteButton.addEventListener("click", (event)=> {
			event.preventDefault();
			console.log(event.currentTarget.parentElement.parentElement.dataset.id);
			const idToRemove = event.currentTarget.parentElement.parentElement.dataset.id;
			const docToRemove = doc(database, "todo-or-not-todos" ,idToRemove);
			deleteDoc(docToRemove);
		});
	});
}

export { renderTodoList }


