import { useEffect } from "react";

export default function Custom404() {
  useEffect(() => {
    window.plausible("404", { props: { path: document.location.pathname } });
  });

  return (
    <>
      <h1>404 - Page Not Found</h1>
    </>
  );
}
