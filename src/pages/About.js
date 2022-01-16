import React from "react";

const About = () => {
  return (
    <>
      <main
        itemScope=""
        itemProp="mainContentOfPage"
        className="Layout-module--content--3KiRz"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <section className="section">
          <header className="header">
            <h1 className="h1">About Me</h1>

            <ul className="btn">
              <ul style={{ margin: "0 5px" }}>
                <a
                  href="https://twitter.com/BishtShreshthav"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button
                    style={{
                      color: "white",
                      background: "#3498ff",
                      borderRadius: "12px",
                    }}
                    className="bttn"
                  >
                    <i className="fa fa-twitter"></i>Twitter
                  </button>
                </a>
              </ul>
              <ul style={{ margin: "0 5px" }}>
                <a
                  href="https://www.instagram.com/shreshthav_bisht"
                  target="_blank"
                  rel="noopener noreferrer"
                  className=""
                >
                  <button
                    style={{
                      color: "white",
                      background: "#df3941",
                      borderRadius: "12px",
                    }}
                    className="bttn mx-2"
                  >
                    <i className="fa fa-instagram mx-2 instagram "></i>
                    Follow on Instagram
                  </button>
                </a>
              </ul>
              <ul style={{ margin: "0 5px" }}>
                <a
                  href="https://github.com/voidGlitch"
                  target="_blank"
                  rel="noopener noreferrer"
                  className=""
                >
                  <button
                    style={{
                      color: "white",
                      background: "#3f4144",
                      borderRadius: "12px",
                    }}
                    className="bttn"
                  >
                    <i className="fa fa-github"></i>GitHub
                  </button>
                </a>
              </ul>
            </ul>
          </header>

          <article className="ptag">
            <p>
              Hi, it's Shreshthav. I am a Indian software engineer and MERN
              Developer from Delhi/Indian. First of all, thank you for reading
              my blog. It's such a pleasure to have you here!
            </p>
            <p>
              A couple of words about my professional life: I am a Indian
              software and web developer dedicated to learning JavaScript. After
              obtaining my Bachlor's Degree in computer science, I gained
              experience from the startup world where I used JavaScript
              intensively during both my professional life and spare time. For a
              few years, I Learned javascript and its framework like React js
              and angular , developing large-scale JavaScript applications,
              which eventually led to a desire to learn more others about these
              topics.
            </p>
            <p>
              During my time as a developer in India, I read articles about web
              development on my website. I received great knowledge from people
              thoughts and ideas which allowed me to improve my writing coding
              style. Article after article, I grew my ability to code. I find it
              it fulfilling to see myself strive by taking clear objectives
              about web development
            </p>
            <p>
              Currently, I am a self-employed developer creating large-scale
              JavaScript applications to improve my skills as good as possible.
              You can find more information about me, ways to support me, and
              share your work with me in the next sections.
            </p>
            <h2
              className="mt-3"
              id="values-and-mission"
              style={{ position: "relative" }}
            >
              Values and Mission
            </h2>
            <p className="mt-2">
              I try my best to have a positive impact on the world. 99% of my
              code is open source for everyone on{" "}
              <a
                href="https://github.com/voidGlitch"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              . Every time I build a product/service for myself, I immediately
              think about how to open source it for others. Even though I open
              source my work and offer lots of learning material for free, not
              everyone is able to make use of it
            </p>

            <h2
              className="mt-2"
              id="passions-beyond-software-development"
              style={{ position: "relative" }}
            >
              Passions beyond Software Development
            </h2>
            <p className="mt-2">
              Even though I do a lot of programming in my professional and spare
              time, there are other things I treasure too. I am an{" "}
              <a
                href="https://www.goodreads.com/author/show/16218990.Robin_Wieruch"
                target="_blank"
                rel="noopener noreferrer"
              >
                avid reader
              </a>
              , but I’m always struggling to memorize my learnings. I guess,
              that's why I started to write down my notes of books I enjoyed to
              read. But it's difficult to keep up with all the books. Nowadays I
              often encourage people to read more, because it's such a
              fulfilling and meaningful activity.
            </p>
            <ul>
              <li className="Item-module--item--mjocX">
                <a
                  href="http://amzn.to/2inl3w8"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Flow
                </a>{" "}
                by Mihaly Csikszentmihalyi and{" "}
                <a
                  href="http://amzn.to/2AvNLTG"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Deep Work
                </a>{" "}
                by Cal Newport (
                <a itemProp="url" href="/lessons-learned-deep-work-flow/">
                  notes
                </a>
                )
              </li>
              <li className="Item-module--item--mjocX">
                <a
                  href="http://amzn.to/2olhgRv"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Give and Take
                </a>{" "}
                by Adam Grant (
                <a itemProp="url" href="/lessons-learned-give-and-take/">
                  notes
                </a>
                )
              </li>
              <li className="Item-module--item--mjocX">
                <a
                  href="http://amzn.to/2jR19Kj"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  The One Thing
                </a>{" "}
                by Gary Keller
              </li>
              <li className="Item-module--item--mjocX">
                <a
                  href="http://amzn.to/2AsuCUP"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  The Power of Habit
                </a>{" "}
                by Charles Duhigg
              </li>
              <li className="Item-module--item--mjocX">
                <a
                  href="http://amzn.to/2AsoDzh"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  On Writing Well
                </a>{" "}
                by William Zinsser{" "}
                <a
                  href="https://www.robinwieruch.de/lessons-learned-on-writing-well/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  notes
                </a>
              </li>
            </ul>
            <h1 className="mt-3 text-center">This is about app</h1>

            <p className="mt-2" style={{ fontSize: "20px" }}>
              I have develop this app so that people can add there daily blog
              and memories they can read later on this app has all the feature
              which are used in our day to day live it has login ,signup and
              logout features.It has secure enviroment and your notes and blogs
              will be secured in the website itself. It is based on CRUD
              operation (create,read,update ,delete) and it using MERN stack
              (mongo,express.js,react,node.js).
            </p>
          </article>
        </section>
      </main>
    </>
  );
};

export default About;
