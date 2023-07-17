import Head from 'next/head'
import About from '../components/About'
import Contact from '../components/contact'
import Main from '../components/main'
import Projects from '../components/projects'
import Skills from '../components/skills'


export default function Home() {
  return (
    <div>
      <Head>
        <title>Shruti | Front-End Developer</title>
        <meta name="description" content="I’m a front-end web developer specializing in building (and occasionally designing) exceptional digital experiences." />
        <link rel="icon" href="/fav.png" />
      </Head>
    <Main />
    <About />
    <Skills />
    <Projects />
    <Contact />
    </div>
  )
}
