import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { BrowserRouter } from 'react-router-dom';
import Breadcrumbs from './Breadcrumbs';

let container: Element | null = null;
describe('Test Breadcrumbs component', () => {
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

  it('should correctly render Breadcrumbs for the provied location', () => {
    const props = {
      location: '/widgets/social-app/#twitter',
    };
    const expectedChildElementCount = 5; // 3 links and 2 separators

    act(() => {
      render(
        <BrowserRouter>
          <Breadcrumbs {...props} />
        </BrowserRouter>,
        container
      );
    });

    expect(container).not.toBeNull();

    if (container) {
      const listEl = container.querySelector(`[data-test="breadcrumbs"] > ol`);
      expect(listEl).not.toBeNull();
      expect(listEl?.childElementCount).toBe(expectedChildElementCount);

      const firstItem = listEl?.children[0].querySelector('a');
      expect(firstItem?.innerHTML).not.toBe('widgets');
      expect(firstItem?.innerHTML).toBe('Widgets');
      expect(firstItem?.getAttribute('href')).toBe('/widgets');

      const secondItem = listEl?.children[2].querySelector('a');
      expect(secondItem?.innerHTML).not.toBe('social-app');
      expect(secondItem?.innerHTML).toBe('Social App');
      expect(secondItem?.getAttribute('href')).toBe('/widgets/social-app');

      const lastItem = listEl?.children[listEl.childElementCount - 1].querySelector('a');
      expect(lastItem?.innerHTML).not.toBe('#twitter');
      expect(lastItem?.innerHTML).toBe('Twitter');
      expect(lastItem?.getAttribute('href')).toBe(props.location);
    }
  });
});
