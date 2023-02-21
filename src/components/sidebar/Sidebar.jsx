import React from 'react';
import { Components } from '..';
import cls from '../../assets/styles/sidebar/Sidebar.module.scss';
import Logo from '../../assets/images/logo/insta.png';
import { SidebarList } from '../../utils/list';
import { NavLink , Link} from 'react-router-dom';
import OptionModal from './OptionModal';


export default function Sidebar() {

  const [showOption, setShowOption] = React.useState(false);

  const bottomList = SidebarList[6];

  const handleOption = () => setShowOption(prev => !prev);

  return (
    <section className={cls.sidebar_wrapper}>
      <div className={cls.sidebar_wrapper_content}>
        <Components.Image src={Logo}/>

        <section className={cls.sidebar_wrapper_content_list}>
          <ul>
            {SidebarList.slice(0,6).map(item => (
                <li key={item.id}>
                  <NavLink 
                    className={({ isActive}) => isActive ? cls.activeList : "" } 
                    to={item.route}
                  >
                    <item.icon/>
                    {item.caption}
                  </NavLink>
                </li>
              ) )}
          </ul>
          <ul>
            <li onClick={handleOption}>
              <Link>
                <bottomList.icon/>
                {bottomList.caption}
              </Link>
            </li>
          </ul>
        </section>
      </div>
      <OptionModal isOpen={showOption}/>
    </section>
  )
};
