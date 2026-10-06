import type { Preview } from '@storybook/react-vite';
import '../src/styles/global.css';

const preview: Preview = {
  parameters: {
    layout: 'padded',
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    options: {
      storySort: {
        order: ['Foundations', ['Colour', 'Typography', 'Spacing & Radius', 'Shadows'], 'Components', 'Screens'],
      },
    },
    a11y: {
      // 'todo' shows violations in the a11y panel without failing anything
      test: 'todo',
    },
  },
};

export default preview;
