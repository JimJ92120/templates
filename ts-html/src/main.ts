import App from "./App";

document.addEventListener("DOMContentLoaded", async () => {
  const app = new App(document.querySelector("#app")!);
  app.render();

  //
  console.log("hello world ts-html");
});
