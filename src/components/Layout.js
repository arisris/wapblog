import { useState } from "react"
import Link from "next/link"
import Head from "next/head"
import clsx from "clsx"
import PropTypes from "prop-types"
import { MenuIcon, XIcon, HomeIcon } from "@heroicons/react/solid"

function Layout({ children, withHero }) {
  const [toggled, toggle] = useState(false)
  return (
    <section className="font-sans absolute flex flex-col w-full h-full">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0" />
        <title>No Title</title>
      </Head>
      <header className="block bg-purple-800 text-white shadow-sm">
        <nav className="flex flex-col sm:flex-row justify-between sm:max-w-screen-lg m-auto">
          <div className="flex justify-between items-center bg-purple-800">
            <Link href="/">
              <a className="flex flex-row p-2 font-bold text-white hover:bg-purple-900">
                <HomeIcon className="w-6 h-6 mr-1" /> <span>Home</span>
              </a>
            </Link>
            <div
              className="block sm:hidden p-2 font-bold hover:bg-purple-900 select-none"
              onClick={() => toggle(!toggled)}
              role="button">
              {toggled ? <XIcon className="2-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </div>
          </div>
          <div
            className={clsx(
              {
                "sm:flex": toggled,
                hidden: !toggled,
              },
              "sm:flex flex-col sm:flex-row border-t border-purple-900"
            )}>
            <Link href="/projects">
              <a className="block p-2 hover:bg-purple-900">My Projects</a>
            </Link>
            <Link href="/about-me">
              <a className="block p-2 hover:bg-purple-900">About Me</a>
            </Link>
            <Link href="/contact">
              <a className="block p-2 hover:bg-purple-900">Contact</a>
            </Link>
          </div>
        </nav>
        {withHero ? (
          <div className="flex items-center justify-center px-2 py-4 sm:py-5 border-t border-purple-900 sm:border-0">
            <div className="flex flex-col items-center">
              <h1 className="text-4xl">{withHero.title}</h1>
              <p className="text-md">{withHero.subtitle}</p>
            </div>
          </div>
        ) : (
          ""
        )}
      </header>
      <main className="flex-auto">
        <div className="sm:max-w-screen-lg p-2 m-auto">{children}</div>
      </main>
      <footer className="text-center p-2 mt-4">
        <div className="italic text-md">
          <div className="ml-1">
            Made With{" "}
            <a href="https://nextjs.org" target="__blank" className="text-purple-900">
              Next
            </a>{" "}
            &amp;{" "}
            <a href="https://tailwindcss.com" target="__blank" className="text-purple-900">
              Tailwind
            </a>
          </div>
          <span>&copy; {new Date().getFullYear()}</span>
          <Link href="/">
            <a className="ml-1 text-purple-900">Aris Riswanto</a>
          </Link>
        </div>
      </footer>
    </section>
  )
}

Layout.propTypes = {
  withHero: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
  }),
}

export default Layout
