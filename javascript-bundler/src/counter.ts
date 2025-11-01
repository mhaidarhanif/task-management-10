export function setupCounter(element: HTMLButtonElement) {
  let counter = 0;

  const setCounter = (count: number) => {
    counter = count;
    element.innerHTML = `Number: ${counter}`;
  };

  element.addEventListener("click", () => setCounter(counter + 10));

  setCounter(123);
}
