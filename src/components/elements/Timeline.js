import React from 'react';
import Image from 'next/image';
import styles from '../../styles/timeline.module.css';
import Link from 'next/link'

export const Timeline = ({ timeline_data }) => {
    return (
        <span>
            {timeline_data.map((data, index) => (
                <Link href={data.link} key={index}>
                    <div className={styles.th}
                    style={{width: data.siz*16,height: 13*data.siz}}>
                        <Image 
                            className={styles.img}
                            src={data.img}
                            width={16*data.siz}
                            height={9*data.siz}
                            layout='responsive'
                            objectFit='cover'
                        />
                        <p className={styles.header}>
                            {data.header}
                        </p>
                        <p className={styles.content}>
                            {data.content}
                        </p>
                    </div>
                </Link>
            ))}
        </span>
    );
  };