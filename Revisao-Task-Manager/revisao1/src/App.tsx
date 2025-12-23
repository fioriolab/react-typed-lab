import { useState, useEffect, useRef, useCallback, useMemo } from 'react'
import logoImg from '../public/task-manager.png'
import './App.css'

interface infoProps {
  enabled: boolean,
  item: string
}

function App() {
  const firstRender = useRef(true)
  const inputRef = useRef<HTMLInputElement>(null)
  const [task, setTask] = useState("")
  const [taskList, setTaskList] = useState<string[]>([])
  const [editTask, setEditTask] = useState<infoProps>({
    enabled: false,
    item: ''
  })

  useEffect(() => {
    const listaAtualizada = localStorage.getItem("@fioriolab")
    if(listaAtualizada) {
      setTaskList(JSON.parse(listaAtualizada))
    }
  }, [])

  useEffect(() => {
    if(firstRender.current) {
      firstRender.current = false
      return;
    }

    localStorage.setItem("@fioriolab", JSON.stringify(taskList))
  }, [taskList])

  const handleRegister = useCallback(() => {
    if(!task) {
      alert("Para continuar, é necessário digitar uma tarefa")
      return;
    }

    if(editTask.enabled) {
      handleSubmitTask()
      return;
    }

    setTaskList(tasks => [...tasks, task])
    setTask("")
    inputRef.current?.focus()
  }, [task, taskList])

  const handleDelete = useCallback((item: string) => {
    const newArray = taskList.filter(tasks => tasks !== item)
    setTaskList(newArray)
  }, [taskList])

  const handleEdit = useCallback((item:string) => {
    setTask(item)
    setEditTask({
      enabled: true,
      item: item
    })
    inputRef.current?.focus()
  }, [taskList])

  function handleSubmitTask() {
    const findIndexTask = taskList.findIndex(tasks => tasks == editTask.item)
    const allTasks = [...taskList]
    allTasks[findIndexTask] = task
    setTaskList(allTasks)

    setTask("")
    setEditTask({
      enabled: false,
      item: ''
    })
  }

  return (
    <>
      <section>

        <img src={logoImg} />

        <h1>Lista de Tarefas</h1>
        <hr />

        <div className="registrar">
          <input type="text" placeholder="Digite uma Tarefa"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          ref={inputRef}/>

          <button onClick={handleRegister}>
            {editTask.enabled ? "Atualizar Tarefa" : "Adicionar Tarefa"}
          </button>
        </div>

        <ul>
          {taskList.map((item) => (
            <li key={item}>
              <span>{item}</span>
              <button className="botao-editar" onClick={() => handleEdit(item)}>Editar</button>
              <button className="botao-deletar" onClick={() => handleDelete(item)}>Excluir</button>
            </li>
          ))}
        </ul>

      </section>
    </>
  )
}

export default App
