import React from 'react';
import ReactDOM from 'react-dom/client';
//import {App} from './FirstApp'
import {FirstApp} from './Componente'
import './Styles.css'

// ReactDOM.createRoot(document.getElementById('root')).render(
//     <React.StrictMode>
//         <App />
//     </React.StrictMode>
// );

ReactDOM.createRoot (document.getElementById('root')).render(

    <React.StrictMode>
        <FirstApp title='hola amigo' />
    </React.StrictMode>

)

