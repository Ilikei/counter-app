import React from 'react';
import ReactDOM from 'react-dom/client';
//import {App} from './FirstApp'
import {firstApp} from './Componente'
import './Styles.css'

// ReactDOM.createRoot(document.getElementById('root')).render(
//     <React.StrictMode>
//         <App />
//     </React.StrictMode>
// );

ReactDOM.createRoot (document.getElementById('root')).render(

    <React.StrictMode>
        <firstApp title='hola amigo'/>
    </React.StrictMode>

)

