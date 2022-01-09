const keyboardKeys = [
  32,
  ' ',
  33,
  'PageUp',
  34,
  'PageDown',
  37,
  'ArrowLeft',
  38,
  'ArrowUp',
  39,
  'ArrowRight',
  40,
  'ArrowDown',
];

function preventDefault(event: Event) {
  const e = event || window.event;
  if (e.preventDefault) {
    e.preventDefault();
  }
  e.returnValue = false;
}

function preventDefaultForScrollKeys(event: KeyboardEvent) {
  if (keyboardKeys.indexOf(event.keyCode ?? event.key) !== -1) {
    preventDefault(event);
    return false;
  }
  return true;
}

/**
 * Disables scroll events on the whole document.
 */
export function disableScroll() {
  if (window.addEventListener) {
    // older FF
    window.addEventListener('DOMMouseScroll', preventDefault, false);
  }
  // modern standard
  window.onwheel = preventDefault;
  // older browsers, IE
  // @ts-expect-error - Modern browsers don't have these properties so it throws error
  window.onmousewheel = preventDefault;
  // @ts-expect-error - Modern browsers don't have these properties so it throws error
  document.onmousewheel = preventDefault;
  // mobile
  window.ontouchmove = preventDefault;
  document.onkeydown = preventDefaultForScrollKeys;
}

/**
 * Enable scroll events on the whole document.
 */
export function enableScroll() {
  if (window.removeEventListener) {
    // older FF
    window.removeEventListener('DOMMouseScroll', preventDefault, false);
  }
  // modern standard
  window.onwheel = null;
  // older browsers, IE
  // @ts-expect-error - Modern browsers don't have these properties so it throws error
  window.onmousewheel = null;
  // @ts-expect-error - Modern browsers don't have these properties so it throws error
  document.onmousewheel = null;
  // mobile
  window.ontouchmove = null;
  document.onkeydown = null;
}
