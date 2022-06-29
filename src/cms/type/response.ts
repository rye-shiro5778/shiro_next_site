type Reference<T, R> = T extends 'get' ? R : string | null;
interface GetsType<T> {
  contents: T[];
  totalCount: number;
  offset: number;
  limit: number;
}
type DateType = {
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
};
type Structure<T, P> = T extends 'get'
  ? { id: string } & DateType & Required<P>
  : T extends 'gets'
  ? GetsType<{ id: string } & DateType & Required<P>>
  : Partial<DateType> & (T extends 'patch' ? Partial<P> : P);

export type tags<T='get'> = Structure<
T,
{
  /**
   * タグ名
   */
  name: string
}>

export type categories<T='get'> = Structure<
T,
{
  /**
   * カテゴリ名
   */
  name?: string
}>

export type blogs<T='get'> = Structure<
T,
{
  /**
   * タイトル
   */
  title: string
  /**
   * 説明
   */
  description?: string
  /**
   * 内容
   */
  content: string
  /**
   * アイキャッチ
   */
  eyecatch?: { url: string, width: number, height: number }
  /**
   * カテゴリ
   */
  category: Reference<T,unknown>
  /**
   * タグリスト
   */
  tags?: Reference<T,unknown>[]
}>


export interface EndPoints {
  get: {
    tags: tags<'get'>
    categories: categories<'get'>
    blogs: blogs<'get'>
  }
  gets: {
    tags: tags<'gets'>
    categories: categories<'gets'>
    blogs: blogs<'gets'>
  }
  post: {
    tags: tags<'post'>
    categories: categories<'post'>
    blogs: blogs<'post'>
  }
  put: {
    tags: tags<'put'>
    categories: categories<'put'>
    blogs: blogs<'put'>
  }
  patch: {
    tags: tags<'patch'>
    categories: categories<'patch'>
    blogs: blogs<'patch'>
  }
}
