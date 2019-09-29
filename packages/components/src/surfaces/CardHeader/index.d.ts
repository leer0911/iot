import { TypographyProps } from '../../display/Typography';

export interface CardHeaderProps {
  action?: React.ReactNode;
  avatar?: React.ReactNode;
  component?: React.ElementType<React.HTMLAttributes<HTMLDivElement>>;
  disableTypography?: boolean;
  subheader?: React.ReactNode;
  subheaderTypographyProps?: Partial<TypographyProps>;
  title?: React.ReactNode;
  titleTypographyProps?: Partial<TypographyProps>;
}

declare const CardHeader: React.ComponentType<CardHeaderProps>;

export default CardHeader;
