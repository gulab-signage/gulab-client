import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function RouteOne() {
  return <div style={{ height: '200vh' }}>Route 1</div>;
}

function RouteTwo() {
  return <div style={{ height: '200vh' }}>Route 2</div>;
}

let container: Element | null = null;
describe('Test ScrollToTop component', () => {
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

  it('should correctly scroll to the top of the page after route change', () => {
    act(() => {
      render(
        <BrowserRouter>
          {/* <ScrollToTop /> */} {/* `window.scroll` is not implemented */}
          <Routes>
            <Route path='/' element={<RouteOne />} />
            <Route path='/routeTwo' element={<RouteTwo />} />
          </Routes>
        </BrowserRouter>,
        container
      );
    });

    expect(container).not.toBeNull();

    if (container) {
      // TODO: Finish the test case
    }
  });
});
