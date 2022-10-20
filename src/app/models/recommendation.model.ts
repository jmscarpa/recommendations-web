import { CategoryModel } from './category.model';
import { CommentModel } from 'src/app/models/comment.model';

export interface RecommendationModel {
  id: number;
  name: string;
  description: string;
  image_url: string;
  category: CategoryModel;
  comments: CommentModel[];
}
