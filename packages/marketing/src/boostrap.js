import React from 'react';
import ReactDOM  from 'react-dom';
import App from './App';
// Here we need to achieve same mount function as we did in product app

const mount = el => {
    ReactDOM.render(<App/>,el);
};


// case 1 : in development Mode + Isolation we need to run the app immideately

if (process.env.NODE_ENV === 'development') {
    const rootDev = document.querySelector('#_marketing-dev-root');
    if (rootDev) {
        mount(rootDev);
    }
}


// case 2 : In Production Mode, We need to export the mount function 

export {mount}; 
