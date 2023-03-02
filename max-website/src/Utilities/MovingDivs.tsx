import { Decimal } from 'decimal.js';
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

    return invertTranslateString(`translate(${x}px, ${y}px)`);
}

function invertTranslateString(translateString: string): string {
    const values = translateString.match(/-?\d+(\.\d+)?/g)?.map(value => new Decimal(value));
    const xUnit = /-?\d+(\.\d+)?(px|%)/g.exec(translateString)?.[2] || '';
    const yUnit = /-?\d+(\.\d+)?(px|%)/g.exec(translateString)?.[2] || '';
    if (values === undefined){
        return ''
    }
    const x = new Decimal(-values[0]) + (xUnit === 'px' ? 'px' : '');
    const y = new Decimal(-values[1]) + (yUnit === 'px' ? 'px' : '');
    return `translate(${x.toString()}${xUnit}, ${y.toString()}${yUnit})`;
  }