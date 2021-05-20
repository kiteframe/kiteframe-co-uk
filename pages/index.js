import Layout from "../components/layout";
import Slider from "react-slick";
import Head from "next/head";
import {
  ChevronDoubleDownIcon,
  ChevronDoubleRightIcon,
} from "@heroicons/react/outline";

const sectionPaddingClasses = "pt-20 md:pt-28 pb-24 md:pb-36";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Software Developers | KiteFrame</title>
        <meta
          name="description"
          content="KiteFrame is a London-based software agency without the baggage. We work closely with you to cut to the core of your problem, and build the solution to start solving it from iteration one."
        />
      </Head>

      <div className="container flex flex-wrap items-center mx-auto max-w-5xl px-4 pt-8 md:pt-14 pb-10 md:pb-16">
        <div className="flex flex-col justify-items-center text-center md:text-left w-full md:w-1/2 mb-10 md:mb-0">
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 leading-tight mb-6">
            Software development for businesses who want to move fast
          </h1>
          <p className="text-lg md:text-xl font-normal text-gray-900">
            KiteFrame is a London-based software agency without the baggage. We
            work closely with you to cut to the core of your problem, and write
            the code to start solving it from week one.
          </p>
        </div>

        <div className="w-full md:w-1/2 flex md:justify-end">
          <img
            src="humaaans-graphs.png"
            alt="Graphic of a person surrounded by chart imagery"
            className="max-w-sm w-2/5 md:w-3/5 mx-auto"
          />
        </div>
      </div>

      <div className={`bg-purple-600 px-4 ${sectionPaddingClasses}`}>
        <div className="container mx-auto text-white text-center space-y-6 md:space-y-8">
          <h2 className="text-2xl md:text-4xl font-bold">
            Delightful software, built to last
          </h2>
          <hr className="w-12 mx-auto border-2 border-white" />
          <div className="flex max-w-xl mx-auto text-center">
            <span className="text-lg md:text-xl">
              We build software engineering excellence into every line of code
              we write. This results in software that is a joy to use, and easy
              to maintain, allowing us to keep up pace of delivery while
              adapting or pivoting when requirements change.
            </span>
          </div>
        </div>
      </div>

      <div className={`bg-gray-200 ${sectionPaddingClasses}`}>
        <div className="container mx-auto px-10 text-gray-900">
          <h2 className="text-2xl md:text-4xl text-purple-800 font-bold mb-10 text-center">
            Working with us
          </h2>

          <div className="flex flex-wrap md:-mx-10">
            <ColumnWithArrow
              heading="Discovery"
              content="Together we'll gather a big picture idea of what your goals are and how best to tackle them."
            />

            <ColumnWithArrow
              heading="Development"
              content="We work in 1-2 week increments, always focussing on the next most valuable feature, and delivering each iteration iteration so that you can start using the software as part of your day-to-day ASAP."
            />

            <ColumnWithArrow
              heading="Maintenance"
              content="We can support your software going forwards, fixing issues or adding new features. Our suite of automated tests, will allow us to confidently change the software without fear of breaking anything."
              noArrow
            />
          </div>
        </div>
      </div>

      <div
        className={`container mx-auto max-w-6xl px-4 ${sectionPaddingClasses}`}
      >
        <div className="max-w-xl mx-auto text-center mb-16 md:mb-28">
          <h2 className="text-2xl md:text-4xl text-gray-900 font-bold mb-8">
            Meet the team
          </h2>
          <hr className="w-12 mx-auto border-2 border-gray-900" />
        </div>

        <div className="flex flex-wrap">
          <div className="w-full md:w-1/3 flex flex-col items-center md:px-10 text-center mb-14 md:mb-20 space-y-6">
            <div className="relative">
              <img
                src="tim.jpeg"
                alt="Tim Mortimer"
                className="w-40 lg:w-60 h-40 lg:h-60 rounded-full"
              />
              <div className="absolute top-0 w-40 lg:w-60 h-40 lg:h-60 rounded-full bg-gray-800 opacity-20" />
            </div>
            <span className="text-gray-900 text-xl">Tim Mortimer</span>
            <a
              href="https://www.linkedin.com/in/kiteframe-tim-mortimer/"
              className="w-10"
            >
              <img src="LI-In-Bug.png" alt="LinkedIn Icon" />
            </a>
            <span className="text-gray-900 text-sm">
              Founder and software developer
            </span>
          </div>

          <div className="w-full md:w-1/3 flex flex-col items-center md:px-10 text-center mb-14 md:mb-20 space-y-6">
            <div className="relative">
              <img
                src="joe.jpeg"
                alt="Joe Reed"
                className="w-40 lg:w-60 h-40 lg:h-60 rounded-full"
              />
              <div className="absolute top-0 w-40 lg:w-60 h-40 lg:h-60 rounded-full bg-gray-800 opacity-20" />
            </div>
            <span className="text-gray-900 text-xl">Joe Reed</span>
            <a
              href="https://www.linkedin.com/in/joe-reed-44a57592/"
              className="w-10"
            >
              <img src="LI-In-Bug.png" alt="LinkedIn Icon" />
            </a>
            <span className="text-gray-900 text-sm">
              Founder and software developer
            </span>
          </div>

          <div className="w-full md:w-1/3 flex flex-col items-center md:px-10 text-center mb-14 md:mb-20 space-y-6">
            <div className="relative">
              <img
                src="louis.jpeg"
                alt="Louis Smith"
                className="w-40 lg:w-60 h-40 lg:h-60 rounded-full"
              />
              <div className="absolute top-0 w-40 lg:w-60 h-40 lg:h-60 rounded-full bg-gray-800 opacity-20" />
            </div>
            <span className="text-gray-900 text-xl">Louis Smith</span>
            <a
              href="https://www.linkedin.com/in/louis-smith-221a30137/"
              className="w-10"
            >
              <img src="LI-In-Bug.png" alt="LinkedIn Icon" />
            </a>
            <span className="text-gray-900 text-sm">Software developer</span>
          </div>
        </div>
      </div>

      <div className={`bg-teal-400 ${sectionPaddingClasses}`}>
        <div className="container mx-auto text-white text-center space-y-8 md:space-y-12 px-4">
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900">
            Testimonials
          </h2>
          <hr className="w-12 mx-auto border-2 border-gray-900" />
          <Slider
            dots
            arrows={false}
            autoplay={true}
            autoplaySpeed={6000}
            className="pb-5"
          >
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-xl md:text-2xl font-normal text-gray-900 mb-8">
                &ldquo;I’ve worked with KiteFrame on multiple projects and have
                been really impressed with their attention to detail and
                business acumen. KiteFrame have been able to deliver on time and
                budget and offer guidance on managing projects long term which
                has been invaluable.&rdquo;
              </p>
              <span className="md:text-lg text-gray-900">
                Robert Chittock | robertchittock.co.uk
              </span>
            </div>
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-xl md:text-2xl font-normal text-gray-900 mb-8">
                &ldquo;I have had the pleasure of working with KiteFrame and I
                was really impressed with their professionalism. The software
                they delivered was thoroughly tested and they were an easy
                partner to work with.&rdquo;
              </p>
              <span className="md:text-lg text-gray-900">
                Fredrik Mäkilä | Takanoha Limited
              </span>
            </div>
          </Slider>
        </div>
      </div>

      <div className={`bg-gray-200 ${sectionPaddingClasses}`} id="contact-us">
        <div className="container mx-auto px-8 text-gray-900">
          <div className="max-w-xl mx-auto text-center">
            <div className="max-w-xl mx-auto text-center space-y-8 mb-8">
              <h2 className="text-2xl md:text-4xl text-purple-800 font-bold">
                Contact us
              </h2>
              <hr className="w-12 mx-auto border-2 border-purple-800" />
            </div>
            <p className="text-black-900 md:text-lg mb-8">
              contact@kiteframe.co.uk
            </p>
            <form
              className="w-3xl"
              name="contact"
              method="POST"
              netlify-honeypot="bot-field"
            >
              <div className="hidden">
                <input name="bot-field" />
              </div>
              <input type="hidden" name="form-name" value="contact" />
              <div className="flex">
                <label className="hidden" htmlFor="name">
                  Name
                </label>
                <input
                  className="w-full px-4 py-2 mb-4 font-light placeholder-gray-500 text-gray-900"
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Name"
                  required
                />
              </div>
              <div>
                <label className="hidden" htmlFor="email">
                  Email
                </label>
                <input
                  className="w-full px-4 py-2 mb-4 font-light placeholder-gray-500 text-gray-900"
                  type="text"
                  name="email"
                  id="email"
                  placeholder="Email"
                  required
                />
              </div>
              <div>
                <label className="hidden" htmlFor="subject">
                  Subject
                </label>
                <input
                  className="w-full px-4 py-2 mb-4 font-light placeholder-gray-500 text-gray-900"
                  type="text"
                  name="subject"
                  id="subject"
                  placeholder="Subject"
                  required
                />
              </div>
              <div>
                <label className="hidden" htmlFor="message">
                  Message
                </label>
                <textarea
                  className="w-full h-32 px-4 py-2 mb-4 font-light placeholder-gray-500 text-gray-900"
                  name="message"
                  id="message"
                  placeholder="Type your message here..."
                  required
                />
              </div>
              <div>
                <button
                  className="w-full px-4 py-2 bg-purple-700 hover:bg-purple-800 text-white font-medium"
                  type="submit"
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
}

function ColumnWithArrow({ noArrow = false, heading, content }) {
  return (
    <div className="flex flex-col md:flex-row items-center md:w-1/3 md:pl-10 text-center">
      <div className="flex flex-col md:mr-8">
        <h3 className="text-xl md:text-2xl text-purple-800 font-medium mb-2 md:mb-5">
          {heading}
        </h3>
        <p>{content}</p>
      </div>
      {noArrow ? (
        <div className="hidden md:block w-8 flex-shrink-0" />
      ) : (
        <>
          <ChevronDoubleRightIcon className="hidden md:block h-8 w-8 flex-shrink-0" />
          <ChevronDoubleDownIcon className="md:hidden h-8 w-8 my-8 flex-shrink-0" />
        </>
      )}
    </div>
  );
}
