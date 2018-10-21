const LIST_NAME = 'test-todo-store';

export function writeToLocalStorage(list) {
    localStorage.setItem(LIST_NAME, JSON.stringify(list));
}

export function readFromLocalStorage() {
    const str = localStorage.getItem(LIST_NAME);
    return JSON.parse(str) || [];
}
