import React, {lazy, Suspense, useState} from "react";
import {BrowserRouter as Router, Switch} from "react-router-dom";
import SwitchContext from './context/ThemeSwitch'
import Loading from "./containers/Loading";

import "./App.scss"


function App() {

    const Home = lazy(() => import("./pages/Home"));
    const Wrapper = lazy(() => import("./hoc/Wrapper"));
    const UnCached = lazy(() => import("./pages/UnCached"));

    const [lightTheme, setLightTheme] = useState(JSON.parse(localStorage.getItem('theme')))

    const themeSwitchHandler = () => {
        localStorage.setItem('theme', `${!lightTheme}`)
        setLightTheme(!lightTheme)
    }
    return (
        <div className="App">
            <Router>
                <Suspense fallback={<Loading/>}>
                    <SwitchContext.Provider value={{
                        lightTheme,
                        themeSwitchHandler,
                    }}>
                        <Switch>
                            <Wrapper path='/' exact component={Home}/>
                            <Wrapper component={UnCached}/>
                        </Switch>
                    </SwitchContext.Provider>

                </Suspense>
            </Router>
        </div>
    );
}

export default App;
