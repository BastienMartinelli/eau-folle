import { useCallback, useEffect, useState } from "preact/hooks";

function useTimeTransition(start = false, time = 200) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    let timer;

    if (start) {
      setShow(true);
    } else {
      timer = setTimeout(() => {
        setShow(false);
      }, time);
    }

    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [start, time]);

  const handleTransitionEnd = useCallback(() => {
    if (!start) {
      setShow(false);
    }
  }, [start, setShow]);

  return show;
}

export default useTimeTransition;
