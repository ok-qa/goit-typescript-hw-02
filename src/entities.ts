export interface ImageEntity {
  id: number;
  urls: { small: string; full: string };
  alt_description: string;
  likes: number;
}
