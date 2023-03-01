
// Centers an HTMLElement in the top middle of the screen
export function centerElementById(id: string) {
    const element = document.querySelector(`#${id}`) as HTMLElement;
    console.log('something2')
    if (!element) {
        throw new Error(`No element found with ID ${id}`);
    }
    console.log('something')
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    const elementWidth = element.offsetWidth;
    const x = (windowWidth - elementWidth) / 2 - element.offsetLeft;
    const y = (windowHeight * 0.15) - element.offsetTop;
    element.style.transform = `translate(${x}px, ${y}px)`;
}