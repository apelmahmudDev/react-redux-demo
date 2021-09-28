import { Provider } from "react-redux";
import CakeContainer from "./components/CakeContainer";
import HooksCakeContainer from "./components/HooksCakeContainer";
import HooksIcecreamContainer from "./components/HooksIcecreamContainer";
import NewCakeContainer from "./components/NewCakeContainer";
import store from "./redux/store";

function App() {
	return (
		<Provider store={store}>
			<div>
				<HooksCakeContainer />
				<CakeContainer />
				<HooksIcecreamContainer />
				<NewCakeContainer />
			</div>
		</Provider>
	);
}

export default App;
