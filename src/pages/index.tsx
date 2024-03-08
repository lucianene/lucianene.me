import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import validator from 'validator'
import DefaultLayout from "@/layouts/default.layout";
import { ReactElement, useRef, useState } from "react"
import JSConfetti from 'js-confetti'

type ArticleListItem = {
  link: any
  label: string
}

export default function HomePage() {

  const [ email, setEmail ] = useState("")
  const [ resumeRequested, setResumeRequested ] = useState(false)
  const resumeForm = useRef<HTMLFormElement>(null);

  const articles: ArticleListItem[] = [
    {link: "articles/why-i-use-sublime", label: "Why I use Sublime Text instead of IDEs like PHP Storm"},
    {link: "#", label: "What is Fastcss and why I think is awesome"},
    {link: "#", label: "Laravel vs Symfony from a senior php engineer's perspective"},
    {link: "#", label: "Top Sublime Text 4 packages in 2023"},
    {link: "#", label: "Working as a PFA in 2023 after government raises taxes doesn't add up"},
    {link: "#", label: "My view on the Contractor versus Employee debate"},
    {link: "#", label: "Why freelancing sucks"},
    {link: "#", label: "Is Linux better than Windows for software development"},
    {link: "#", label: "What tools I use as a php software engineer"},
  ]

  const skills: any[] = [
    {
      label: 'PHP',
      icon: 'devicon-php-plain',
      percent: '100%'
    },
    {
      label: 'Laravel',
      icon: 'devicon-laravel-plain',
      percent: '100%'
    },
    {
      label: 'Symfony',
      icon: 'devicon-symfony-plain',
      percent: '100%'
    },
    {
      label: 'JavaScript',
      icon: 'devicon-javascript-plain',
      percent: '100%'
    },
    {
      label: 'React.js',
      icon: 'devicon-react-plain',
      percent: '100%'
    },
    {
      label: 'Next.js',
      icon: 'devicon-nextjs-plain',
      percent: '100%'
    },
    {
      label: 'CSS3',
      icon: 'devicon-css3-plain',
      percent: '100%'
    },
    {
      label: 'SASS',
      icon: 'devicon-sass-plain',
      percent: '100%'
    },
    {
      label: 'Typescript',
      icon: 'devicon-typescript-plain',
      percent: '80%'
    },
    {
      label: 'MySQL',
      icon: 'devicon-mysql-plain',
      percent: '85%'
    },
    {
      label: 'MongoDB',
      icon: 'devicon-mongodb-plain',
      percent: '85%'
    },
    {
      label: 'Bash',
      icon: 'devicon-bash-plain',
      percent: '50%'
    },
    {
      label: 'Python',
      icon: 'devicon-python-plain',
      percent: '65%'
    },
    {
      label: 'C++',
      icon: 'devicon-cplusplus-plain',
      percent: '30%'
    },
  ]

  const tools: any[] = [
    {
      label: 'Ubuntu Linux',
      icon: 'devicon-ubuntu-plain',
      percent: '90%'
    },
    {
      label: 'Sublime Text 4',
      icon: 'devicon-linux-plain',
      percent: '100%'
    },
    {
      label: 'VIM',
      icon: 'devicon-vim-plain',
      percent: '15%',
      description: 'Yeah, I know how to exit vim.'
    },
    {
      label: 'PHPStorm',
      icon: 'devicon-phpstorm-plain',
      percent: '70%'
    },
    {
      label: 'Artificial Intelligence',
      icon: 'devicon-illustrator-plain',
      percent: '75%'
    },
    {
      label: 'Guake terminal',
      icon: 'devicon-linux-plain',
      percent: '100%'
    },
    {
      label: 'DBeaver',
      icon: 'devicon-dbeaver-plain',
      percent: '100%'
    },
  ]

  const downloadResume = (e: any) => {
    if (validator.isEmail(email)) {
      e.preventDefault()
      // resumeForm?.current?.submit(resumeForm?.current)
      const jsConfetti = new JSConfetti()
      jsConfetti.addConfetti()


      // window.open('https://resume.io/r/hAxgBe7VX/download.pdf', 'formdownload', 'width=400,height=400,resizeable,scrollbars');
      const submitWindow = window.open('', 'w1', 'width=400,height=400,resizeable,scrollbars');

      // Assuming you have a form reference named `resumeForm`
      const form: any = resumeForm.current;
      if (form) {
        form.setAttribute('target', 'w1');
        form?.submit(); // Submit the form
        // submitWindow?.close()
      }
      const downloadWindow = window.open("https://resume.io/r/hAxgBe7VX/download.pdf", "w2")
      setEmail("")
      setResumeRequested(true)
      // downloadWindow?.close()
    }
  }

  const resumeFormSubmitted = (e: any) => {
    e.preventDefault()
    // window.open('', 'formpopup', 'width=400,height=400,resizeable,scrollbars');
    // var w = window.open('about:blank','Popup_Window','toolbar=0,scrollbars=0,location=0,statusbar=0,menubar=0,resizable=0,width=400,height=300,left = 312,top = 234');
    // e?.target = 'Popup_Window';
    setEmail("")
  }

  return (
    <main>
      <div id="about" className="row mb-50">
        <div className="xs:col-12">
          <div className="group group-vertical">
            <div className="group-item mt-15">
              <Image className="block mb-20 rad-50% w-128 animate__animated animate__bounceIn" width={128} height={128} src="https://avatars.githubusercontent.com/u/24269157?v=4" alt="Hi" title="Hi" />
            </div>
            <div className="group-item">
              <h1 className="mt-20 fs-hg fw-700 grey-text:200">Hello, I&apos;m Lucian.</h1>
            </div>
          </div>
          <div className="mt-20 fs-xl">
            I&apos;m a software developer based in Bucharest, Romania. I&apos;m the author of the css framework <a className="inline-block mh-5" target="_blank" href="https://github.com/fastcss/fastcss">Fastcss</a>.
            You can find me on several social networks including
            <a className="inline-block mh-5" target="_blank" href="https://www.linkedin.com/in/lucianene">LinkedIn</a>,
            <a className="inline-block mh-5" target="_blank" href="https://github.com/lucianene">GitHub</a> and
            <a className="inline-block mh-5" target="_blank" href="https://twitter.com/lucianene_">Twitter</a>.
            <div className="mt-30 fs-lg">
              <div className="">If you wanna say hi, here&apos;s my email: </div>
              <svg width="300" height="30" viewBox="0 0 300 30" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                <g transform="translate(0 0)">
                  <text transform="translate(0 25)" fill="#9e9e9e" fontSize="18" fontFamily="Roboto-Regular,Roboto" ><tspan x="0" y="0">ene.lucian@outlook.com</tspan></text>
                </g>
              </svg>
            </div>
            {/*
            <div className="mt-20 fs-lg ">
              <div>Or maybe you want to book a meeting?</div>
              - picker -
            </div>
            */}
            <div className="mt-20 fs-lg ">
              <div className="white-text">Request my resume: </div>
              <div className="mt-5">
                { !resumeRequested &&
                <form ref={resumeForm} onSubmit={resumeFormSubmitted} action="https://formspree.io/f/meqykgod" className="flex" method="POST">
                  <input 
                    onChange={(e) => setEmail(e.target.value)}
                    className="pv-5 ph-10 rad-3 b-0 mr-5 dimgrey-fill:900 white-text" style={{outline: 0}}
                    type="email"
                    name="email"
                    placeholder="Your email"
                  />
                  <button 
                    disabled={!!!email} 
                    onClick={downloadResume}
                    className={
                      "pv-5 ph-10 rad-3 b-0 white-text  fs-sm " +
                      (!email ? 'grey-fill grey-text:200' : 'dimgrey-fill:800 hover:dimgrey-fill:700 active:dimgrey-fill:900 cursor-pointer')
                    }>
                    Send resume
                  </button>
                </form>
                  ||
                <div className="fs-sm animate__animated animate__fadeIn">
                Thank you for downloading my CV! I appreciate your interest in my professional background and skill set. If you have any questions, would like more information, or wish to discuss potential opportunities, please don&apos;t hesitate to get in touch. 
                </div>
                }
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*
      <div className="row mt-30">
        <div className="xs:col-12">
          <h2 id="projects" className="fs-xxl grey-text:200">Ideas</h2>
          <div className="mt-10 fs-lg grey-text">
            <ol>
              <li>Add video introduction?</li>
              <li>Use cheap server to host instead of github pages</li>
              <li>Add photos to projects or make a photo gallery</li>
              <li>Add analytics, including visitors counter</li>
              <li>Add tech stack with icons maybe</li>
              <li>Create a linkedin post after the portfolio is done</li>
            </ol>
          </div>
        </div>
      </div>
      */}
      <div className="row mt-30">
        <div className="xs:col-12">
          <h2 id="skills" className="fs-xxl grey-text:200">Skills</h2>
          <div className="pl-15 ml-15 mv-5 bl-2 blue-border:900 fs-sm">
            <ul>
              <li>15%: Basic Awareness. I am familiar with the basic concepts and have a foundational understanding. While I may need guidance to perform tasks, I have the ability to learn and apply new information in this area.</li>
              <li>100%: Expert-level proficiency. I possess comprehensive knowledge and extensive experience, enabling me to innovate, solve complex problems, and lead projects or build solutions from conception to completion in this area.</li>
            </ul>
          </div>
          <div className="mv-30 fs-lg grey-text">
            <h3 className="mb-15">Software Development</h3>
            <div className="fs-xl">
            {skills.map((item, index) => 
              <div key={index} className="flex pv-5 hover:white-text" style={{ alignItems: 'center' }}>
                <div className="flex" style={{ width: '25%' }}><i className={item.icon} /> <span className="fs-sm pl-10">{item.label}</span></div>
                <div className="flex" style={{ width: '75%' }}>
                  <div style={{ height: 5, width: item.percent }} className="blue-fill"></div>
                </div>
              </div>
            )}
            </div>
          </div>
          <div className="mv-30 fs-lg grey-text">
            <h3 className="mb-15">Tools</h3>
            <div className="fs-xl">
            {tools.map((item, index) => 
              <div key={index} className="flex pv-5 hover:white-text" style={{ alignItems: 'center' }}>
                <div className="flex" style={{ width: '25%' }}><i className={item.icon} /> <span className="fs-sm pl-10">{item.label}</span></div>
                <div className="flex" style={{ width: '75%' }}>
                  <div style={{ height: 5, width: item.percent }} className="blue-fill"></div>
                </div>
              </div>
            )}
            </div>
          </div>
          <div className="mv-30 fs-lg grey-text">
            <h3 className="mb-15">Certifications</h3>
            <div className="fs-sm">
              @TODO: add files to download
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-30">
        <div className="xs:col-12">
          <h2 id="projects" className="fs-xxl grey-text:200">Projects</h2>
          <div className="mt-10 fs-lg grey-text">
            <div className="red-text fs-xxl">@WIP</div>
          </div>
        </div>
      </div>
      <div className="row mt-30">
        <div className="xs:col-12">
          <h2 id="articles" className="fs-xxl grey-text:200">Articles</h2>
          <div id="articles" className="mt-10 fs-lg">
            {articles.map((article, index) => <div key={index}>
            <Link className="block mb-5" href={article.link}>{article.label}</Link>
            </div>)}
          </div>
        </div>
      </div>
    </main>
  )
}

HomePage.getLayout = function getLayout(page: ReactElement) {
  return (
    <DefaultLayout>{page}</DefaultLayout>
  );
}
