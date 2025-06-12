import App from "./App";

document.addEventListener("DOMContentLoaded", async () => {
  const app = new App(document.querySelector("#app")!);
  app.render();

  //
  console.log("hello world");
});

fetch("http://localhost:8081").then(async (response: Response) => {
  console.log(await response.text());
});
