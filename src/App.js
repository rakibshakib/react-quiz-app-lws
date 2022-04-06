import Layout from './components/Layout/Layout';
import Home from './components/Pages/Home';
import Login from './components/Pages/Login';
import SignUp from './components/Pages/SignUp';
import './styles/app.css';
function App() {
    return (
        <Layout>
            <Home />
            <SignUp />
            <Login />
        </Layout>
    );
}

export default App;
