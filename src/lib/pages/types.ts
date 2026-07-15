export type DownloadLink = {
  label: string;
  href: string;
};

export type ManagedPage = {
  id: string;
  slug: string;
  path: string;
  menuId: string;
  productSubmenuId?: string;
  title: string;
  subheading: string;
  snippet: string;
  image: string;
  downloads: DownloadLink[];
  content: string;
  source?: "managed" | "builtin";
  builtinKey?: string;
  createdAt: string;
  updatedAt: string;
};

export type PagesStore = {
  pages: ManagedPage[];
  deletedBuiltinKeys: string[];
};
