type ClassArg = string | false | undefined | null;

/**
 * className aggregation function
 */
export function cx(...args: ClassArg[]) {
  let css: string[] = [];
  for (let i = 0; i < args.length; i++) {
    const style = args[i];
    if (style) css.push(style);
  }
  return css.join(" ");
}

export default cx;
