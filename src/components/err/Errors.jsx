
import React from 'react';
import cls from '../../assets/styles/forms/Forms.module.scss';
import Icons from '../../assets/images/icons/sprite_core_2x.png';
import classname from 'classnames';

export default function Errors({err}) {

  console.log(err)

  const errHandler = () => {
    if(err === undefined) {
      return cls.icons
    } else if (err === "err"){
      return classname(cls.err_icons, cls.icons)
    } else if(err === "success"){
      return classname(cls.ok_icons, cls.icons)
    }
  }
  return (
    <div
      style={{background: `url(${Icons})`}} 
      className={errHandler()}
    />
  )
};
