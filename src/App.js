import React from 'react';
import classesApp from './App.module.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News"
import Music from "./components/Music/Music"
import {BrowserRouter, Route} from "react-router-dom";

const App = (props) => {
  return (
		<div>
		  <div className={classesApp.noWrapper}>
			<Header/>
		  </div>
			<div className={`${classesApp.navContent} ${classesApp.wrapper}`}>
				<Navbar  state={props.appState.sideBar}/>
				<div className={classesApp.postWrapper}>
					<Route path='/profile'
						   render={ () => <Profile
							   profilePage={props.appState.profilePage}
							   dispatch={props.dispatch}
						   />} />
					<Route path='/dialogs'
						   render={ () => <Dialogs
							   dialogsPage={props.appState.dialogsPage}
							   dispatch={props.dispatch}
						   />} />
					<Route path='/news' render={ () => <News/>} />
					<Route path='/music' render={ () => <Music />} />
				</div>
			</div>
		</div>
  );
}

export default App;
