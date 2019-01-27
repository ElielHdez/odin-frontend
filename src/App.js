import React from 'react';
import './App.css';
import { BrowserRouter, Route } from "react-router-dom";
import styles from "./assets/styles";
import NavigationBar from "./components/navigation-bar";
import HomeContainer from "./containers/Home";
import ActiveSessionContainer from "./containers/ActiveSession";

const App = () => (
    <BrowserRouter>
        <React.Fragment>
            <NavigationBar />
            <main style={styles.container}>
                <Route exact path='/' component={HomeContainer} />
                <Route exact path='/session' component={ActiveSessionContainer} />
            </main>
        </React.Fragment>
    </BrowserRouter>
);

export default App;
