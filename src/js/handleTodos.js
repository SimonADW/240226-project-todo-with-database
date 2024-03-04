import { addDoc, serverTimestamp } from "firebase/firestore";
import { renderTodoList } from "./renderTodoList";

const handleNewTodo = (titleInput, dueDateInput, descriptionInput, collection) => {
	const newToDo = {
		title: titleInput,
		dueDate: dueDateInput,
		description: descriptionInput,		
		timestamp: serverTimestamp()		
	}

	addDoc(collection, newToDo)
	.then(()=> {
		console.log("Todo added ✔︎");
		// renderTodos()	
	})
	.catch((error)=> console.log(error.message));
}

export {handleNewTodo}

