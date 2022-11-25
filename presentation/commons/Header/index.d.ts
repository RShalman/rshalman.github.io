import { IFunction } from '@types/commons';

export type IHeader = {
  title: string;
  className?: string;
  withTypeWriter?: boolean
  typeWriterCb?: IFunction
}