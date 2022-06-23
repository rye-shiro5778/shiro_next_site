export type Gallary = {
  id: string;
  title: string;
  sketch: JSX.Element;
  card: JSX.Element;
  ogp?: ImageData;
  description: string;
  postedDate: string;
  updatedDate: string;
  tags?: string[];
};

export type GallraryList = {
  [key: string]: Gallary;
};
