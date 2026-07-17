import { useEffect, useState } from "react";
import DesignSwitcher from "./components/DesignSwitcher.jsx";
import EditorialDesign from "./designs/EditorialDesign.jsx";
import GridDesign from "./designs/GridDesign.jsx";
import MonoDesign from "./designs/MonoDesign.jsx";

const DESIGNS = {
  editorial: EditorialDesign,
  grid: GridDesign,
  mono: MonoDesign,
};

const VALID = Object.keys(DESIGNS);

function getInitialDesign() {
  if (typeof window === "undefined") return "editorial";
  const param = new URLSearchParams(window.location.search).get("design");
  if (param && VALID.includes(param)) return param;
  const stored = window.localStorage.getItem("design");
  if (stored && VALID.includes(stored)) return stored;
  return "editorial";
}

function App() {
  const [design, setDesign] = useState(getInitialDesign);

  useEffect(() => {
    document.documentElement.setAttribute("data-design", design);
    try {
      window.localStorage.setItem("design", design);
      const url = new URL(window.location.href);
      url.searchParams.set("design", design);
      window.history.replaceState({}, "", url);
    } catch {
      /* ignore storage/url errors */
    }
  }, [design]);

  const ActiveDesign = DESIGNS[design] ?? EditorialDesign;

  return (
    <>
      <DesignSwitcher value={design} onChange={setDesign} />
      <ActiveDesign />
    </>
  );
}

export default App;
