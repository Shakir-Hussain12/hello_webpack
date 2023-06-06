import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Message from './Message'

const App = () => {
    return (
        <Routes>
            <Route exact path="/" Component={Message} />
        </Routes>
    )
}

export default App