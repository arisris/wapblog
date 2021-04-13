import { useState } from "react";
import Link from "next/link";
import Head from "next/head";
import cn from "classnames";

export default function Layout({ children, withHero }) {
  const [toggled, toggle] = useState(false);
  return (
    <section className="sans-serif absolute flex flex-column w-100 h-100">
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, minimum-scale=1.0"
        />
        <title>No Title</title>
      </Head>
      <header className="db bg-purple white shadow-1">
        <nav className="flex flex-column flex-row-ns justify-between mw8-ns ml-auto mr-auto">
          <div className="flex justify-between items-center white bg-purple">
            <Link href="/">
              <a className="db pa2 no-underline b white hover-bg-black-10">
                Home
              </a>
            </Link>
            <div
              className="db dn-ns pa2 no-underline b white hover-bg-black-10"
              style={{ userSelect: "none" }}
              onClick={() => toggle(!toggled)}
              role="button"
            >
              Menu
            </div>
          </div>
          <div
            className={cn(
              {
                "flex-ns": toggled,
                dn: !toggled
              },
              "flex-ns flex-column flex-row-ns bt bw0-ns b--black-10"
            )}
          >
            <Link href="/posts">
              <a className="db pa2 no-underline white hover-bg-black-10">
                Blog
              </a>
            </Link>
            <Link href="/projects">
              <a className="db pa2 no-underline white hover-bg-black-10">
                My Project
              </a>
            </Link>
            <Link href="/about-me">
              <a className="db pa2 no-underline white hover-bg-black-10">
                About Me
              </a>
            </Link>
            <Link href="/contact">
              <a className="db pa2 no-underline white hover-bg-black-10">
                Contact
              </a>
            </Link>
          </div>
        </nav>
        {withHero ? (
          <div className="flex items-center justify-center ph2 pv4 pv5-ns bt b--black-10 bg-black-10">
            <div className="flex flex-column items-center">
              <h1 className="ma0 pa0 tracked">Hello World</h1>
              <p className="ma0 pa0 i tracked-mega">This is subtitle</p>
            </div>
          </div>
        ) : (
          ""
        )}
      </header>
      <main className="flex-auto">
        <div className="mw8-ns pa2 mr-auto ml-auto">{children}</div>
      </main>
      <footer className="flex justify-center bg-black-05 pa2 mt4">
        <div className="i f6">
          <span>&copy; {new Date().getFullYear()}</span>
          <Link href="/">
            <a className="ml1 purple">Aris Riswanto</a>
          </Link>
        </div>
      </footer>
    </section>
  );
}
