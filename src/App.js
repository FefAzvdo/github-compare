import React, { Fragment } from "react";

import GlobalStyle from "./styles/global";

import Main from "./pages/Main/Index";

function App() {
    return (
        <Fragment>
            <GlobalStyle />
            <Main />
        </Fragment>
    );
}

export default App;
