export interface CardMediaProps {
  image?: string;
  src?: string;
  defaultComponent: D;
}

declare const CardMedia: React.ComponentType<CardMediaProps>;

export default CardMedia;
