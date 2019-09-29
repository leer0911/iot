import { PaperProps } from '../Paper';

export interface CardProps extends PaperProps {
  raised?: boolean;
}

declare const Card: React.ComponentType<CardProps>;

export default Card;
