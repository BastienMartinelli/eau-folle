import { useEffect, useState } from "preact/hooks";

function createQuery(
  queryString: string,
  onMatchChange: (matches: boolean) => void
) {
  const queryList = window.matchMedia(queryString);

  function handleQueryChange(mql: MediaQueryListEvent) {
    return onMatchChange(mql.matches);
  }

  onMatchChange(queryList.matches);

  queryList.addEventListener("change", handleQueryChange);

  return () => {
    queryList.removeEventListener("change", handleQueryChange);
  };
}

/**
 * Hook managing a state variable corresponding to the
 * result of a given media query string
 * @param queryString the media query string
 */
function useMediaQuery(queryString: string) {
  const [matching, setMatching] = useState<boolean | undefined>();

  useEffect(() => {
    return createQuery(queryString, setMatching);
  }, [queryString]);

  return matching;
}

/**
 * Is mobile hook
 */
export function useIsMobile() {
  return useMediaQuery("(max-width: 540px)");
}

export default useMediaQuery;
