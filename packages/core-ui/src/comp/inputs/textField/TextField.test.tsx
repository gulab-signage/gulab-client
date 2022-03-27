import { GlobalStyles, ThemeProvider } from '@gulab-client/core-ui';
import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import TextField from './TextField';

let container: Element | null = null;
describe('Test TextField component', () => {
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

  it('should correctly render default text field', () => {
    const props = {
      id: 'default',
      label: 'username',
      defaultValue: 'john.doe@test.com',
      required: false,
      disabled: false,
      error: false,
    };

    act(() => {
      render(
        <ThemeProvider>
          <GlobalStyles />
          <TextField {...props} />
        </ThemeProvider>,
        container
      );
    });

    expect(container).not.toBeNull();

    if (container) {
      const labelEl = container.querySelector(`[data-test="${props.id}-label"]`);
      const inputEl = container.querySelector(`[data-test="${props.id}-field"]`);

      expect(labelEl).not.toBeNull();
      expect(inputEl).not.toBeNull();

      if (labelEl) {
        expect(labelEl.textContent).toBe(props.label);
      }

      if (inputEl) {
        expect(inputEl.getAttribute('id')).toBe(props.id);
        expect(inputEl.getAttribute('type')).toBe('text');
        expect(inputEl.getAttribute('value')).toBe(props.defaultValue);
        expect(inputEl).not.toHaveAttribute('disabled');
        expect(inputEl).not.toHaveAttribute('required');
      }
    }
  });

  it('should correctly render required disabled password field with error', () => {
    const props = {
      type: 'password',
      id: 'pass',
      label: 'password',
      defaultValue: 'thisismypassword',
      required: true,
      disabled: true,
      error: true,
    };

    act(() => {
      render(
        <ThemeProvider>
          <GlobalStyles />
          <TextField {...props} />
        </ThemeProvider>,
        container
      );
    });

    expect(container).not.toBeNull();

    if (container) {
      const labelEl = container.querySelector(`[data-test="${props.id}-label"]`);
      const inputEl = container.querySelector(`[data-test="${props.id}-field"]`);

      expect(labelEl).not.toBeNull();
      expect(inputEl).not.toBeNull();

      if (labelEl) {
        expect(labelEl.textContent).toContain(props.label);
        expect(labelEl.textContent).toContain('*');
        expect(labelEl).toHaveClass('Mui-error');
      }

      if (inputEl) {
        expect(inputEl.getAttribute('id')).toBe(props.id);
        expect(inputEl.getAttribute('type')).toBe(props.type);
        expect(inputEl.getAttribute('value')).toBe(props.defaultValue);
        expect(inputEl).toHaveAttribute('disabled');
        expect(inputEl).toHaveAttribute('required');
        expect(inputEl.parentElement).toHaveClass('Mui-error');
      }
    }
  });
});
