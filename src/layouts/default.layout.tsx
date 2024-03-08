import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../app/main.scss";
import Link from "next/link";
import Head from 'next/head'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lucian Ene - Software Developer",
  description: "Hello, I'm Lucian.",
};

export default function DefaultLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
  <div lang="en" className="h-100% grey-text:200 bg-fill">
  <div className="">
    <div className="container pv-20 animate__animated animate__fadeIn" style={{animationDuration: '3s', animationIterationCount: 1}}>
      <div className="row">
        <div className="col-2 p-0 relative">
          <div className="side_menu">
            <ul className="text-right list-none">
              {[
                'about',
                'skills',
                'projects',
                'articles',
                ].map((item, index) => {
                return <li key={index}>
                  <a style={{ animationDuration: `${(index+1)/3}s`}} className="grey-text:400 hover:grey-text:100 block pt-5 pb-10 animate__animated animate__backInLeft" href={"#"+item}>#{item}</a>
                </li>
              })}
            </ul>
          </div>
        </div>
        <div className="col-10">
          <div>
            <div className="topbar group mb-30 flex" style={{justifyContent: "end", borderBottom: "1px solid #333"}}>
              <Link href="/" className="group-item grey-text:200 hover:blue-text p-10 ml-15 animate__animated animate__bounceIn" style={{animationDelay: "0.6s"}}>About</Link>
              <a href="https://www.linkedin.com/in/lucianene/" className="group-item grey-text:200 hover:blue-text p-10 ml-15 animate__animated animate__bounceIn" style={{animationDelay: "0.4s"}} target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" className="absolute" style={{marginTop: "3px"}} width="16" height="16" focusable="false">
                  <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
                </svg>
                <span style={{paddingLeft: "17px"}}>LinkedIn</span>
              </a>
              {/*<a href="https://resume.io/r/hAxgBe7VX/download.pdf" target="_blank" className="group-item grey-text:200 hover:blue-text p-10 ml-15 animate__animated animate__bounceIn" style={{animationDelay: "1s"}}><i className="fa fa-file-pdf fs-sm"></i> Resume</a>*/}
              <a href="https://github.com/lucianene" target="_blank" className="group-item grey-text:200 hover:blue-text p-10 ml-15 animate__animated animate__bounceIn" style={{animationDelay: "0.2s"}}><i className="fab fa-github fs-sm"></i><span className="" style={{padding: "0 1px"}}></span>lucianene</a>
            </div>
          </div>
          <div>
            {children}
          </div>
          <div className="mv-50 pt-20 bt-1 grey-border:900 fs-xs">
            <div><span className="mb-5">@2024 Lucian Ene</span> <br /><small>made with nextjs and fastcss</small></div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
  )
}
