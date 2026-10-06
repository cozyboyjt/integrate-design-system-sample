import type { ReactNode } from 'react';
import { Input } from '../Input/Input';
import { SendButton } from '../SendButton/SendButton';
import './MessageThread.css';

/* ─── Thread header ─────────────────────────────────────── */

export interface ThreadHeaderProps {
  /** Channel name. */
  title: string;
}

export function ThreadHeader({ title }: ThreadHeaderProps) {
  return (
    <header className="ds-thread-header">
      <h2 className="ds-thread-header__title">{title}</h2>
    </header>
  );
}

/* ─── Message thread ────────────────────────────────────── */

export interface MessageThreadProps {
  title: string;
  /** Message components. The list is a plain flex column, so add or remove freely. */
  children?: ReactNode;
  /** Composer placeholder. */
  placeholder?: string;
  onSend?: (text: string) => void;
  /** Hide the composer (Figma frame without the divider + input row). */
  hideComposer?: boolean;
  className?: string;
}

/** The chat panel: header, scrolling message list and composer (Input Large + Send button). */
export function MessageThread({
  title,
  children,
  placeholder = 'Message',
  onSend,
  hideComposer = false,
  className,
}: MessageThreadProps) {
  return (
    <section className={['ds-thread', className].filter(Boolean).join(' ')}>
      <ThreadHeader title={title} />
      <div className="ds-thread__messages" role="log" aria-label={`${title} messages`} tabIndex={0}>
        {children}
      </div>
      {hideComposer ? null : (
        <form
          className="ds-thread__composer"
          onSubmit={(event) => {
            event.preventDefault();
            const field = event.currentTarget.elements.namedItem('message') as HTMLInputElement | null;
            if (field?.value.trim()) {
              onSend?.(field.value.trim());
              field.value = '';
            }
          }}
        >
          <Input name="message" size="large" placeholder={placeholder} aria-label={placeholder} autoComplete="off" />
          <SendButton type="submit" />
        </form>
      )}
    </section>
  );
}
