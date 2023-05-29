import React from 'react';
import { withStorageListener } from './withStorageListener';
import './ChangeAlert.css'

function ChangeAlert({ show, toggleShow }) {
    if (show) {
        return (
            <div className='reload-container'>
                <p>Hubo cambios</p>
                <button 
                    className='reload-button reload-button--add'
                    type='submit'
                    onClick={() => toggleShow(false)}>
                    Recargar
                </button>
            </div>
        );   
    } else {
        return null;
    }
}

const ChangeALertWithStorageListener = withStorageListener(ChangeAlert);

export { ChangeALertWithStorageListener };