import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'

import Routes from './routes'
import Layout from './hoc/Layout/layout'

const App = () => {
    return (
        <Layout>
            <BrowserRouter>
                <Routes />
            </BrowserRouter>
        </Layout>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));