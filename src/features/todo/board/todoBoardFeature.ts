interface TodoItem {
	id: number;
	text: string;
}

interface TodoList {
	id: number;
	title: string;
	items: TodoItem[];
}

export type { TodoItem, TodoList }
