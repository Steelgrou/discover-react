import React from 'react'
import './Button.css'

export default function Button({ children }) {
    return (
        <div>
            <div className="button-bg">
                <button className='button' >{children}</button>
            </div>
        </div>
    )
}
