import * as React from 'react';
import {
  useColorMode,
  useColorModeValue,
  IconButtonProps,
  Button,
} from '@chakra-ui/react';
import { FaMoon, FaSun } from 'react-icons/fa';

type ColorModeSwitcherProps = Omit<IconButtonProps, 'aria-label'>;

const ColorModeSwitcher: React.FC<ColorModeSwitcherProps> = (props) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const text = useColorModeValue('dark', 'light');
  const SwitchIcon = useColorModeValue(FaMoon, FaSun);

  return (
    <Button
      size="md"
      variant="ghost"
      color="current"
      marginLeft="2"
      onClick={toggleColorMode}
      leftIcon={<SwitchIcon />}
      aria-label={`Switch to ${text} mode`}
      {...props}
    >{colorMode === 'light' ? 'Dark Mode ': 'Light Mode'}</Button>
  );
};

export default ColorModeSwitcher;