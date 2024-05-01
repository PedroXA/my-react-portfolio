import MainPage from "./pages/mainPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<MainPage />} />
				</Routes>
			</BrowserRouter>
		</>
	);
};

export default App;
