import React from 'react';
import styles from './Section.module.css'

const Section = props => (
    <section className={styles.Section}>
        {props.children}
    </section>
)

export default Section