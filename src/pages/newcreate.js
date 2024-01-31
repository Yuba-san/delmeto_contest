import { useState } from 'react';
import { Header } from "../components/elements/Header.js";
import Head from 'next/head'
import styles from '../styles/newcreate.module.css';
import input_styles from '../styles/input.module.css';
import Image from 'next/image';
import axios from 'axios';
import Cookies from 'js-cookie';

const text = {
    title: "Delmeto Home",
    description: "Delmetoは創作言語の制作から発表に特化したウェブサイト!自身の言語の世界へ飛び込みましょう！",
    };

export default function Home() {
    const [formData, setFormData] = useState({
        name: '',
        author: ''
    });
    const [textData, settextData] = useState("入力してください");

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const fetchData = async () => {
            try {
                const response = await axios.post('api/newcreate_system', { name: formData.name, author: formData.author, cookie: Cookies.get("token") });
                console.log(response.data)
                if (response.data.status == "ok") {
        
                    window.location.href = "http://localhost:3000/";
                }
                else if(response.data.status == "no_mail")
                {
                    settextData("メールアドレスを記入してください");
                }
                else if(response.data.status == "no_password")
                {
                    settextData("パスワードを記入してください");
                }
                else if(response.data.status == "no_name")
                {
                    settextData("ユーザー名を記入してください");
                }
            } catch (error) {
              console.error('Error: サインアップの処理、通信にエラーが生じました', error);
            }
          };
          console.log(formData);
          fetchData();
    }
  return (
    <div>
        <Head>
            <title>{text.title}</title>
            <meta name="description" content={text.description} />
        </Head>
        <Header/>
        <div className='header_space'/>
        <div className={styles.base}>
            <form onSubmit={handleSubmit}>
                <p className={input_styles.text}>言語名</p>
                <input type="text" name="name" className={input_styles.textbox} value={formData.name} onChange={handleInputChange} />
                <p className={input_styles.text}>作者</p>
                <input type="text" name="author" className={input_styles.textbox} value={formData.author} onChange={handleInputChange} />
                <br/>
                <button type="submit" className={input_styles.button}>作成</button>
                <p className={input_styles.text}>{textData}</p>
            </form>
        </div>
    </div>
  )}