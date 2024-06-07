import React from 'react'
import styles from './Button.module.css'

export default function Button({ children, variant }) {
    const BTN = styles[variant + 'Button']
    return (
        <div>
            <div className={styles.buttonBg}>
                <button type='submit' className={BTN} >{children}</button>
            </div>
        </div>
    )
}
