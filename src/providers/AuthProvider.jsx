import React from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { CiSaveUp2 } from 'react-icons/ci';
import { BsMoon } from 'react-icons/bs';
import { VscSignOut } from 'react-icons/vsc';
import { REQUEST } from '../api';

export default function AuthProvider({children}) {

  const [token, setToken] = React.useState(null);
  const [state, setState] = React.useState("");
  const [user, setUser] = React.useState(null);

  const getToken = React.useCallback(() => {
    const tokenData = localStorage.getItem("access");

    if(tokenData){
      setToken(tokenData)
    } else{
      setToken(null)
    }
  }, []);

  const getUser = React.useCallback(() => {
    const request = REQUEST.GET_CURRENT_USER();

    request
    .then(res => {
      const data = res.data;

      setUser(data);
    })
  }, []);

  React.useEffect(() => {
    getToken();
    getUser();
  }, [getToken, state, getUser]);

  const logOut = React.useCallback(() => {
    setToken(null);
    setState("Logged out");
    localStorage.clear();
  }, []);

  const OptionList = React.useCallback(() => {
    return [
      {
        id:1,
        caption: "Сохраненные",
        icon: CiSaveUp2
      },
      {
        id:2,
        caption: "Переключить тему",
        icon: BsMoon
      },
      {
        id:3,
        caption: "Выйти",
        icon: VscSignOut,
        event: () => logOut()
      }
    ];
  }, [logOut])

  const values = React.useMemo(() => ({
    token,
    setState,
    logOut,
    OptionList,
    user
  }), 
  [
    token, 
    setState, 
    logOut, 
    OptionList, 
    user
  ]);

  return (
    <AuthContext.Provider value={values}>
      {children}
    </AuthContext.Provider>
  )
};
