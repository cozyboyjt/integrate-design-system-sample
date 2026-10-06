/** Token names for the foundations stories. Values live in tokens.css. */
export interface TokenGroup {
  title: string;
  tokens: string[];
}

const scale = (family: string, steps: Array<string | number>) =>
  steps.map((s) => `--color-${family}-${s}`);

export const primitiveColours: TokenGroup[] = [
  { title: 'Blue', tokens: scale('blue', [100, 200, 300, 400, 500]) },
  { title: 'Violet', tokens: scale('violet', [100, 200, 300, 400, 500]) },
  { title: 'Red', tokens: scale('red', [100, 200, 300, 400, 500]) },
  { title: 'Teal', tokens: scale('teal', [100, 200, 300, 400, 500]) },
  { title: 'Tan', tokens: scale('tan', [100, 200, 300, 400, 500, 600]) },
  { title: 'Green', tokens: scale('green', [100, 200, 300, 400, 500, 600]) },
  { title: 'Neutral', tokens: scale('neutral', ['white', 100, 200, 300, 350, 400, 'black']) },
];

export const semanticColours: TokenGroup[] = [
  {
    title: 'Text',
    tokens: [
      '--color-text-primary',
      '--color-text-secondary',
      '--color-text-muted',
      '--color-text-disabled',
      '--color-text-white',
      '--color-text-link',
    ],
  },
  {
    title: 'Surface',
    tokens: [
      '--color-surface-default',
      '--color-surface-card',
      '--color-surface-raised',
      '--color-surface-primary',
      '--color-surface-accent',
    ],
  },
  {
    title: 'Border',
    tokens: [
      '--color-border-default',
      '--color-border-focus',
      '--color-border-subtle',
      '--color-border-disabled',
    ],
  },
  {
    title: 'Brand',
    tokens: ['--color-brand-primary', '--color-brand-accent', '--color-brand-secondary'],
  },
  {
    title: 'Feedback',
    tokens: [
      '--color-feedback-error-light',
      '--color-feedback-error-default',
      '--color-feedback-error-dark',
      '--color-feedback-success-light',
      '--color-feedback-success-default',
      '--color-feedback-success-dark',
      '--color-feedback-warning-light',
      '--color-feedback-warning-default',
      '--color-feedback-warning-dark',
      '--color-feedback-information-light',
      '--color-feedback-information-default',
      '--color-feedback-information-dark',
    ],
  },
];

export const textStyles = [
  { name: 'heading/1', className: 'text-heading-1', spec: 'Poppins SemiBold · 40' },
  { name: 'heading/2', className: 'text-heading-2', spec: 'Poppins SemiBold · 32' },
  { name: 'heading/3', className: 'text-heading-3', spec: 'Poppins Medium · 24' },
  { name: 'body/lg/Semibold', className: 'text-body-lg-semibold', spec: 'Poppins SemiBold · 20' },
  { name: 'body/lg/Medium', className: 'text-body-lg-medium', spec: 'Poppins Medium · 20' },
  { name: 'body/md/Semibold', className: 'text-body-md-semibold', spec: 'Poppins SemiBold · 16' },
  { name: 'body/md/Medium', className: 'text-body-md-medium', spec: 'Poppins Medium · 16' },
  { name: 'body/md/Regular', className: 'text-body-md-regular', spec: 'Poppins Regular · 16' },
  { name: 'body/sm/Semibold', className: 'text-body-sm-semibold', spec: 'Poppins SemiBold · 12' },
  { name: 'body/sm/Regular', className: 'text-body-sm-regular', spec: 'Poppins Regular · 12' },
];

export const spacingTokens = [
  '--spacing-none',
  '--spacing-4',
  '--spacing-8',
  '--spacing-16',
  '--spacing-24',
  '--spacing-32',
  '--spacing-64',
];

export const radiusTokens = [
  '--radius-none',
  '--radius-sm',
  '--radius-md',
  '--radius-lg',
  '--radius-full',
];

export const shadowTokens = ['--shadow-sm', '--shadow-md', '--shadow-lg'];
