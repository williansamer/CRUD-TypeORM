import { getRepository } from "typeorm"
import { Video } from "../../entities/Video";
import { Category } from "../../entities/Category";

type VideosRequest = {
  name,
  description,
  category_id,
  duration
}


export class CreateVideoService{
  async execute({name, description, category_id, duration}: VideosRequest): Promise<Video | Error>{
    const repo = getRepository(Video);
    const repoCategory = getRepository(Category);

    if(await repo.findOne({name})){
      return new Error("Video already exists!")
    }
    if(!(await repoCategory.findOne(category_id))){
      return new Error("Category does not exists!")
    }

    const video = repo.create({
      name,
      description,
      category_id,
      duration
    })

    await repo.save(video);

    return video;

  }
}