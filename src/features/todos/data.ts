export type TodosType = {
  text: string
  done: boolean
}

export const initialTodos: Record<number, TodosType> = {
  1: { text: 'Buy groceries', done: false },
  2: { text: 'Clean the house', done: true },
  3: { text: 'Finish the project report', done: false },
  4: { text: 'Call mom', done: true },
}
