import Head from 'next/head';
import React from 'react';
import Markdown from 'react-markdown';
import io from 'socket.io-client';
import styles from '../styles/markdown.module.css';
import { useEffect, useState } from 'react';
//import Toolbar from "./components/toolbar.js";
const room_id = "aaa";

const socket = io("http://yubamac.local:8000");

const text = {
    title: "Delmeto Home",
    description: "Delmetoは創作言語の制作から発表に特化したウェブサイト!自身の言語の世界へ飛び込みましょう！",
    };

const markdown = '# Hi, *Pluto*!'

export default function Home() {

  const [html, sethtml] = useState("");  
  const handleInputChange = (e) => {
    const value = e.target.value;
    socket.emit('room_id', room_id)
    socket.emit('input', value);
  };
  {socket.on('html', (data) => {
    sethtml(data);
  })}
  return (
    <div className={styles.div}>
        <Head>
        <title>{text.title}</title>
        <meta name="description" content={text.description} />
      </Head>
      <div className='header_space'/>
      {/* <Toolbar>
      </Toolbar> */}
      <table className={styles.table}>
        <tbody>
          <tr>
            <th className={styles.th}>
              <textarea onChange={handleInputChange} className={styles.textarea}>
              </textarea>
            </th>
            <th>
              <div className={styles.markdows_base}>
                <Markdown>
                  
                </Markdown>
              </div>
            </th>
          </tr>
        </tbody>
      </table>
    </div>
  )}