/**
 * get Todo List from localStorage.
 */
const storage = {
  fetch() {
    const arr = [];
    if (localStorage.length > 0) {
      const size = localStorage.length;

      for (let i = 0; i < size; i += 1) {
        const item = localStorage.key(i);

        if (item !== 'loglevel:webpack-dev-server' || item === '') {
          arr.push(JSON.parse(localStorage.getItem(item)));
        }
      }
    }
    return arr;
  },
};

const state = {
  todoItems: storage.fetch(),
};

const getters = {
  storedTodoItems: state => state.todoItems,
};

const mutations = {
  addOneItem({ todoItems }, payload) {
    const obj = { completed: false, item: payload };
    localStorage.setItem(payload, JSON.stringify(obj));
    todoItems.push(obj);
  },
  removeOneItem({ todoItems }, { todoItem, index }) {
    localStorage.removeItem(todoItem.item);
    todoItems.splice(index, 1);
  },
  toggleOneItem({ todoItems }, { todoItem, index }) {
    todoItems[index].completed = !todoItems[index].completed;
    localStorage.removeItem(todoItem.item);
    localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
  },
  clearAllItems(state) {
    localStorage.clear();
    state.todoItems = [];
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
};
