import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from "./components/Navigation/Navbar";
import CategoryDetail from "./components/Category/CategoryDetails";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import PostDetail from "./components/Post/PostDetail";

function App() {
    return (
        <Router>
            <NavBar/>
            <Switch>
                <Route path="/posts/:id" exact component={PostDetail}/>
                <Route path="/categories/:id" exact component={CategoryDetail}/>
            </Switch>
        </Router>
    );
}

export default App;
