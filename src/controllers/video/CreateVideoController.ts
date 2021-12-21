import { CreateVideoService } from "../../services/video/CreateVideoService";


export class CreateVideoController{
  async handle(Req, Res){
    const {name, description, category_id, duration} = Req.body;

    const service = new CreateVideoService();
    const result = await service.execute({name, description, category_id, duration});

    if(result instanceof Error){
      return Res.status(400).json(result.message);
    }

    return Res.json(result);
  }
}