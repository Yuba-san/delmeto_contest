import React from 'react';
import Image from 'next/image';
import styles from '../../styles/pagebutton.module.css';
import Link from 'next/link'
let view_data = [];
export const Pagebutton = ({ contents }) => {
    for(let i = 0; i+1 <= contents.length; i++)
    {
        view_data[i] = (
            <Link href={contents[i].url} >
                <div className={styles.main}>
                    <img className={styles.img} src={contents[i].img}/>
                    <p className={styles.title}>{contents[i].title}</p>
                    <p className={styles.description}>{contents[i].description}</p>
                </div>
            </Link>
        )
    }
    return(
        <span>
            {view_data}
        </span>
    )}