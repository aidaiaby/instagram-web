import { AiFillHome, AiOutlineHeart, AiOutlineSearch } from 'react-icons/ai';
import { BsCameraReels } from 'react-icons/bs';
import { FiEdit3 } from 'react-icons/fi';
import { RxHamburgerMenu } from 'react-icons/rx';
import { BiUserCircle } from 'react-icons/bi';
import { Layout } from '../services/path';

export const SidebarList = [
  {
    id: 1,
    caption: "Главная",
    icon: AiFillHome
  },
  {
    id: 2,
    caption: "Поисковой запрос",
    icon: AiOutlineSearch
  },
  {
    id: 3,
    caption: "Reels",
    icon: BsCameraReels
  },
  {
    id: 4,
    caption: "Уведомления",
    icon: AiOutlineHeart
  },
  {
    id: 5,
    caption: "Создать",
    icon: FiEdit3
  },
  {
    id: 55,
    caption: "Профиль",
    icon: BiUserCircle,
    route: Layout.profile
  },
  {
    id: 6,
    caption: "Еще",
    icon: RxHamburgerMenu
  }
];