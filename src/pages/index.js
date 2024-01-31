import Head from 'next/head'
import {Sidebar} from "../components/elements/Sidebar.js";
import {Timeline} from "../components/elements/Timeline.js";
import {Header} from "../components/elements/Header.js";

//headに表示するtitleとdescription
const text = {
  title: "Delmeto Home",
  description: "Delmetoは創作言語の制作から発表に特化したウェブサイト!自身の言語の世界へ飛び込みましょう！",
};

//sidebar の内容。[0]が表示されるテキストで、[1]がリンクです。
const sidebar = [
  ["📢お知らせ",""],
  ["📕はじめに",""],
  ["🔑プライバシーポリシー",""]];

//【やること】timelineのデータベース連携 siz の値を変えれるようにする。
//time line(ホームの一番でっかい位置を占めてるやつ)を作ります。siz は一個だけ、それは1要素1要素ごとにごとなってる。
const timeline = [{
    img: "/test169.jpeg",
    siz: [32],
    header: "タイトル",
    content: "内容",
    link: "./page",
},{
  img: "/test169.jpeg",
  siz: [32],
  header: "タイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトル",
  content: "内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容",
  link: "./page",
}]

export default function Home() {
  return (
    <div>
      <Head>
        <title>{text.title}</title>
        <meta name="description" content={text.description} />
      </Head>
      <Header/>
      <div className='header_space'/>
      <table>
        <tbody>
          <tr>
            <th>
              <div className='sidebar'>
                <Sidebar sidebar={sidebar} />
              </div>
            </th>
            <th>
              <div className='timeline'>
                <Timeline timeline_data={timeline} />
              </div>
            </th>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
