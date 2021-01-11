import { useEffect } from "react";
import Error from 'next/error';

export default function Custom404() {
  useEffect(() => {
    window.plausible("404", { props: { path: document.location.pathname } });
  });

  return <Error statusCode={404} />;
}
