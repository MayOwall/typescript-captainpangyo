import React from "react";
import ReactDOM from "react-dom/client";

function Greeting({ emoji }: { emoji?: string }) {
  return (
    <h1>
      Greeting! <span>{emoji || ""}</span>
    </h1>
  );
}

const rootElement = document.getElementById("root")!;
const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <Greeting emoji={"🔥"} />
  </React.StrictMode>
);
