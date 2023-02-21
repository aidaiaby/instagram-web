import React from 'react';
import { useForm } from 'react-hook-form';
import { Components} from '../../../components';
import cls from '../../../assets/styles/register/Register.module.scss';
import Logo from '../../../assets/images/logo/insta.png';
import { formsValidate } from '../../../helpers/forms';
import { Hooks } from '../../../hooks';
import { REQUEST } from '../../../api';

export default function Register() {

  const {goToLogin} = Hooks.useLocations();
  
  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm({
    mode:'onBlur'
  });

  const onSubmit = (data) => {
    const newData = {
      ...data,
      avatar: null
    }

    if(data) {
      const request = REQUEST.CREATE_USER(newData);

      request
        .then(() => {
          goToLogin();
      })
        
    };
  
  };
  return (
    <Components.Container>
      <section className={cls.register_page}>
        <div className={cls.register_page_card} data-aos='zoom-in-right'>
          <Components.Image src={Logo}/>
          <h3>
            Зарегистрируйтесь, чтобы смотреть фото и видео ваших друзей.
          </h3>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Components.Forms.Divider>
              <Components.Forms.TextInput
                type="text"
                placeholder="Username"
                {...register("username", formsValidate())}
              />
              <Components.Forms.Errors err={errors?.username ? "err" : "success"}/>
            </Components.Forms.Divider>
            <Components.Forms.Divider>
              <Components.Forms.TextInput
                type="text"
                placeholder="First Name"
                {...register("first_name", formsValidate())}
              />
              <Components.Forms.Errors err={errors?.first_name ? "err" : "success"}/>
            </Components.Forms.Divider>
            <Components.Forms.Divider>
              <Components.Forms.TextInput
                type="text"
                placeholder="Last name"
                {...register("last_name", formsValidate())}
              />
              <Components.Forms.Errors err={errors?.last_name ?"err" : "success"}/>
            </Components.Forms.Divider>
            <Components.Forms.Divider>
              <Components.Forms.TextInput
                type="text"
                placeholder="Bio"
                {...register("bio", formsValidate())}
              />
              <Components.Forms.Errors err={errors?.bio ? "err" : "success"}/>
            </Components.Forms.Divider>
            <Components.Forms.Divider>
              <Components.Forms.TextInput
                type="email"
                placeholder="Email"
                {...register("email", formsValidate())}
              />
              <Components.Forms.Errors err={errors?.email ? "err" : "success"}/>
            </Components.Forms.Divider>
            <Components.Forms.Divider>
              <Components.Forms.TextInput
                type="password"
                placeholder="Password"
                {...register("password", formsValidate())}
              />
              <Components.Forms.Errors err={errors?.password ? "err" : "success"}/>
            </Components.Forms.Divider>
            <Components.Forms.Divider>
              <Components.Forms.TextInput
                type="password"
                placeholder="Password Repeat"
                {...register("password_repeat", formsValidate())}
              />
              <Components.Forms.Errors err={errors?.password_repeat ? "err" : "success"}/>
            </Components.Forms.Divider>

            <p className={cls.usable_service}>
              Люди, которые пользуются нашим сервисом, могли загрузить вашу контактную информацию в Instagram. <a href="https://www.facebook.com/help/instagram/261704639352628">Подробнее</a>
            </p>
            <Components.Forms.Divider>
              <Components.Forms.AuthSubmit location={"Регистрация"}/>
            </Components.Forms.Divider>
          </form>
        </div>
        <Components.Forms.AuthNavigate location="register"/>
      </section>
    </Components.Container>
  )
};
