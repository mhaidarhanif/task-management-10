import "./style.css";
import { setupCounter } from "./counter.ts";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <h1>JavaScript Bundler with Tailwind CSS</h1>
    <button class="bg-green-300 p-2 rounded" id="counter" type="button"></button>
  </div>
`;

setupCounter(document.querySelector<HTMLButtonElement>("#counter")!);
