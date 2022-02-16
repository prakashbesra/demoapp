import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home';
import UserCard from './components/UserCard/UserCard';
function App() {
    return (
        <div className="App">
            <div style={{ marginTop: 50 }}>
                <UserCard />
            </div>
        </div>
    );
}

export default App;
