import { CategoryModel } from './category.model';

export interface RecommendationModel {
  id: number;
  name: string;
  description: string;
  image_url: string;
  category: CategoryModel;
}
