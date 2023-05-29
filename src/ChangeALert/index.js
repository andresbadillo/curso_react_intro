import React from 'react';
import { withStorageListener } from './withStorageListener';
import './ChangeAlert.css'

function ChangeAlert({ show, toggleShow }) {
    if (show) {
        return (
            <div className='ChangeAlert-bg'>
                <div className='ChangeAlert-container'>
                    <p>Parece que cambiaste tus TODO's en otro pestaña o ventana del navegador</p>
                    <p>¿Quieres recargar para sincronizar tus TODO's?</p>
                    <button 
                        className='reload-button'
                        type='submit'
                        onClick={() => toggleShow(false)}>
                        Recargar
                    </button>
                </div>
            </div>
            
        );   
    } else {
        return null;
    }
}

const ChangeALertWithStorageListener = withStorageListener(ChangeAlert);

export { ChangeALertWithStorageListener };