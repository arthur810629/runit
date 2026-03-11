import { useSelector } from 'react-redux';
import { RootReducerType } from '../../types/slices';

export const useTerminal = () => {
  const output = useSelector((state: RootReducerType) => state.terminal.output);

  return {
    output,
  };
};
