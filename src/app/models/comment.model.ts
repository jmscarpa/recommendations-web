export interface CommentModel {
  id: number;
  content: string;
  created_at: string;
  user: {
    name: string;
    picture_url: string;
  };
}
