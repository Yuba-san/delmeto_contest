import Head from 'next/head';
import React from 'react';
import {Pagebutton } from "../components/elements/Pagebutton.js";


const text = {
    title: "Delmeto Home",
    description: "Delmetoは創作言語の制作から発表に特化したウェブサイト!自身の言語の世界へ飛び込みましょう！",
    };

const button = [
  {
    title: "文法帳を編集",
    description: "aaa\naaa",
    url: "./grammar",
    img: "/grammar.svg",
  },
  {
    title: "単語帳を編集",
    description: "aaa\naaa",
    url: "./word",
    img: "/word.svg",
  },
  {
    title: "辞書を編集",
    description: "aaa\naaa",
    url: "./dictionary",
    img: "/dictionary.svg",
  },
  {
    title: "歴史書を編集",
    description: "aaa\naaa",
    url: "./history",
    img: "/history.svg",
  }
]

export default function Home() {
  return (
    <div>
      
      <div className='header_space'>
      </div>
      <Head>
          <title>{text.title}</title>
          <meta name="description" content={text.description} />
      </Head>
      <Pagebutton contents={button}/>
    </div>
  )}