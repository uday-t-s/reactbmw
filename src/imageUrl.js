// builds a sized Unsplash CDN url from a photo id, used for all car photography
export function carImageUrl(photoId, width = 800) {
  return `https://images.unsplash.com/photo-${photoId}?w=${width}&q=80&auto=format&fit=crop`;
}
