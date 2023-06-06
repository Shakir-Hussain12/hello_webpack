import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Message from './Message'

const App = () => {
    return (
        <Routes>
            <Route exact path="/" component={Message} />
        </Routes>
    )
}

export default App