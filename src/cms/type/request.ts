export type ContentsQuery = {
  draftKey?: string;
  offset?: number;
  limit?: number;
  orders?: string;
  q?: string;
  fields?: string;
  ids?: string;
  filters?: string;
  depth?: number;
};

export type ContentQuery = {
  draftKey?: string;
  fields?: string;
  depth?: number;
};
