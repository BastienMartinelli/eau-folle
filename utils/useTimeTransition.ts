import { useEffect, useState } from "react";

function useTimeTransition(start = false, time = 200) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timer;

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

  return show;
}

export default useTimeTransition;
