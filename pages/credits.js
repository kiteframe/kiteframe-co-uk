import Layout from "../components/layout";

export default function Credits() {
  return (
    <Layout>
      <div className="container mx-auto max-w-5xl px-4 pt-8 md:pt-14 pb-10 md:pb-16">
        <p className="pb-2">KiteFrame.co.uk makes use of the following icons</p>
        <ul className="list-disc">
          <li>
            Hierarchical Network Model by ProSymbols from the Noun Project
          </li>
          <li>
            Test-driven Development by Richard Slater from the Noun Project
          </li>
          <li>
            continuous delivery by Robert Bjurshagen from the Noun Project
          </li>
          <li>devops by Vectors Point from the Noun Project</li>
          <li>PHP by Ilham Fitrotul Hayat from the Noun Project</li>
          <li>Cloud Database by ProSymbols from the Noun Project</li>
        </ul>
      </div>
    </Layout>
  );
}
