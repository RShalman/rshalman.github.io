export type IButton = {
  text: string;
  onCLick?: (...args) => unknown
  className?: string
}