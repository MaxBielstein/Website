import { Decimal } from 'decimal.js';
// Centers an HTMLElement in the top middle of the screen
export function centerElementById(id: string, middle=false) {
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

    const y = middle ? (windowHeight * 0.12) - element.offsetTop : (windowHeight * 0.05) - element.offsetTop;
    element.style.transform = `translate(${x}px, ${y}px)`;

    return `translate(${x}px, ${y}px)`;
}

export function invertTranslateString(translateString: string): string {
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

  export function getMoveDivOffPageTranslate(div: HTMLElement, direction: 'right' | 'left' | 'top' | 'bottom'): string {
    const rect = div.getBoundingClientRect();
  
    // Get the current computed transform offsets, if any.
    let baseX = 0, baseY = 0;
    const computed = window.getComputedStyle(div).transform;
    if (computed && computed !== 'none') {
      const values = computed.split('(')[1].split(')')[0].split(',');
      if (values.length >= 6) {
        baseX = parseFloat(values[4]);
        baseY = parseFloat(values[5]);
      }
    }
  
    // Use the larger of the width or height as the extra buffer.
    const extraBuffer = Math.max(div.offsetWidth, div.offsetHeight);
  
    switch (direction) {
      case 'right': {
        // Move so that the element's left edge reaches the right edge plus extra buffer.
        const dx = window.innerWidth - rect.left + extraBuffer;
        return `translate(${dx + baseX}px, ${baseY}px)`;
      }
      case 'left': {
        // Move so that the element's right edge reaches the left side minus extra buffer.
        const dx = -rect.right - extraBuffer;
        return `translate(${dx + baseX}px, ${baseY}px)`;
      }
      case 'top': {
        // Move so that the element's bottom edge is above y = 0 minus extra buffer.
        const dy = -rect.bottom - extraBuffer;
        return `translate(${baseX}px, ${dy + baseY}px)`;
      }
      case 'bottom': {
        // Move so that the element's top edge reaches the bottom of the viewport plus extra buffer.
        const dy = window.innerHeight - rect.top + extraBuffer;
        return `translate(${baseX}px, ${dy + baseY}px)`;
      }
      default:
        console.error('Invalid direction. Please use one of: right, left, top, bottom');
        return '';
    }
  }
  