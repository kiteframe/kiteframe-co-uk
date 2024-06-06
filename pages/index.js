import Layout from "../components/layout";
import Slider from "react-slick";
import Head from "next/head";

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

      <div className="container mx-auto flex max-w-5xl flex-wrap items-center px-4 pb-10 pt-8 md:pb-16 md:pt-14">
        <div className="mb-10 flex w-full flex-col justify-items-center text-center md:mb-0 md:w-1/2 md:text-left">
          <h1 className="mb-4 mb-6 text-3xl font-extrabold leading-tight text-gray-900 md:text-4xl">
            Software development for businesses who want to move fast
          </h1>
          <p className="text-lg font-normal text-gray-900 md:text-xl">
            {description}
          </p>
        </div>

        <div className="flex w-full md:w-1/2 md:justify-end">
          <div className="mx-auto w-2/5 max-w-sm md:w-3/5">
            <img
              src="humaaans-graphs.png"
              alt="Graphic of a person surrounded by chart imagery"
            />
          </div>
        </div>
      </div>

      <div className={`bg-teal-400 px-4 ${sectionPaddingClasses}`}>
        <div className="container mx-auto space-y-6 text-center md:space-y-8">
          <h2 className="text-2xl font-bold md:text-4xl">
            Delightful software, built to last
          </h2>
          <hr className="mx-auto w-12 border-2 border-gray-900" />
          <div className="mx-auto flex max-w-xl text-center">
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
        <h2 className="mb-10 text-center text-2xl font-bold md:text-4xl">
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
              Working with HyperionX&apos;s team to build a broker
              administration platform from the ground up.
            </p>
          </WorkCard>

          <WorkCard
            heading="Promotions Platform"
            subheading="Insyt"
            logo={() => (
              <img
                src="insyt-logo.png"
                className="h-5 lg:h-8"
                alt="Insyt Logo"
              />
            )}
          >
            <p>
              Leading development of a custom promotions platform, with the
              goals of better UX and load time, and even easier client and
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
              <img
                src="keoda-logo.jpeg"
                className="h-5 lg:h-8"
                alt="Keoda Logo"
              />
            )}
          >
            <p>
              Working with Keoda to project manage development of auditing
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
              customer service API.
            </p>
          </WorkCard>
        </div>
      </div>

      <div className={`bg-purple-600 pt-20 text-white md:pt-0`}>
        <div className="flex flex-wrap items-center">
          <div className="mb-10 px-10 py-5 md:mb-0 md:w-1/2 md:px-16">
            <p className="mb-1 font-mono text-xs font-bold uppercase tracking-widest">
              Case Study
            </p>
            <h2 className="mb-2 text-2xl font-bold md:text-4xl">
              Fluxonomy: RAID Log Management
            </h2>
            <a
              href="https://fluxonomy.com"
              target="_blank"
              rel="noreferrer"
              className="mb-4 inline-block italic underline"
            >
              fluxonomy.com
            </a>
            <p className="mb-2 pr-10">
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
          <div className="mx-auto mb-20 max-w-xl text-center md:mb-28">
            <h2 className="mb-4 text-2xl font-bold text-purple-800 md:text-4xl">
              What we do
            </h2>
            <p className="text-lg md:text-xl">
              KiteFrame use a set of practices and principles to build complex
              internal business systems and user-facing products in a fast yet
              maintainable way - continuously delivering bug-free code with
              confidence.
            </p>
          </div>

          <div className="flex flex-wrap md:-mx-10">
            <div className="mb-10 text-center md:mb-20 md:w-1/3 md:px-10">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  version="1.1"
                  x="0px"
                  y="0px"
                  viewBox="0 0 34 42.5"
                  enableBackground="new 0 0 34 34"
                  className="mx-auto w-16"
                >
                  <g>
                    <path d="M30,17.01v5h-3v-3.5h-8v3.5h-3v-3.5H7v3.5H4v-5c0-0.83,0.67-1.5,1.5-1.5H16v-3.52h3v3.52h9.5   C29.33,15.51,30,16.18,30,17.01z" />
                    <path d="M10,25.01v5c0,0.82-0.67,1.5-1.5,1.5h-6c-0.83,0-1.5-0.68-1.5-1.5v-5c0-0.83,0.67-1.5,1.5-1.5h6   C9.33,23.51,10,24.18,10,25.01z" />
                    <path d="M22,25.01v5c0,0.82-0.67,1.5-1.5,1.5h-6c-0.83,0-1.5-0.68-1.5-1.5v-5c0-0.83,0.67-1.5,1.5-1.5h6   C21.33,23.51,22,24.18,22,25.01z" />
                    <path d="M33,25.01v5c0,0.82-0.67,1.5-1.5,1.5h-6c-0.83,0-1.5-0.68-1.5-1.5v-5c0-0.83,0.67-1.5,1.5-1.5h6   C32.33,23.51,33,24.18,33,25.01z" />
                    <path d="M22,3.99v5c0,0.83-0.67,1.5-1.5,1.5h-6c-0.83,0-1.5-0.67-1.5-1.5v-5c0-0.83,0.67-1.5,1.5-1.5h6   C21.33,2.49,22,3.16,22,3.99z" />
                  </g>
                </svg>
                <h3 className="pb-4 text-xl font-medium text-purple-800 md:pb-8 md:text-2xl">
                  Domain-Driven Design
                </h3>
                <p>
                  We believe that to build effective software in complex
                  domains, tight collaboration is required between developers
                  and the business. Say goodbye to your business experts having
                  one context and your developers having another.
                </p>
              </div>
            </div>

            <div className="mb-10 text-center md:mb-20 md:w-1/3 md:px-10">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  version="1.1"
                  viewBox="0 0 100 125"
                  x="0px"
                  y="0px"
                  className="mx-auto w-16"
                >
                  <path
                    style={{
                      direction: "ltr",
                      enableBackground: "accumulate",
                      baselineShift: "baseline",
                      blockProgression: "tb",
                      textIndent: 0,
                      color: "#000000",
                      textTransform: "none",
                    }}
                    fill="#000"
                    d="M51,5.125c-11.9,0.1631-23.488,5.532-31.312,15.281-0.244-0.012-0.474-0.031-0.719-0.031-7.686,0-13.969,6.283-13.969,13.969,0,4.649,2.2963,8.7705,5.8125,11.312-0.096,13.406,6.2248,26.59,18.219,34.469,2.869,1.885,5.9162,3.2492,9.0312,4.2812,1.568,5.997,7.028,10.469,13.5,10.469,6.508,0,11.997-4.5155,13.531-10.562,8.078-2.819,15.362-8.0768,20.438-15.719l5.594,3.687,0.656-12.781,0.6875-12.75-11.375,5.8125-11.375,5.7812,6,3.9375c-3.286,4.89-7.8128,8.382-12.844,10.5-2.54-3.531-6.6515-5.8438-11.312-5.8438-4.666,0-8.836,2.3048-11.375,5.8438-1.613-0.64-3.2078-1.4132-4.7188-2.4062-8.003-5.257-12.528-13.677-13.094-22.5,6.053-1.529,10.562-7.0192,10.562-13.531,0-3.059-1.0055-5.8805-2.6875-8.1875,9.529-10.263,25.163-12.553,37.281-4.5938,0.113,0.074,0.2035,0.172,0.3125,0.25-0.503,1.438-0.78125,2.9898-0.78125,4.5938,0,7.686,6.2828,13.969,13.969,13.969,7.687,0,13.97-6.283,13.97-13.969s-6.283-13.968-13.969-13.968c-1.768,0-3.471,0.332-5.031,0.937-0.664-0.547-1.338-1.056-2.062-1.531-7.056-4.6348-15.058-6.827-22.938-6.719zm30.031,11.969c5.17,0,9.3125,4.1425,9.3125,9.3125s-4.1425,9.3125-9.3125,9.3125-9.3125-4.1425-9.3125-9.3125,4.1425-9.3125,9.3125-9.3125zm-4.1875,3.3125-1.6562,1.625,4.125,4.125-4.125,4.125,1.6562,1.625,4.125-4.125,4.0938,4.125,1.6562-1.625-4.125-4.125,4.125-4.125-1.6562-1.625-4.0938,4.125zm-57.875,4.625c5.17,0,9.3125,4.1425,9.3125,9.3125s-4.1425,9.3125-9.3125,9.3125-9.3125-4.1425-9.3125-9.3125,4.1425-9.3125,9.3125-9.3125zm5.3438,4.5-6.5,6.5-3.8438-3.8438-1.6562,1.6562,5.5,5.4688,1.3125-1.2812,0.34375-0.375,6.5-6.4688zm27.25,42.062c5.17,0,9.3125,4.1425,9.3125,9.3125s-4.1425,9.3125-9.3125,9.3125c-5.169,0-9.3125-4.1425-9.3125-9.3125s4.1435-9.3125,9.3125-9.3125zm-7.0938,5.0625,0,1,11,0,0-1zm2,2,0,1,9,0,0-1zm9.4852-0.34426c0.32242,1.3699,0.54332,2.2045,0.875,3.5312l0.15625-0.5625c0.39964,0.91191,0.78798,2.1234,0.79608,2.563,0.0062,0.33511-0.08504,0.51018-0.15625,0.59375s-0.14246,0.20551-0.34375,0.21019l0.03125,1c0.40898-0.0095,0.81876-0.2625,1.0938-0.58519,0.27499-0.3227,0.38416-0.75374,0.375-1.25-0.01308-0.70931-0.46414-2.0835-0.98358-3.188l0.78125,0.21875c-1.0702-1.0262-1.6218-1.521-2.625-2.5312zm-11.485,2.3443,0,1,10,0,0-1zm0,2,0,1,3,0,0-1zm4,0,0,1,8,0,0-1zm-2,2,0,1,10,0,0-1zm2,2,0,1,8,0,0-1z"
                  />
                </svg>
                <h3 className="pb-4 text-xl font-medium text-purple-800 md:pb-8 md:text-2xl">
                  Test-Driven Development
                </h3>
                <p>
                  In order to achieve to fast flow, it is absolutely essential
                  that the development team have access to a suite of fast tests
                  that are able to verify the behaviour of the system.
                </p>
              </div>
            </div>

            <div className="mb-10 text-center md:mb-20 md:w-1/3 md:px-10">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  version="1.1"
                  x="0px"
                  y="0px"
                  viewBox="0 0 100 125"
                  enableBackground="new 0 0 100 100"
                  className="mx-auto w-16"
                >
                  <path d="M82.4,36.1c0-4.4-0.9-8.7-2.6-12.7c-1.6-3.9-4-7.4-7-10.4c-0.5-0.5-1-0.9-1.4-1.4v5.2h-5.6c5.5,4.6,9.1,11.5,9.1,19.3  c0,4.9-1.4,9.5-3.9,13.4v6.4h4.8c1.6-2.2,3-4.5,4.1-7C81.6,44.8,82.4,40.5,82.4,36.1z" />
                  <path d="M17.9,36.1c0,4.4,0.9,8.7,2.6,12.7c1.6,3.9,4,7.4,7,10.4c0.5,0.5,1,0.9,1.4,1.4c0,0,0-11.7,0-11.8c-2.2-3.7-3.4-8-3.4-12.6  c0-4.9,1.4-9.5,3.9-13.4v-6.4h-4.8c-1.6,2.2-3,4.5-4.1,7C18.8,27.4,17.9,31.7,17.9,36.1z" />
                  <path d="M50.3,3.9c-4.4,0-8.7,0.9-12.7,2.6c-3.9,1.6-7.4,4-10.4,7c-0.5,0.5-0.9,1-1.4,1.4H31v5.6c4.6-5.5,11.5-9.1,19.3-9.1  c4.9,0,9.5,1.4,13.4,3.9H70v-4.8c-2.2-1.6-4.5-3-7-4.1C58.9,4.8,54.7,3.9,50.3,3.9z" />
                  <path d="M32.6,39.2l17.4,10l17.5-10.1L50.2,29.1L32.6,39.2z M69.3,42L51.8,52v20.2l17.5-10.1V42z M31.1,42.1v20.1l17.5,10.1V52.2  L31.1,42.1z" />
                  <polygon points="57.2,71.3 50.1,75.5 43.2,71.3 43.2,79 35.3,79 50.2,93.9 65,79 57.2,79 " />
                </svg>
                <h3 className="pb-4 text-xl font-medium text-purple-800 md:pb-8 md:text-2xl">
                  Continuous Delivery
                </h3>
                <p>
                  Releasing relatively small increments more often reduces the
                  risk of any one release, minimises the business impact of
                  failed experiments and enables the acceleration of the
                  development team.
                </p>
              </div>
            </div>

            <div className="mb-10 text-center md:mb-20 md:w-1/3 md:px-10">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  version="1.1"
                  x="0px"
                  y="0px"
                  viewBox="0 0 50 62.5"
                  enableBackground="new 0 0 50 50"
                  className="mx-auto w-16"
                >
                  <g>
                    <path d="M35.59395,11.6414V7.9142c0-0.8909-1.0772-1.3371-1.70709-0.7071l-6.58591,6.5858c-0.3905,0.3905-0.3905,1.0236,0,1.4142   l6.58591,6.5858c0.62989,0.63,1.70709,0.1838,1.70709-0.7071V17.368c4.1673,0.051,7.5423,3.4527,7.5423,7.6319   c0,4.211-3.4253,7.6368-7.6362,7.6368c-4.211,0-7.6363-3.4258-7.6363-7.6368c0-7.3691-5.9951-13.3632-13.3637-13.3632   c-7.3687,0-13.3638,5.9941-13.3638,13.3632c0,7.3165,5.9114,13.2705,13.2077,13.3554v3.7305c0,0.8909,1.0771,1.3371,1.707,0.7071   l6.58591-6.5858c0.39049-0.3906,0.39049-1.0237,0-1.4142l-6.58591-6.5858c-0.6299-0.63-1.707-0.1838-1.707,0.7071v3.7145   c-4.1385-0.0842-7.4802-3.4705-7.4802-7.6288c0-4.2109,3.4253-7.6367,7.6363-7.6367c4.2109,0,7.6362,3.4258,7.6362,7.6367   c0,7.3692,5.9951,13.3633,13.3638,13.3633c7.3686,0,13.3637-5.9941,13.3637-13.3633   C48.86375,17.6625,42.91905,11.6926,35.59395,11.6414z" />
                    <path d="M35.59395,11.6414V7.9142c0-0.8909-1.0772-1.3371-1.70709-0.7071l-6.58591,6.5858c-0.3905,0.3905-0.3905,1.0236,0,1.4142   l6.58591,6.5858c0.62989,0.63,1.70709,0.1838,1.70709-0.7071V17.368c4.1673,0.051,7.5423,3.4527,7.5423,7.6319   c0,4.211-3.4253,7.6368-7.6362,7.6368c-4.211,0-7.6363-3.4258-7.6363-7.6368c0-7.3691-5.9951-13.3632-13.3637-13.3632   c-7.3687,0-13.3638,5.9941-13.3638,13.3632c0,7.3165,5.9114,13.2705,13.2077,13.3554v3.7305c0,0.8909,1.0771,1.3371,1.707,0.7071   l6.58591-6.5858c0.39049-0.3906,0.39049-1.0237,0-1.4142l-6.58591-6.5858c-0.6299-0.63-1.707-0.1838-1.707,0.7071v3.7145   c-4.1385-0.0842-7.4802-3.4705-7.4802-7.6288c0-4.2109,3.4253-7.6367,7.6363-7.6367c4.2109,0,7.6362,3.4258,7.6362,7.6367   c0,7.3692,5.9951,13.3633,13.3638,13.3633c7.3686,0,13.3637-5.9941,13.3637-13.3633   C48.86375,17.6625,42.91905,11.6926,35.59395,11.6414z" />
                  </g>
                </svg>
                <h3 className="pb-4 text-xl font-medium text-purple-800 md:pb-8 md:text-2xl">
                  Devops
                </h3>
                <p>
                  With the tight integration of development, testing, operations
                  and support, teams become responsible for the end-to-end
                  delivery of business features, drastically reducing hand-offs
                  between teams and increasing overall quality.
                </p>
              </div>
            </div>

            <div className="mb-10 text-center md:mb-20 md:w-1/3 md:px-10">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  version="1.1"
                  viewBox="0 0 846.66 1058.325"
                  x="0px"
                  y="0px"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  className="mx-auto w-16"
                >
                  <g>
                    <path d="M293.02 389.68c23.25,-23.25 58.61,12.11 35.36,35.36l-82.96 82.95 82.96 82.96c23.25,23.25 -12.11,58.61 -35.36,35.36l-100.64 -100.64c-9.76,-9.76 -9.76,-25.6 0,-35.36l100.64 -100.63zm-102.03 -260.33l240.33 0c13.75,0.1 24.9,11.25 24.9,25l0.11 68.34c0,13.8 -11.2,25 -25,25l-240.33 0c-13.75,-0.1 -24.9,-11.25 -24.9,-25l-0.11 -68.34c0,-13.8 11.2,-25 25,-25zm515.62 153.85l-142.03 0.03c-36.49,0 -66.45,-29.96 -66.45,-66.45l0 -136.67 -341.62 0c-8.99,0 -16.45,7.46 -16.45,16.45l0 653.53c0,9.1 7.35,16.45 16.45,16.45l533.65 0c8.99,0 16.45,-7.46 16.45,-16.45l0 -466.89zm-616.55 466.89l0 -653.53c0,-36.61 29.84,-66.45 66.45,-66.45l366.62 0c7.44,0 14.12,3.26 18.7,8.42l207.16 201.83c4.84,4.84 7.54,10.95 7.54,17.87l0.08 491.86c0,36.61 -29.84,66.45 -66.45,66.45l-533.65 0c-36.49,0 -66.45,-29.96 -66.45,-66.45zm351.67 -407.23c8.48,-31.72 56.72,-18.83 48.24,12.9l-85.04 317.38c-8.48,31.72 -56.72,18.83 -48.24,-12.9l85.04 -317.38zm76.56 82.18c-23.25,-23.25 12.11,-58.61 35.36,-35.36l100.64 100.63c9.76,9.76 9.76,25.6 0,35.36l-100.64 100.64c-23.25,23.25 -58.61,-12.11 -35.36,-35.36l82.96 -82.96 -82.96 -82.95z" />
                  </g>
                </svg>
                <h3 className="pb-4 text-xl font-medium text-purple-800 md:pb-8 md:text-2xl">
                  Full Stack Developers
                </h3>
                <p>
                  Advising from the sidelines can only take you so far. To
                  provide the largest benefit possible to our clients, we work
                  alongside their existing teams, helping them to address
                  problems as they arise.
                </p>
              </div>
            </div>

            <div className="mb-10 text-center md:mb-20 md:w-1/3 md:px-10">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  version="1.1"
                  x="0px"
                  y="0px"
                  viewBox="0 0 66 82.5"
                  enableBackground="new 0 0 66 66"
                  className="mx-auto w-16"
                >
                  <g>
                    <g>
                      <path d="M19,33.7c0-1.7,5.5-4.3,14-4.3s14,2.5,14,4.3c0,1.7-5.5,4.2-14,4.2S19,35.4,19,33.7z" />
                      <path d="M17,33.4L17,33.4c0,0.1,0,0.2,0,0.2V33.4z" />
                      <path d="M49,33.4v0.2C49,33.6,49,33.5,49,33.4L49,33.4z" />
                      <path d="M33,40.1c5.5,0,11.1-1,14-3v5.6c0,1.7-5.5,4.2-14,4.2s-14-2.5-14-4.2v-5.6C21.9,39.1,27.5,40.1,33,40.1z" />
                      <path d="M33,49.1c5.5,0,11.1-1,14-3v5.6c0,1.7-5.5,4.2-14,4.2s-14-2.5-14-4.2v-5.6C21.9,48.1,27.5,49.1,33,49.1z" />
                      <path d="M33,58.2c5.5,0,11.1-1,14-3v5.6c0,1.7-5.5,4.2-14,4.2s-14-2.5-14-4.2v-5.6C21.9,57.1,27.5,58.2,33,58.2z" />
                      <path d="M47,33.7c0,1.7-5.5,4.2-14,4.2s-14-2.5-14-4.2c0-1.7,5.5-4.3,14-4.3S47,31.9,47,33.7z" />
                    </g>
                    <g>
                      <path d="M63.7,29.8c0,6.4-5.2,11.7-11.7,11.7h-3c0-5.4,0-7.9,0-8c-0.3-3.9-8.3-6-15.9-6s-15.7,2.1-15.9,6    c0,0.1,0,2.6,0,8h-4.1c-5.8,0-10.6-4.8-10.6-10.6c0-5.6,4.5-10.5,10.4-10.6c-1.6-8,6.4-14.8,14-12.1C34.4-6,56.5,2.6,52.6,18.1    c2.8,0.2,5.4,1.3,7.5,3.2C62.4,23.5,63.7,26.6,63.7,29.8z" />
                    </g>
                  </g>
                </svg>
                <h3 className="pb-4 text-xl font-medium text-purple-800 md:pb-8 md:text-2xl">
                  Cloud
                </h3>
                <p>
                  With the ever-increasing flexibility offered by public cloud
                  service providers, businesses no longer have to commit to
                  up-front capital investments. We help our clients leverage the
                  power of the cloud, helping them focus on providing business
                  value, not infrastructure.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`container mx-auto max-w-6xl px-4 ${sectionPaddingClasses}`}
      >
        <div className="mx-auto mb-16 max-w-xl text-center md:mb-28">
          <h2 className="mb-8 text-2xl font-bold text-gray-900 md:text-4xl">
            Meet the team
          </h2>
          <hr className="mx-auto w-12 border-2 border-gray-900" />
        </div>

        <div className="flex flex-wrap justify-center">
          <div className="mb-14 flex w-full flex-col items-center space-y-6 text-center md:mb-20 md:w-1/3 md:px-10">
            <div className="relative">
              <img
                src="tim.jpeg"
                alt="Tim Mortimer"
                className="h-40 w-40 rounded-full lg:h-60 lg:w-60"
              />
              <div className="absolute top-0 h-40 w-40 rounded-full bg-gray-800 opacity-20 lg:h-60 lg:w-60" />
            </div>
            <span className="text-xl text-gray-900">Tim Mortimer</span>
            <a
              href="https://www.linkedin.com/in/kiteframe-tim-mortimer/"
              className="w-10"
            >
              <img src="LI-In-Bug.png" alt="LinkedIn Icon" />
            </a>
            <span className="text-sm text-gray-900">
              Founder and software developer
            </span>
          </div>

          <div className="mb-14 flex w-full flex-col items-center space-y-6 text-center md:mb-20 md:w-1/3 md:px-10">
            <div className="relative">
              <img
                src="louis.jpeg"
                alt="Louis Smith"
                className="h-40 w-40 rounded-full lg:h-60 lg:w-60"
              />
              <div className="absolute top-0 h-40 w-40 rounded-full bg-gray-800 opacity-20 lg:h-60 lg:w-60" />
            </div>
            <span className="text-xl text-gray-900">Louis Smith</span>
            <a
              href="https://www.linkedin.com/in/louis-smith-221a30137/"
              className="w-10"
            >
              <img src="LI-In-Bug.png" alt="LinkedIn Icon" />
            </a>
            <span className="text-sm text-gray-900">Software developer</span>
          </div>
        </div>
      </div>

      <div className={`bg-teal-400 ${sectionPaddingClasses}`}>
        <div className="container mx-auto space-y-8 px-4 text-center text-white md:space-y-12">
          <h2 className="text-2xl font-bold text-gray-900 md:text-4xl">
            Don&apos;t just take our word for it!
          </h2>
          <hr className="mx-auto w-12 border-2 border-gray-900" />
          <Slider
            dots
            arrows={false}
            autoplay={true}
            autoplaySpeed={6000}
            className="pb-5"
          >
            <div className="mx-auto max-w-3xl text-center">
              <p className="mb-8 text-xl font-normal text-gray-900 md:text-2xl">
                &ldquo;I’ve worked with KiteFrame on multiple projects and have
                been really impressed with their attention to detail and
                business acumen. KiteFrame have been able to deliver on time and
                budget and offer guidance on managing projects long term which
                has been invaluable.&rdquo;
              </p>
              <span className="text-gray-900 md:text-lg">
                Robert Chittock | robertchittock.co.uk
              </span>
            </div>
            <div className="mx-auto max-w-3xl text-center">
              <p className="mb-8 text-xl font-normal text-gray-900 md:text-2xl">
                &ldquo;I have had the pleasure of working with KiteFrame and I
                was really impressed with their professionalism. The software
                they delivered was thoroughly tested and they were an easy
                partner to work with.&rdquo;
              </p>
              <span className="text-gray-900 md:text-lg">
                Fredrik Mäkilä | Takanoha Limited
              </span>
            </div>
          </Slider>
        </div>
      </div>

      <div className={`bg-gray-200 ${sectionPaddingClasses}`} id="contact-us">
        <div className="container mx-auto px-8 text-gray-900">
          <div className="mx-auto max-w-xl text-center">
            <div className="mx-auto mb-8 max-w-xl space-y-8 text-center">
              <h2 className="text-2xl font-bold text-purple-800 md:text-4xl">
                Contact us
              </h2>
              <hr className="mx-auto w-12 border-2 border-purple-800" />
            </div>
            <a
              href="mailto:contact@kiteframe.co.uk"
              className="text-black-900 mb-8 inline-block hover:underline md:text-lg"
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
                  className="mb-4 w-full px-4 py-2 font-light text-gray-900 placeholder-gray-500"
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
                  className="mb-4 w-full px-4 py-2 font-light text-gray-900 placeholder-gray-500"
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
                  className="mb-4 w-full px-4 py-2 font-light text-gray-900 placeholder-gray-500"
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
                  className="mb-4 h-32 w-full px-4 py-2 font-light text-gray-900 placeholder-gray-500"
                  name="message"
                  id="message"
                  placeholder="Type your message here..."
                  required
                />
              </div>
              <div>
                <button
                  className="w-full bg-purple-700 px-4 py-2 font-medium text-white hover:bg-purple-800"
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

function WorkCard({ heading, subheading, logo, children }) {
  return (
    <div className="mb-6 flex w-full px-3 md:w-1/3 lg:mb-16 lg:px-8">
      <div className="w-full rounded-lg border-2 border-purple-600 px-10 py-5 shadow-lg">
        <div className="mb-2 flex items-center justify-between">
          <div>
            <h3 className="text-xl font-semibold md:text-2xl">{heading}</h3>
            <p className="italic">{subheading}</p>
          </div>
          {logo()}
        </div>
        {children}
      </div>
    </div>
  );
}
