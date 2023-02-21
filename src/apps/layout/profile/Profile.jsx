import React from 'react';
import NoAvatar from "../../../assets/images/profile/NoAvatar.png";
import { Components } from '../../../components';
import { Providers } from '../../../providers';

import cls from "../../../assets/styles/profile/Profile.module.scss";

export default function Profile() {

  const { user } = Providers.useAuth();

  return (
    <Components.Container>
      <section className={cls.profile_wrapper}>
        <section className={cls.profile_wrapper_top}>
          <div>
            <label htmlFor='file'>
              <Components.Image src={NoAvatar}/>
              <input type={"file"} id="file"/>
            </label>
          </div>
          <div>
            <section className={cls.profile_wrapper_top_name}>
              <h3>{user?.username}</h3>
              <button>
                Редактировать профиль
              </button>
            </section>
            <section className={cls.profile_wrapper_top_follow}>
              <ul>
                <li>
                  публикаций
                </li>
                <li>
                {user?.subscribers} подписчиков
                </li>
                <li>
                  {user?.subscriptions} подписок
                </li>
              </ul>
            </section>
            <section className={cls.profile_wrapper_top_login}>
              <h4>{user?.first_name} {user?.last_name}</h4>
            </section>
            <section className={cls.profile_wrapper_top_bio}>
              <p>
                {user?.bio}
              </p>
            </section>
          </div>
        </section>
        <section className={cls.profile_wrapper_botton}>
        </section>
      </section>
    </Components.Container>
  )
};
