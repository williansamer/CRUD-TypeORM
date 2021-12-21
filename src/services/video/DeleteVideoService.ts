import { getRepository } from "typeorm";
import { Video } from "../../entities/Video";


export class DeleteVideoService{
  async execute(id: string){
    const repo = getRepository(Video);
    const video = await repo.findOne(id);

    if(!video){
      return new Error("Video does not exists!")
    };

    await repo.delete(id);

  }
}