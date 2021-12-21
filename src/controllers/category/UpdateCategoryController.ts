import { UpdateCategoryService } from "../../services/category/UpdateCategoryService";


export class UpdateCategoryController{
  async handle(Req, Res){
    const {id} = Req.params;
    const {name, description} = Req.body;

    const service = new UpdateCategoryService();

    const result = await service.execute({id, name, description});

    if(result instanceof Error){
      return Res.status(400).json(result.message);
    }

    return Res.json(result);

  }
}