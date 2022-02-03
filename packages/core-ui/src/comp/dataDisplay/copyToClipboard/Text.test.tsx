import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import Text from './Text';

let container: Element | null = null;
describe('Test Copt to Clipboard Text component', () => {
  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  afterEach(() => {
    if (container) {
      unmountComponentAtNode(container);
      container.remove();
      container = null;
    }
  });

  it('should correctly render default CTC Text component', () => {
    const props = {
      id: 'default',
      children: 'lorem ipsum',
    };

    act(() => {
      render(<Text {...props} />, container);
    });

    expect(container).not.toBeNull();

    if (!container) return;

    const rootEl = container.querySelector(`[data-test="${props.id}-ctc-text"]`);
    expect(rootEl).not.toBeNull();

    if (!rootEl) return;

    expect(rootEl.textContent).toBe(props.children);

    act(() => {
      rootEl.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });

    const selection = window.getSelection();
    expect(selection).not.toBeNull();

    if (!selection) return;

    expect(selection.toString()).toBe(props.children);
    expect((selection.anchorNode as Element)?.id).toBe(props.id);
  });
});
