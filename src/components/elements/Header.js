import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import axios from 'axios';
import Cookies from 'js-cookie';

export const  Header = () => {
  const [menuButton, setMenuButton] = useState([
    {
      img: 'login.svg',
      url: '../login',
      wid: 120.9,
      hei: 64
    },
    {
      img: 'sign_up.svg',
      url: '../sign_up',
      wid: 120.9,
      hei: 64
    }
  ]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const cookie = Cookies.get("token")
        const response = await axios.post('api/auto_login', { cookie: cookie });
        if (response.data === true) {
          setMenuButton([
            {
              img: 'setting.svg',
              url: '../setting',
              wid: 64,
              hei: 64
            },
            {
              img: 'notice_off.svg',
              url: '../notice',
              wid: 64,
              hei: 64
            },
            {
              img: 'user_off.svg',

              url: '../user',
              wid: 64,
              hei: 64
            },
            {
              img: 'newcreate.svg',
              url: '../newcreate',
              wid: 120.9,
              hei: 64
            }
          ]);
        }
      } catch (error) {
        console.error('Error: 自動ログインの処理、通信にエラーが生じました', error);
      }
    };

    fetchData();
  }, []); // 空の依存配列を渡して初回レンダリング時のみ実行されるようにする

  return (
    <div className="header">
      <Link href="./">
        <Image src="/logo.svg" width={578 * 0.4} height={260 * 0.4} alt="delmeto logo" />
      </Link>
      <span>
        <span>
            {menuButton.map((value, index) => (
            <Link href={value.url} key={index}>
                <Image
                    src={value.img}
                    width={value.wid}
                    height={value.hei}
                />
            </Link>
            ))}
        </span>
      </span>
    </div>
  );
};