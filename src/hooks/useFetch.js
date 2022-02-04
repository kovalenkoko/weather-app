import camelCase from "camelcase";
import { apiActions } from "modules/api/actions";
import { selectApiState } from "modules/api/selectors";
import { useCallback, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";

const useFetch = (endpoint, options) => {
  const dispatch = useDispatch();
  const apiState = useSelector(selectApiState);

  const performFetch = useCallback(
    (data) => dispatch(apiActions.fetch(endpoint, options, data)),
    [endpoint, dispatch, options]
  );
  const response = useMemo(
    () => apiState[camelCase(endpoint)],
    [apiState, endpoint]
  );
  return { response, performFetch };
};

export default useFetch;
