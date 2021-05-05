import "./App.css";
import { Navbar } from "./components";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import GlobalStyle from "./GlobalStyles";
import Home from "./pages/homePage/Home";

function App() {
	return (
		<Router>
			<GlobalStyle />
			<Navbar />
			<Switch>
				<Route to="/" exact component={Home}></Route>
			</Switch>
		</Router>
	);
}

export default App;
