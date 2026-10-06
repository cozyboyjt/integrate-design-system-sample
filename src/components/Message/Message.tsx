import type { HTMLAttributes, ReactNode } from 'react';
import { HeartIcon } from '../../icons';
import { InitialsAvatar } from '../InitialsAvatar/InitialsAvatar';
import { YouBadge } from '../YouBadge/YouBadge';
import './Message.css';

/* ─── Author line ───────────────────────────────────────── */

export interface AuthorLineProps {
  name: string;
  time: string;
  /** Shows the You badge (Figma: Show you badge). */
  isYou?: boolean;
}

export function AuthorLine({ name, time, isYou = false }: AuthorLineProps) {
  return (
    <div className="ds-author-line">
      <span className="ds-author-line__name">{name}</span>
      {isYou ? <YouBadge /> : null}
      <span className="ds-author-line__time">{time}</span>
    </div>
  );
}

/* ─── Reaction ──────────────────────────────────────────── */

export interface ReactionProps extends HTMLAttributes<HTMLDivElement> {
  /** e.g. "3 people" or "You and 2 people". */
  text: string;
  /** Figma: State=Reacted — the signed-in user has reacted. */
  reacted?: boolean;
}

export function Reaction({ text, reacted = false, className, ...rest }: ReactionProps) {
  return (
    <div
      className={['ds-reaction', reacted ? 'ds-reaction--reacted' : null, className].filter(Boolean).join(' ')}
      {...rest}
    >
      <HeartIcon size={20} />
      <span className="ds-reaction__text">{text}</span>
    </div>
  );
}

/* ─── Reply quote ───────────────────────────────────────── */

export interface ReplyQuoteProps {
  /** Initials of the author being replied to. */
  initials: string;
  /** The quoted line. Start with the @mention; wrap it in <strong> for the semibold look. */
  text: ReactNode;
}

export function ReplyQuote({ initials, text }: ReplyQuoteProps) {
  return (
    <div className="ds-reply-quote">
      <span className="ds-reply-quote__connector" aria-hidden="true" />
      <InitialsAvatar initials={initials} size="small" />
      <p className="ds-reply-quote__text">{text}</p>
    </div>
  );
}

/* ─── Message ───────────────────────────────────────────── */

export interface MessageProps {
  name: string;
  time: string;
  initials: string;
  body: string;
  isYou?: boolean;
  /** Figma: Show reaction + Reaction props. */
  reaction?: { text: string; reacted?: boolean };
  /** Figma: Type=Reply — the line being replied to, shown above the message. */
  replyTo?: { initials: string; text: ReactNode };
}

/** One chat message. Add `replyTo` for Type=Reply. */
export function Message({ name, time, initials, body, isYou, reaction, replyTo }: MessageProps) {
  const row = (
    <article className="ds-message">
      <InitialsAvatar initials={initials} size="medium" />
      <div className="ds-message__content">
        <AuthorLine name={name} time={time} isYou={isYou} />
        <p className="ds-message__body">{body}</p>
        {reaction ? <Reaction text={reaction.text} reacted={reaction.reacted} /> : null}
      </div>
    </article>
  );
  if (!replyTo) return row;
  return (
    <div className="ds-message-reply">
      <ReplyQuote initials={replyTo.initials} text={replyTo.text} />
      {row}
    </div>
  );
}
