import { Button } from './components/Button/Button';

/** Placeholder app shell — the design system is browsed in Storybook (npm run storybook). */
export default function App() {
  return (
    <main style={{ padding: 'var(--spacing-32)', display: 'grid', gap: 'var(--spacing-16)', justifyItems: 'start' }}>
      <h1 className="text-heading-2" style={{ margin: 0 }}>
        Integrate design system
      </h1>
      <p className="text-body-md-regular" style={{ margin: 0, color: 'var(--color-text-secondary)' }}>
        Run <code>npm run storybook</code> to browse the components.
      </p>
      <Button variant="primary">Open Storybook</Button>
    </main>
  );
}
