import { GetAllCategoriesService } from "../services/GetAllCategoriesService";


export class GetAllcategoriesController{
  async handle(Req, Res){
    const repo = new GetAllCategoriesService();

    const categories = await repo.execute();

    return Res.json(categories);
  }
}