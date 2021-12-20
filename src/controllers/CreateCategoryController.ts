import { CreateCategoryService } from "../services/CreateCategoryService";


export class CreateCategoryController{
  async handle(Req, Res){
    const {name, description} = Req.body;

    const service = new CreateCategoryService();

    const result = await service.execute({name, description});

    if(result instanceof Error){
      return Res.status(400).json(result.message);
    }

    return Res.json(result);
  }
}