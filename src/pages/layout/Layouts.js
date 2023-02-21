import React from 'react';
import { Components } from '../../components';
import { Route, Routes as Switch } from 'react-router-dom';
import { LayoutPages } from '../Lazy';
import { Layout } from '../../services/path';
import { Providers } from '../../providers';
import { Hooks } from '../../hooks';


export default function Layouts() {

  const {token} = Providers.useAuth();

  const {goToLogin} = Hooks.useLocations();

  React.useEffect(() => {
    if(!token){
      goToLogin();
    }
  }, [token]);
  
  return (
    <React.Fragment>
    <section className={"layout_row"}>
      <div className='layout_sidebar'>
        <Components.Sidebar/>
      </div>
      <div className='layout_routers'>
        <Switch>
          <Route path={Layout.home} element={<LayoutPages.Home/>}/>
          <Route path={Layout.profile} element={<LayoutPages.Profile/>}/>
        </Switch>
      </div>
    </section>
  </React.Fragment>
  )
};
