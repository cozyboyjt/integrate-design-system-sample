import type { NavbarItem } from '../components/Navigation/Navigation';
import {
  CommunityFilledIcon,
  CommunityIcon,
  CoursesIcon,
  HomeFilledIcon,
  HomeIcon,
  SessionsIcon,
} from '../icons';
import logoSrc from '../assets/integrate-logo.png';
import avatarSrc from '../assets/avatar-ashley.jpg';

/** Navbar items with the glyphs from Figma. The active item swaps to its filled glyph. */
export const navItems: NavbarItem[] = [
  { id: 'home', label: 'Home', icon: <HomeIcon />, activeIcon: <HomeFilledIcon /> },
  { id: 'courses', label: 'Courses', icon: <CoursesIcon /> },
  { id: 'sessions', label: 'Sessions', icon: <SessionsIcon /> },
  { id: 'community', label: 'Community', icon: <CommunityIcon />, activeIcon: <CommunityFilledIcon /> },
];

export const topBarProps = {
  logo: <img src={logoSrc} alt="Integrate" width={160} height={34} style={{ display: 'block' }} />,
  userName: 'Ashley Zahabian',
  userRole: 'Admin',
  avatarSrc,
  notificationCount: 6,
};
