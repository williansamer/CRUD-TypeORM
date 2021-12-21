import { GetAllVideosService } from "../../services/video/GetAllVideosService";



export class GetAllVideosController{
  async handle(Req, Res){
    const service = new GetAllVideosService();

    const videos = await service.execute();

    return Res.json(videos)
  }

}