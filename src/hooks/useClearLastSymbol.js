import { setResult } from '@/reducers/actionCreators/result';

export const useClearLastSymbol = (dispatch) => (
  result,
) => {
  dispatch(setResult(result.slice(0, -1)));
};
