import Layout from "../components/layout";
import Slider from "react-slick";
import Head from "next/head";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>PHP Developers | KiteFrame</title>
        <meta
          name="description"
          content="KiteFrame accelerates the development of your PHP-based platform. We help CTOs build well-architected software that gives them the freedom to confidently adapt their technology strategy to changing business needs."
        />
      </Head>

      <div className="container flex flex-wrap items-center mx-auto max-w-5xl px-4 pt-8 md:pt-14 pb-10 md:pb-16">
        <div className="flex flex-col justify-items-center text-center md:text-left w-full md:w-1/2 mb-10 md:mb-0">
          <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4 leading-tight mb-6">
            Accelerate the development of your PHP-based platform
          </h1>
          <span className="text-lg md:text-xl font-normal text-gray-900">
            We help CTOs build well-architected software that gives them the
            freedom to confidently adapt their technology strategy to changing
            business needs.
          </span>
        </div>

        <div className="w-full md:w-1/2 flex md:justify-end">
          <img
            src="humaaans-graphs.png"
            alt="Graphic of a person surrounded by chart imagery"
            className="max-w-sm w-2/5 md:w-3/5 mx-auto"
          />
        </div>
      </div>

      <div className="bg-purple-600 px-4 pt-20 pb-24 md:pt-28 md:pb-36">
        <div className="container mx-auto text-white text-center space-y-6 md:space-y-8">
          <h2 className="text-2xl md:text-4xl font-bold">
            Product-focussed software engineers
          </h2>
          <hr className="w-12 mx-auto border-2 border-white" />
          <div className="max-w-xl mx-auto text-center">
            <span className="md:text-lg">
              Partnering with KiteFrame circumvents the months required to grow
              a team with the architectural, testing and operational expertise
              demanded by today's complex businesses.
            </span>
          </div>
        </div>
      </div>

      <div className="bg-gray-200 pt-20 md:pt-28 pb-12 md:pb-16">
        <div className="container mx-auto px-8 text-gray-900">
          <div className="max-w-xl mx-auto text-center mb-20 md:mb-28">
            <h2 className="text-2xl md:text-4xl text-purple-800 font-bold mb-4">
              What we do
            </h2>
            <p>
              KiteFrame use a set of practices and principles to build complex
              internal business systems and user-facing products in a fast yet
              maintainable way - continuously delivering bug-free code with
              confidence.
            </p>
          </div>

          <div className="flex flex-wrap md:-mx-10">
            <div className="md:w-1/3 md:px-10 text-center mb-10 md:mb-20">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  version="1.1"
                  x="0px"
                  y="0px"
                  viewBox="0 0 34 42.5"
                  enableBackground="new 0 0 34 34"
                  className="w-16 mx-auto"
                >
                  <g>
                    <path d="M30,17.01v5h-3v-3.5h-8v3.5h-3v-3.5H7v3.5H4v-5c0-0.83,0.67-1.5,1.5-1.5H16v-3.52h3v3.52h9.5   C29.33,15.51,30,16.18,30,17.01z" />
                    <path d="M10,25.01v5c0,0.82-0.67,1.5-1.5,1.5h-6c-0.83,0-1.5-0.68-1.5-1.5v-5c0-0.83,0.67-1.5,1.5-1.5h6   C9.33,23.51,10,24.18,10,25.01z" />
                    <path d="M22,25.01v5c0,0.82-0.67,1.5-1.5,1.5h-6c-0.83,0-1.5-0.68-1.5-1.5v-5c0-0.83,0.67-1.5,1.5-1.5h6   C21.33,23.51,22,24.18,22,25.01z" />
                    <path d="M33,25.01v5c0,0.82-0.67,1.5-1.5,1.5h-6c-0.83,0-1.5-0.68-1.5-1.5v-5c0-0.83,0.67-1.5,1.5-1.5h6   C32.33,23.51,33,24.18,33,25.01z" />
                    <path d="M22,3.99v5c0,0.83-0.67,1.5-1.5,1.5h-6c-0.83,0-1.5-0.67-1.5-1.5v-5c0-0.83,0.67-1.5,1.5-1.5h6   C21.33,2.49,22,3.16,22,3.99z" />
                  </g>
                </svg>
                <h3 className="text-xl md:text-2xl text-purple-800 font-medium pb-4 md:pb-8">
                  Domain-driven Design
                </h3>
                <p>
                  We believe that to build effective software in complex
                  domains, tight collaboration is required between developers
                  and the business. Say goodbye to your business experts having
                  one context and your developers having another.
                </p>
              </div>
            </div>

            <div className="md:w-1/3 md:px-10 text-center mb-10 md:mb-20">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  version="1.1"
                  viewBox="0 0 100 125"
                  x="0px"
                  y="0px"
                  className="w-16 mx-auto"
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
                <h3 className="text-xl md:text-2xl text-purple-800 font-medium pb-4 md:pb-8">
                  Test-driven development
                </h3>
                <p>
                  In order to achieve to fast flow, it is absolutely essential
                  that the development team have access to a suite of fast tests
                  that are able to verify the behaviour of the system.
                </p>
              </div>
            </div>

            <div className="md:w-1/3 md:px-10 text-center mb-10 md:mb-20">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  version="1.1"
                  x="0px"
                  y="0px"
                  viewBox="0 0 100 125"
                  enableBackground="new 0 0 100 100"
                  className="w-16 mx-auto"
                >
                  <path d="M82.4,36.1c0-4.4-0.9-8.7-2.6-12.7c-1.6-3.9-4-7.4-7-10.4c-0.5-0.5-1-0.9-1.4-1.4v5.2h-5.6c5.5,4.6,9.1,11.5,9.1,19.3  c0,4.9-1.4,9.5-3.9,13.4v6.4h4.8c1.6-2.2,3-4.5,4.1-7C81.6,44.8,82.4,40.5,82.4,36.1z" />
                  <path d="M17.9,36.1c0,4.4,0.9,8.7,2.6,12.7c1.6,3.9,4,7.4,7,10.4c0.5,0.5,1,0.9,1.4,1.4c0,0,0-11.7,0-11.8c-2.2-3.7-3.4-8-3.4-12.6  c0-4.9,1.4-9.5,3.9-13.4v-6.4h-4.8c-1.6,2.2-3,4.5-4.1,7C18.8,27.4,17.9,31.7,17.9,36.1z" />
                  <path d="M50.3,3.9c-4.4,0-8.7,0.9-12.7,2.6c-3.9,1.6-7.4,4-10.4,7c-0.5,0.5-0.9,1-1.4,1.4H31v5.6c4.6-5.5,11.5-9.1,19.3-9.1  c4.9,0,9.5,1.4,13.4,3.9H70v-4.8c-2.2-1.6-4.5-3-7-4.1C58.9,4.8,54.7,3.9,50.3,3.9z" />
                  <path d="M32.6,39.2l17.4,10l17.5-10.1L50.2,29.1L32.6,39.2z M69.3,42L51.8,52v20.2l17.5-10.1V42z M31.1,42.1v20.1l17.5,10.1V52.2  L31.1,42.1z" />
                  <polygon points="57.2,71.3 50.1,75.5 43.2,71.3 43.2,79 35.3,79 50.2,93.9 65,79 57.2,79 " />
                </svg>
                <h3 className="text-xl md:text-2xl text-purple-800 font-medium pb-4 md:pb-8">
                  Continuous delivery
                </h3>
                <p>
                  Releasing relatively small increments more often reduces the
                  risk of any one release, minimises the business impact of
                  failed experiments and enables the acceleration of the
                  development team.
                </p>
              </div>
            </div>

            <div className="md:w-1/3 md:px-10 text-center mb-10 md:mb-20">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  version="1.1"
                  x="0px"
                  y="0px"
                  viewBox="0 0 50 62.5"
                  enableBackground="new 0 0 50 50"
                  className="w-16 mx-auto"
                >
                  <g>
                    <path d="M35.59395,11.6414V7.9142c0-0.8909-1.0772-1.3371-1.70709-0.7071l-6.58591,6.5858c-0.3905,0.3905-0.3905,1.0236,0,1.4142   l6.58591,6.5858c0.62989,0.63,1.70709,0.1838,1.70709-0.7071V17.368c4.1673,0.051,7.5423,3.4527,7.5423,7.6319   c0,4.211-3.4253,7.6368-7.6362,7.6368c-4.211,0-7.6363-3.4258-7.6363-7.6368c0-7.3691-5.9951-13.3632-13.3637-13.3632   c-7.3687,0-13.3638,5.9941-13.3638,13.3632c0,7.3165,5.9114,13.2705,13.2077,13.3554v3.7305c0,0.8909,1.0771,1.3371,1.707,0.7071   l6.58591-6.5858c0.39049-0.3906,0.39049-1.0237,0-1.4142l-6.58591-6.5858c-0.6299-0.63-1.707-0.1838-1.707,0.7071v3.7145   c-4.1385-0.0842-7.4802-3.4705-7.4802-7.6288c0-4.2109,3.4253-7.6367,7.6363-7.6367c4.2109,0,7.6362,3.4258,7.6362,7.6367   c0,7.3692,5.9951,13.3633,13.3638,13.3633c7.3686,0,13.3637-5.9941,13.3637-13.3633   C48.86375,17.6625,42.91905,11.6926,35.59395,11.6414z" />
                    <path d="M35.59395,11.6414V7.9142c0-0.8909-1.0772-1.3371-1.70709-0.7071l-6.58591,6.5858c-0.3905,0.3905-0.3905,1.0236,0,1.4142   l6.58591,6.5858c0.62989,0.63,1.70709,0.1838,1.70709-0.7071V17.368c4.1673,0.051,7.5423,3.4527,7.5423,7.6319   c0,4.211-3.4253,7.6368-7.6362,7.6368c-4.211,0-7.6363-3.4258-7.6363-7.6368c0-7.3691-5.9951-13.3632-13.3637-13.3632   c-7.3687,0-13.3638,5.9941-13.3638,13.3632c0,7.3165,5.9114,13.2705,13.2077,13.3554v3.7305c0,0.8909,1.0771,1.3371,1.707,0.7071   l6.58591-6.5858c0.39049-0.3906,0.39049-1.0237,0-1.4142l-6.58591-6.5858c-0.6299-0.63-1.707-0.1838-1.707,0.7071v3.7145   c-4.1385-0.0842-7.4802-3.4705-7.4802-7.6288c0-4.2109,3.4253-7.6367,7.6363-7.6367c4.2109,0,7.6362,3.4258,7.6362,7.6367   c0,7.3692,5.9951,13.3633,13.3638,13.3633c7.3686,0,13.3637-5.9941,13.3637-13.3633   C48.86375,17.6625,42.91905,11.6926,35.59395,11.6414z" />
                  </g>
                </svg>
                <h3 className="text-xl md:text-2xl text-purple-800 font-medium pb-4 md:pb-8">
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

            <div className="md:w-1/3 md:px-10 text-center mb-10 md:mb-20">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 40"
                  x="0px"
                  y="0px"
                  className="w-16 mx-auto"
                >
                  <path d="M27.35,7.65l-6-6A.47.47,0,0,0,21,1.5H6.43A1.94,1.94,0,0,0,4.5,3.43V13a.5.5,0,0,0,1,0V3.43a.93.93,0,0,1,.93-.93H20.5V8a.5.5,0,0,0,.5.5h5.5V28.57a.93.93,0,0,1-.93.93H6.43a.93.93,0,0,1-.93-.93V26a.5.5,0,0,0-1,0v2.57A1.94,1.94,0,0,0,6.43,30.5H25.57a1.94,1.94,0,0,0,1.93-1.93V8A.47.47,0,0,0,27.35,7.65ZM21.5,3.21,25.79,7.5H21.5Z" />
                  <path d="M18.19,17.69H17.3v2.09h1a1.32,1.32,0,0,0,1-.28,1.14,1.14,0,0,0,.27-.82.82.82,0,0,0-.34-.76A1.9,1.9,0,0,0,18.19,17.69Z" />
                  <path d="M23.5,22.88V16.12a1.61,1.61,0,0,0-1.62-1.62H4.12A1.61,1.61,0,0,0,2.5,16.12v6.76A1.61,1.61,0,0,0,4.12,24.5H21.88A1.61,1.61,0,0,0,23.5,22.88ZM9,20.14a2.76,2.76,0,0,1-1.71.44H6.4v1.53H5.52V16.89H7.31A2.63,2.63,0,0,1,9,17.35a1.72,1.72,0,0,1,.54,1.4A1.68,1.68,0,0,1,9,20.14Zm5.94,2h-.88V20H11.5v2.14h-.88V16.89h.88v2.26h2.59V16.89H15Zm5-2a2.76,2.76,0,0,1-1.71.44H17.3v1.53h-.88V16.89h1.79a2.65,2.65,0,0,1,1.73.46,1.72,1.72,0,0,1,.54,1.4A1.68,1.68,0,0,1,19.93,20.14Z" />
                  <path d="M7.29,17.69H6.4v2.09h1a1.36,1.36,0,0,0,1-.28,1.19,1.19,0,0,0,.26-.82.84.84,0,0,0-.33-.76A2,2,0,0,0,7.29,17.69Z" />
                </svg>
                <h3 className="text-xl md:text-2xl text-purple-800 font-medium pb-4 md:pb-8">
                  PHP
                </h3>
                <p>
                  Having worked extensively with Laravel and Symfony, we have
                  the knowledge and experience to dive into new and existing
                  codebases and hit the ground running.
                </p>
              </div>
            </div>

            <div className="md:w-1/3 md:px-10 text-center mb-10 md:mb-20">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  version="1.1"
                  x="0px"
                  y="0px"
                  viewBox="0 0 66 82.5"
                  enableBackground="new 0 0 66 66"
                  className="w-16 mx-auto"
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
                <h3 className="text-xl md:text-2xl text-purple-800 font-medium pb-4 md:pb-8">
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

      <div className="container mx-auto max-w-6xl px-4 pt-20 md:pt-28 pb-24 md:pb-36">
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
            <span className="text-gray-900 text-sm">
              Founder and software developer
            </span>
          </div>
        </div>
      </div>

      <div className="bg-teal-400 pt-20 md:pt-28 pb-24 md:pb-36">
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

      <div className="bg-gray-200 pt-20 md:pt-28 pb-16" id="contact-us">
        <div className="container mx-auto px-8 text-gray-900">
          <div className="max-w-xl mx-auto text-center mb-28">
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
