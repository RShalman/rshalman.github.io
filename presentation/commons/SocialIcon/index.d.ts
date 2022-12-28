export type ISocialIcon = {
  imgPath: string;
  href?: string;
  name?: string;
  isBgWhite?: boolean;
  className?:string;
  dimensions?: {
    width: string,
    height: string
  }
}