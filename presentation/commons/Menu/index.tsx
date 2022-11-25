import { classNames } from '@utils/commons';
import { useDisableBodyScroll } from '@utils/hooks/use-disable-body-scroll';
import { useCallback, useState } from 'react';
import config from '@config/config.json';
import { Link } from 'react-router-dom';

import S from './index.module.scss';

export const Menu = () => {
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const toggleMenu = useCallback(() => setOpenMenu((prev) => !prev), []);

  useDisableBodyScroll(openMenu);

  return (
    <div className={S.menu}>
      <div
        className={classNames(S.menuButton, openMenu ? S.open : '')}
        onClick={toggleMenu}
      />
      <nav className={classNames(S.menuListWrapper, openMenu ? S.open : '')}>
        <ol className={S.menuList}>
          {config.menu.map(({ name, href }) => (
            <Link key={name} to={href}>
              <li key={name} className={S.menuItem}>
                {name}
              </li>
            </Link>
          ))}
        </ol>
      </nav>
    </div>
  );
};
