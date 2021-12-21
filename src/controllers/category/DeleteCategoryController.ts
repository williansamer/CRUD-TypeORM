import { DeleteCategoryService } from "../../services/category/DeleteCategoryService";


export class DeleteCategoryController{
  async handle(Req, Res){
    const {id} = Req.params;

    const service = new DeleteCategoryService();

    const result = await service.execute(id);

    if(result instanceof Error){
      return Res.status(400).json(result.message);
    }

    return Res.status(204).end();
  }
}