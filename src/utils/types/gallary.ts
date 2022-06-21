export type Gallary = {
  id: string;
  title: string;
  Sketch: JSX.Element;
  description: string;
  postedDate: string;
  updatedDate: string;
};

export type GallraryList = {
  [key: string]: Gallary;
};
