import React from 'react'
import styles from './Button.module.css'

export default function Button({ children, variant }) {
    const className = styles[variant + 'Button']
    return (
        <div>
            <div className={styles.buttonBg}>
                <button className={className} >{children}</button>
            </div>
        </div>
    )
}
