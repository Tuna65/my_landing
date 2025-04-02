export type Option = {
  label: string;
  value: string;
};

export type SuccessFunc<T> = (value: T) => void;

export interface Post {
  id: number;
  title: string;
  category: string;
  image: any;
  slug: string;
  author: string;
  date: string;
}
