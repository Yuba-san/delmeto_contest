import Head from 'next/head'
import React from 'react';

const text = {
    title: "Delmeto Home",
    description: "Delmetoは創作言語の制作から発表に特化したウェブサイト!自身の言語の世界へ飛び込みましょう！",
    };

export default function Home() {
  return (
    <div>
        <Head>
        <title>{text.title}</title>
        <meta name="description" content={text.description} />
      </Head>
    </div>
  )}