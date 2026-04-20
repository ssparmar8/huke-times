export function classNames(...classes: unknown[]): string {
  return classes.filter(Boolean).join(' ')
}

/** Generate a srcset string for Unsplash image URLs at 400w, 800w, 1200w */
export function unsplashSrcSet(url: string): string {
  try {
    const u = new URL(url);
    return [400, 800, 1200]
      .map(w => { u.searchParams.set('w', String(w)); return `${u.toString()} ${w}w`; })
      .join(', ');
  } catch {
    return '';
  }
}
