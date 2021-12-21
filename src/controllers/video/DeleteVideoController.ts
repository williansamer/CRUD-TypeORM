import { DeleteVideoService } from "../../services/video/DeleteVideoService";


export class DeleteVideoController{
  async handle(Req, Res){
    const {id} = Req.params;

    const service = new DeleteVideoService();

    const video = await service.execute(id);

    if(video instanceof Error){
      return Res.json(video.message);
    }

    return Res.status(204).end();
  }
}