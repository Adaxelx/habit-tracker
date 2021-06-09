import { useAlertContext } from 'context';
import { useCallback, useRef, useState } from 'react';
import { AlertTypes } from 'utils';

const { SUCCESS } = AlertTypes;

interface Options {
  request: Function;
  messageSuccess?: string;
  refresh?: Function | Array<Function>;
}

type ReturnTuple = [any, boolean];

const useMutation = (options: Options): ReturnTuple => {
  const { request, messageSuccess, refresh } = options;

  const [loading, setLoading] = useState(false);
  const alertC = useRef(useAlertContext());

  const mutate = useCallback(async (data: any) => {
    setLoading(true);
    try {
      await request(data);

      alertC.current.showAlert(messageSuccess, SUCCESS);
      if (refresh) {
        if (Array.isArray(refresh)) {
          refresh.forEach((func) => func());
        } else {
          refresh();
        }
      }
    } catch (err) {
      alertC.current.showAlert(err.message);
    }
    setLoading(false);
  }, []);

  return [mutate, loading];
};

export default useMutation;
