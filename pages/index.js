import Layout from "../components/layout";
import Slider from "react-slick";
import Head from "next/head";
import {
  ChevronDoubleDownIcon,
  ChevronDoubleRightIcon,
} from "@heroicons/react/outline";

const sectionPaddingClasses = "pt-20 md:pt-28 pb-24 md:pb-36";

export default function Home() {
  const description =
    "KiteFrame is a London-based software agency without the baggage. We work closely with you to cut to the core of your problem, and write the code to start solving it from week one.";

  return (
    <Layout>
      <Head>
        <title>Software Developers | KiteFrame</title>
        <meta name="description" content={description} />
      </Head>

      <div className="container flex flex-wrap items-center mx-auto max-w-5xl px-4 pt-8 md:pt-14 pb-10 md:pb-16">
        <div className="flex flex-col justify-items-center text-center md:text-left w-full md:w-1/2 mb-10 md:mb-0">
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 leading-tight mb-6">
            Software development for businesses who want to move fast
          </h1>
          <p className="text-lg md:text-xl font-normal text-gray-900">
            {description}
          </p>
        </div>

        <div className="w-full md:w-1/2 flex md:justify-end">
          <div className="max-w-sm w-2/5 md:w-3/5 mx-auto">
            <img
              src="humaaans-graphs.png"
              alt="Graphic of a person surrounded by chart imagery"
            />
          </div>
        </div>
      </div>

      <div className={`bg-teal-400 px-4 ${sectionPaddingClasses}`}>
        <div className="container mx-auto text-center space-y-6 md:space-y-8">
          <h2 className="text-2xl md:text-4xl font-bold">
            Delightful software, built to last
          </h2>
          <hr className="w-12 mx-auto border-2 border-gray-900" />
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

      <div className={`${sectionPaddingClasses}`}>
        <h2 className="text-2xl md:text-4xl font-bold mb-10 text-center">
          Projects
        </h2>
        <div className="flex flex-wrap">
          <WorkCard
            heading="Find my Nightline"
            subheading="Nightline Association"
            logo={() => (
              <img
                src="nightline-logo.png"
                className="h-10"
                alt="Nightline Logo"
              />
            )}
          >
            <p>
              Leveraging AWS S3, Lambda and Google sheets to allow service users
              to easily find their nearest Nightline.
            </p>
          </WorkCard>

          <WorkCard
            heading="xTrade Broker Portal"
            subheading="HyperionX"
            logo={() => (
              <img
                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNzQuMDU3IiBoZWlnaHQ9IjE3NC42ODIiIHZpZXdCb3g9IjAgMCAyMDUuNTQzIDEzMS4wMTEiPjxwYXRoIGQ9Ik0xNTEuMjY5IDEwMy42MmwtOS4zMTUtMTUgOS45NTgtMTUuOTQ5TDE3MS4yIDEwMy42MnptLTI3LjY3NSAwaC0xOS45MzNsNDcuNjQ2LTc2LjIzNEgxNzEuMnptLTI1LjA2Ni0uMTkySDgxLjUxOVY3My42NEg1MS4yNDZ2MjkuNzg3aC0xNi45VjI3LjU3OWgxNi45djI5LjE1OWgzMC4yNzNWMjcuNTc5aDE3LjAwOXptMjUuMDI0LTc2LjA0Mmw5LjI2OCAxNS4wODktOS45NTUgMTUuOTI1LTE5LjItMzEuMDE4ek0xNDAuMDM0IDBINjUuNTA5YTY1LjUwNiA2NS41MDYgMCAxMDAgMTMxLjAxMWg3NC41MjVhNjUuNTA2IDY1LjUwNiAwIDEwMC0xMzEuMDExIiBmaWxsPSIjMTUxYTJjIi8+PC9zdmc+"
                className="h-10"
                alt="HX Logo"
              />
            )}
          >
            <p>
              Working with HyperionX's team to build a broker administration
              platform from the ground up.
            </p>
          </WorkCard>

          <WorkCard
            heading="Promotions Platform"
            subheading="Insyt"
            logo={() => (
              <img src="insyt-logo.png" className="h-5 lg:h-8" alt="Insyt Logo" />
            )}
          >
            <p>
              Leading development of a custom promotions platform, with the
              goals of better UX and load time, and even easier clients and
              promotion onboarding.
            </p>
          </WorkCard>

          <WorkCard
            heading="Underwriter Admin System"
            subheading="Uncharted Partners"
            logo={() => (
              <img
                src="uncharted-logo.png"
                className="h-10"
                alt="Uncharted Logo"
              />
            )}
          >
            <p>
              Working in a fast paced and agile team to develop a bespoke
              platform for underwriters to review and manage risks.
            </p>
          </WorkCard>

          <WorkCard
            heading="Auditing System"
            subheading="Keoda"
            logo={() => (
              <img src="keoda-logo.jpeg" className="h-5 lg:h-8" alt="Keoda Logo" />
            )}
          >
            <p>
              Working to Keoda to project manage development of auditing
              software for a travel sustainability company.
            </p>
          </WorkCard>

          <WorkCard
            heading="Customer Service Portal"
            subheading="Popsa"
            logo={() => (
              <img src="popsa-logo.svg" className="h-10" alt="Popsa Logo" />
            )}
          >
            <p>
              Development of reusable UI components to interact with an internal
              internal customer service API.
            </p>
          </WorkCard>
        </div>
      </div>

      <div className={`bg-purple-600 text-white pt-20 md:pt-0`}>
        <div className="flex flex-wrap items-center">
          <div className="md:w-1/2 px-10 md:px-16 mb-10 md:mb-0 py-5">
            <p className="text-xs tracking-widest uppercase font-mono font-bold mb-1">
              Case Study
            </p>
            <h2 className="text-2xl md:text-4xl font-bold mb-2">
              Fluxonomy: RAID Log Management
            </h2>
            <a
              href="https://fluxonomy.com"
              target="_blank"
              rel="noreferrer"
              className="italic underline inline-block mb-4"
            >
              fluxonomy.com
            </a>
            <p className="pr-10 mb-2">
              Our SaaS product for project managers, built to take the pain out
              of risk management (a classically spreadsheet-based activity.)
            </p>
            <p className="mb-2">
              A fast and responsive React SPA sits in front of a Java and Spring
              Boot API, and the application stack is deployed and hosted using
              AWS services.
            </p>
          </div>

          <div className="md:w-1/2">
            <img
              className="shadow-lg"
              src="fluxonomy-screenshot.png"
              alt="A screenshot of the Fluxonomy application, displaying an open Issue with details and timeline of updates"
            />
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
              content="We work in 1-2 week increments, always focussing on the next most valuable feature, and delivering each iteration so that you can start using the software as part of your day-to-day ASAP."
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
            Don't just take our word for it!
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
            <a
              href="mailto:contact@kiteframe.co.uk"
              className="hover:underline inline-block text-black-900 md:text-lg mb-8"
            >
              contact@kiteframe.co.uk
            </a>
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

function WorkCard({ heading, subheading, logo, children }) {
  return (
    <div className="px-3 lg:px-8 w-full md:w-1/3 mb-6 lg:mb-16 flex">
      <div className="px-10 rounded-lg shadow-lg border-2 border-purple-600 py-5 w-full">
        <div className="flex justify-between items-center mb-2">
          <div>
            <h3 className="font-semibold text-xl md:text-2xl">{heading}</h3>
            <p className="italic">{subheading}</p>
          </div>
          {logo()}
        </div>
        {children}
      </div>
    </div>
  );
}
