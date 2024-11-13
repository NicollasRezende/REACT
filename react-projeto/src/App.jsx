import React from 'react';
import Header from './components/Header';
import ProductList from './components/ProductList';
import './App.css';

function App() {
    return (
        <div className="App">
            <Header />
            <main>
                <ProductList />
            </main>
        </div>
    );
}

export default App;
