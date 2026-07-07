type OptimizedImage = {
  src: string;
  srcSet?: string;
  sizes?: string;
  width: number;
  height: number;
};

const optimizedImageNames = new Set(['hero_bonsai', 'kaede', 'kuromatsu']);

export const getOptimizedImage = (imageUrl: string): OptimizedImage => {
  const match = imageUrl.match(/^\/([a-z_]+)(?:-\d+)?\.(?:png|jpe?g)$/);
  const name = match?.[1];

  if (!name || !optimizedImageNames.has(name)) {
    return {
      src: imageUrl,
      width: 1024,
      height: 1024,
    };
  }

  return {
    src: `/${name}-520.jpg`,
    srcSet: `/${name}-360.jpg 360w, /${name}-520.jpg 520w, /${name}-720.jpg 720w`,
    sizes: '(max-width: 640px) calc(100vw - 36px), (max-width: 1024px) 50vw, 360px',
    width: 520,
    height: 520,
  };
};
