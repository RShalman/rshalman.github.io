import { classNames } from '@utils/commons';
import { useDisableBodyScroll } from '@utils/hooks/use-disable-body-scroll';
import { useCallback, useState } from 'react';
import config from '@config/config.json';

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
      <div className={classNames(S.menuListWrapper, openMenu ? S.open : '')}>
        <ul className={S.menuList}>
          {config.menu.map(({ name, href }) => (
            <li key={name} className={S.menuItem}>
              <a href={href}>{name}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
