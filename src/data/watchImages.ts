export interface WatchImage {
  id: string;
  url: string;
  alt: string;
}

export const watchImages: WatchImage[] = Array.from({ length: 32 }, (_, i) => {
  const n = String(i + 1).padStart(2, '0');
  return {
    id: `watch-${n}`,
    url: `/watch-images/watch-${n}.jpg`,
    alt: `Huke Times wrist watch ${n}`,
  };
});
