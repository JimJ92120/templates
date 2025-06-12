export default class App {
  $container: HTMLElement;

  constructor($container: HTMLElement) {
    this.$container = $container;
  }

  render() {
    this.$container.innerHTML = `
      <p>Hello world App</p>
  `;
  }
}
