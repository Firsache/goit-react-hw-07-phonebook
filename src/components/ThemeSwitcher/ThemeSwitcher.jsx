import { BsSun, BsMoon } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';

import { toggleThemeTitle } from 'redux/global/globalSlice';
import { selectThemeTitle } from 'redux/global/selectors';

import { Switcher } from './ThemeSwitcher.styled';

export function ThemeSwitcher() {
  const themeTitle = useSelector(selectThemeTitle);
  const dispatch = useDispatch();

  const toggleTheme = () => {
    dispatch(toggleThemeTitle());
  };

  return (
    <Switcher type="button" onClick={toggleTheme}>
      {themeTitle === 'light' ? <BsSun size={30} /> : <BsMoon size={30} />}
    </Switcher>
  );
}
