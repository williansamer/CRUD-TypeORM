import { GetAllCategoriesService } from "../../services/category/GetAllCategoriesService";


export class GetAllCategoriesController{
  async handle(Req, Res){
    const service = new GetAllCategoriesService();

    const categories = await service.execute();

    return Res.json(categories);
  }
}