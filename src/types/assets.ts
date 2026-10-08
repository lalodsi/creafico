export const basePath =
  process.env.NODE_ENV === "production" ? "/creafico" : "";

export function assetUrl(url: string) {
  if (url.startsWith("http://") || url.startsWith("https://")) return url;

  const path = url.startsWith("./")
    ? url.slice(1)
    : url.startsWith("/")
      ? url
      : `/${url}`;

  if (basePath && (path === basePath || path.startsWith(`${basePath}/`))) {
    return path;
  }

  return `${basePath}${path}`;
}
