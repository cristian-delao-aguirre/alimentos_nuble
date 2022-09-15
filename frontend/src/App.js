import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/App.css";
import "react-widgets/styles.css";
import General from "./components/general/general";
import Vendedores from "./components/vendor/vendor";
import Sidebar from "./components/utils/sidebar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
return (
	<Router>
		<div className="App">
			<header class="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
				<a class="navbar-brand col-md-3 col-lg-2 me-0 px-3">
				ÑUBLE ALIMENTOS
				</a>
				<div className="navbar-nav">
					<div className="nav-item text-nowrap">
						<a className="nav-link px-3">Especificar archivo de datos</a>
					</div>
				</div>
				<button className="navbar-toggler position-absolute d-md-none collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
    				<span className="navbar-toggler-icon"></span>
  				</button>
				<input className="form-control form-control-dark w-100" type="text" placeholder="Search" aria-label="Search" type="file" />
			</header>
			<div className="container-fluid">
				<div className="row">
					<Sidebar></Sidebar>
					<Routes>
						<Route exact path="/" element={<General />}></Route>
						<Route exact path="/Vendedores" element={<Vendedores />}></Route>
					</Routes>
					<div className="footer">
						<p>
							Dashboard template built for{" "}
							<a href="https://getbootstrap.com/">Bootstrap</a> by{" "}
							<a href="https://www.linkedin.com/in/cristian-de-la-o-aguirre-39a25063/">@cristian.delao</a>
						</p>
					</div>
				</div>
			</div>
		</div>
	</Router>
);
}

export default App;
