import init, { Test } from "../dist/lib";

window.addEventListener("load", () => {
  init().then(() => {
    const test = new Test();
    const $test: HTMLElement = document.querySelector("#test")!;

    $test.innerText = test.test();
  });
});
