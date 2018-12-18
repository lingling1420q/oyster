export declare interface User {
  id: string;
  username: string;
}

export declare interface FeedSource {
  id: string;
  name: string;
  url: string;
}

export declare interface Feed {
  id?: number;
  title: string;
  source?: string;
  link: string;
  content: string;
  author: string;
  published: number;
}
