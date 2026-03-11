import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import type { FetchedTerminalDataType } from 'src/types/slices';
import axios from 'axios';
import { actions } from '../slices/index';
import routes from '../routes';
import { AppDispatch, RootState } from '../slices/index';
import { UseRunButtonReturn } from '../types/hooks';

const { runCode } = actions;


const useRunButton = (): UseRunButtonReturn => {
  const dispatch: AppDispatch = useDispatch();
  const codeExecutionState = useSelector(
    (state: RootState) => state.terminal.codeExecutionState,
  );
  const snippet = useSelector((state: RootState) => state.editor.snippetData);
  const code = useSelector((state: RootState) => state.editor.code);
  const currentLanguage = useSelector(
    (state: RootState) => state.languages.currentLanguage,
  );
  const onClick = useCallback(
    () =>
      dispatch(
        runCode({
          ...snippet,
          code,
          language: snippet.language ?? currentLanguage,
        } as FetchedTerminalDataType),
      ),
    [dispatch, code, snippet, currentLanguage],
  );
  const update = async (id: number, name: string) => {
    const response = await axios.put(routes.updateSnippetPath(id), {
      code,
      name,
    });
    dispatch(actions.updateSavedCode(code));
    return response;
  };

  const disabled = codeExecutionState === 'executing';

  return {
    onClick,
    update,
    disabled,
    code,
  };
};

export default useRunButton;


