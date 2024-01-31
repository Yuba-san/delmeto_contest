import { useState } from 'react';
import Head from 'next/head';
import styles from '../styles/input.module.css';
import Image from 'next/image';
import axios from 'axios';
import Cookies from 'js-cookie';

const text = {
    title: "Delmeto Sign up",
    description: "Delmetoは創作言語の制作から発表に特化したウェブサイト!自身の言語の世界へ飛び込みましょう！",
};

export default function Home() {
    const [formData, setFormData] = useState({
        name: '',
        mail: '',
        password: ''
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
        // フォームの値を使って何かを行う
        const fetchData = async () => {
            try {
                const cookie = Cookies.get("token")
                const response = await axios.post('api/sign_up_system', { name: formData.name, mail: formData.mail, password: formData.password ,cookie: cookie});
                console.log(response.data)
                if (response.data.status == "ok") {
                    Cookies.set('token', response.data.cookie, { path: '/' })
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
          fetchData();
    };

    return (
        <div className={styles.base}>
            <Head>
                <title>{text.title}</title>
                <meta name="description" content={text.description} />
            </Head>
            <div className={styles.background}>
                <div className={styles.form}>
                    <h1>新規登録</h1>
                    <form onSubmit={handleSubmit}>
                        <p className={styles.text}>ユーザー名</p>
                        <input type="text" name="name" className={styles.textbox} value={formData.name} onChange={handleInputChange} />
                        <p className={styles.text}>メールアドレス</p>
                        <input type="text" name="mail" className={styles.textbox} value={formData.mail} onChange={handleInputChange} />
                        <p className={styles.text}>パスワード</p>
                        <input type="password" name="password" className={styles.textbox} value={formData.password} onChange={handleInputChange} />
                        <button type="submit" className={styles.button}>登録</button>
                        <p className={styles.text}>{textData}</p>
                    </form>
                </div>
            </div>
            <img src="nazo.png" className={styles.img} />
        </div>
    );
}
