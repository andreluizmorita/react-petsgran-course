import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';

import styles from './UserHeaderNav.module.css';

import { ReactComponent as SVGConta } from '../../assets/feed.svg';
import { ReactComponent as SVGEstatisticas } from '../../assets/estatisticas.svg';
import { ReactComponent as SVGFoto } from '../../assets/adicionar.svg';
import { ReactComponent as SVGSair } from '../../assets/sair.svg';
import useMedia from '../../hooks/useMedia';

const UserHeaderNav = () =>{
  const { userLogout } = React.useContext(UserContext);

  const mobile = useMedia('(max-width: 40rem)');
  const [mobileMenu, setMobileMenu] = React.useState(false);

  const { pathname } = useLocation();
  React.useEffect(() => {
    setMobileMenu(false);
  }, [pathname]);

  return (
    <>
      {mobile && (
        <button 
          aria-label="Menu"
          onClick={() =>setMobileMenu(!mobileMenu)}
          className={`${styles.mobileButton} ${
            mobileMenu && styles.mobileButtonActive
          }`}
        ></button>
      )}

      <nav
        className={`${mobile ? styles.navMobile : styles.nav} ${
          mobileMenu && styles.navMobileActive
        }`}
      >
        <NavLink to="/conta" end activeClassName={styles.active}>
          <SVGConta /> 
          {mobile && 'Minhas Fotos'}
        </NavLink>
        <NavLink to="/conta/estatisticas" activeClassName={styles.active}>
          <SVGEstatisticas /> 
          {mobile && 'Estatíticas'}
        </NavLink>
        <NavLink to="/conta/postar" activeClassName={styles.active}>
          <SVGFoto /> 
          {mobile && 'Adicionar Foto'}
        </NavLink>

        <button onClick={userLogout}>
          <SVGSair /> 
          {mobile && 'Sair'}
        </button>
      </nav>
    </>
  );
}
export default UserHeaderNav;