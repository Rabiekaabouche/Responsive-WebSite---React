import "./App.css";
import { Footer, Navbar } from "./components";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import GlobalStyle from "./GlobalStyles";
import Home from "./pages/homePage/Home";
import SignUp from "./pages/SignUp/SignUp";
import Products from "./pages/products/Products";
import Services from "./pages/services/Services";
import ScroolToTop from "./components/ScroolToTop";

function App() {
	return (
		<Router>
			<GlobalStyle />
			<ScroolToTop />
			<Navbar />
			<Switch>
				<Route path="/" exact component={Home}></Route>
				<Route path="/services" exact component={Services}></Route>
				<Route path="/products" exact component={Products}></Route>
				<Route path="/sign-up" exact component={SignUp}></Route>
			</Switch>
			<Footer />
		</Router>
	);
}

export default App;
