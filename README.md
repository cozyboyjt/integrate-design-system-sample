# Integrate design system

React + TypeScript components and a Storybook, built from the **CRRT Design System (Copy)** Figma file.

```bash
npm install
npm run storybook        # http://localhost:6006
npm run build-storybook  # static build in storybook-static/
```

## How it's organised

```
src/
  tokens/        tokens.css (all Figma variables) · typography.css (text styles) · foundation stories
  icons/         24px line icons (stroke = currentColor)
  components/    one folder per component: Component.tsx · Component.css · Component.stories.tsx
  index.ts       public entry point
```

**Tokens.** `src/tokens/tokens.css` mirrors the Figma *Primitives* and *Semantic* collections as CSS variables
(`--color-blue-500`, `--color-text-primary`, `--spacing-16`, `--radius-md`, `--shadow-md` …). Semantic
tokens reference primitives with `var()`, exactly as in Figma. Components use semantic tokens; they only
touch a primitive when Figma binds one directly (e.g. the Primary button's hover `--color-blue-400`).
Text styles are classes: `text-body-md-medium`, `text-heading-2`, …

## Figma ↔ code

| Figma | Code | Figma property → prop |
|---|---|---|
| Button (Primary / Secondary) | `Button` | Size → `size` · Left/Right Icon → `leftIcon`/`rightIcon` · State → `:hover` `:active` `disabled` |
| Input | `Input` | State=Error → `invalid` · Disabled → `disabled` · Focus → `:focus-within` · Size → `size` · Filled → has a value · icons → `leadingIcon`/`trailingIcon` |
| Send button | `SendButton` | State=Disabled → `disabled` · Icon → `icon` |
| Chip (StatusChip) | `Chip` | State → `tone` · Property 1 → `size` |
| Checkbox | `Checkbox` | State → `checked` / `disabled` |
| Segmented control | `SegmentedControl` | Selected → `value` · labels → `options` |
| Initials avatar · You badge | `InitialsAvatar` · `YouBadge` | Size → `size` · Initials → `initials` · Label → `label` |
| Breadcrumb | `Breadcrumb` | Levels → length of `items` |
| Nav item · Navbar | `NavItem` · `Navbar` | State=Active → `active` · Navbar Active → `activeId` |
| Top bar | `TopBar` | Name/Role → `userName`/`userRole` · Count → `notificationCount` |
| Channel row · Group header · Channel group | `ChannelRow` · `GroupHeader` · `ChannelGroup` | State → `selected` · Show badge/Count → `unread` · Open → `open` · rows → `children` |
| Author line · Reaction · Reply quote · Message | `AuthorLine` · `Reaction` · `ReplyQuote` · `Message` | Type=Reply → `replyTo` · Show reaction → `reaction` · Show you badge → `isYou` |
| Thread header · Message thread | `ThreadHeader` · `MessageThread` | Title → `title` · messages → `children` |
| Header cell · Body cell · Status pill | `HeaderCell` · `BodyCell` · `StatusPill` | Sortable → `sortable` · Tone → `tone` · Label → `label` |
| Tab · Tab bar | `Tab` · `TabBar` | State → `selected` · Selected → `selectedId` |
| Table header row · Table row · Table | `TableHeaderRow` · `TableRow` · `Table` | columns → `columns` · cells → `children` |
| Section header · Member table | `SectionHeader` · `MemberTable` | Title/Subtitle → `title`/`subtitle` · Show filter → `onFilter` |
| Chart placeholder · KPI figure · KPI card · KPI row | `ChartPlaceholder` · `KpiFigure` · `KpiCard` · `KpiRow` | Label/Value → `label`/`value` · Delta chip → `delta` |

`Screens/Admin Dashboard` and `Screens/Module chat` assemble the library into the two finished screens.

## Accessibility

All text pairs used by the components meet WCAG AA (4.5:1), except disabled controls, which are exempt.
To get there, four small changes were made in Figma **and** code:

- `Colour/neutral/350` (`#6b6b6b`) was added and `text/muted` now points at it (5.3:1 on white, 4.8:1 on the page background).
- `Colour/green/600` (`#36773a`) and `Colour/tan/600` (`#7e5628`) were added for the Success and Warning chip text.
- The unselected Segmented-control pill uses `text/primary`; reaction text uses `violet/500` and `red/300`.
- `text/link` points at `violet/500`. The default Nav item label uses `neutral/300` because it sits on the navy rail.

## Things to fix in the Figma file

- Code-syntax labels on several semantic variables are wrong (e.g. `text/white` is labelled
  `--color-text-secondary`; all `feedback/*/default` variables say `--color-feedback-error-base`).
  These tokens are generated from the variable *names*, not the labels.
- `Scale/2` has the value `0`; it is emitted as `2px` here.
- `Colour/feedback/information/sm` is a stray string variable and was skipped.
- The Secondary/Primary pill radius is a raw `20`; `--radius-lg` is `16`.
- Three values have no token and are hardcoded with a comment: the active nav item fill `#143e70`, the notification badge `#b05a36`, and the Checkbox radius `6px`.
