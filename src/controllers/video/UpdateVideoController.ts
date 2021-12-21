import { UpdateVideoService } from "../../services/video/UpdateVideoService";


export class UpdateVideoController{
  async handle(Req, Res){
    const {id} = Req.params;
    const {name, description, category_id, duration} = Req.body;

    const service = new UpdateVideoService();

    const result = await service.execute({id, name, description, category_id, duration})

    if(result instanceof Error){
      return Res.status(400).json(result.message);
    }

    return Res.json(result);

  }
}