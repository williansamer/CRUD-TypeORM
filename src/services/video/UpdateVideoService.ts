import { getRepository } from "typeorm"
import { Category } from "../../entities/Category";
import { Video } from "../../entities/Video"

type VideoRequestUpdate = {
  id,
  name,
  description,
  category_id,
  duration
}

export class UpdateVideoService{
  async execute({id, name, description, category_id, duration}: VideoRequestUpdate){
    const repo = getRepository(Video);
    const repoCategory = getRepository(Category);
    
    const video = await repo.findOne(id);
    const category = await repoCategory.findOne(category_id);

    if(!video){
      return new Error("Video does not Exists!")
    }
    if(!category){
      return new Error("Category does not Exists!")
    }

    video.name = name ? name : video.name;
    video.description = description ? description : video.description;
    video.category_id = category_id ? category_id : video.category_id;
    video.duration = duration ? duration : video.duration;

    await repo.save(video);

    return video;
  }
}