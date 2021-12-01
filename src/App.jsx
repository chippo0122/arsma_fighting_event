import { Route, Switch, withRouter } from "react-router"
//views
import Media from './views/Media'
import MainIntro from './views/MainIntro'
import Contact from './views/Contact'
import Categories from './views/Categories'
import Index from './views/Index'
//style sheet
import './App.scss'


function App() {
	return (
		<div className="App">
			<Switch>
				<Route path="/media" component={Media} />
				<Route path="/main_intro" component={MainIntro} />
				<Route path="/categories" component={Categories} />
				<Route path="/contact" component={Contact} />
				<Route component={Index} />
			</Switch>
		</div>
	);
}

export default withRouter(App);
