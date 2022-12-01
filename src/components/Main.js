import '../styles/styles.scss';
import ToDo from './Todo';


function Main(){
    return(
        <main className="main">
            <div className="container">
                <div className="todo_content">
                    <h1>My Todos</h1>
                    <ToDo text='Learn React'/>
                    <ToDo text='Master React'/>
                </div>
            </div>
        </main>
    )
}

export default Main;