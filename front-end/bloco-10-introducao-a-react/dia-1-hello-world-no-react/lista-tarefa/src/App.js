import './App.css';

const tarefas = ['Acordar', 'Tomar café', 'Estudar', 'Almoçar']

function App() {
  const task = (value) => {
    return (
      <li>{value}</li>
    );
  }

  return (
    <div className="App">
      Hello, world
      <div>
        {tarefas.map((tarefa) => task(tarefa))}
      </div>
    </div>
  );
}

export default App;
