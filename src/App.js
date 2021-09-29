import { Provider } from "react-redux";
import CakeContainer from "./components/CakeContainer";
import HooksCakeContainer from "./components/HooksCakeContainer";
import HooksIcecreamContainer from "./components/HooksIcecreamContainer";
import ItemContainer from "./components/ItemContainer";
import NewCakeContainer from "./components/NewCakeContainer";
import UserContainer from "./components/UserContainer";
import store from "./redux/store";

function App() {
	return (
		<Provider store={store}>
			<div>
				<UserContainer />
				{/* <ItemContainer cake />
				<ItemContainer />
				<HooksCakeContainer />
				<CakeContainer />
				<HooksIcecreamContainer />
				<NewCakeContainer /> */}
			</div>
		</Provider>
	);
}

export default App;
