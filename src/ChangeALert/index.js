import React from 'react';
import { useStorageListener } from './useStorageListener';
import './ChangeAlert.css'

function ChangeAlert({ sincronize }) {
    const { show, toggleShow } = useStorageListener(sincronize);

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

export { ChangeAlert };