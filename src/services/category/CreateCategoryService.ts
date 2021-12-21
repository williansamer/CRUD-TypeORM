import { getRepository } from "typeorm";
import { Category } from "../../entities/Category";

type CategoryRequest = {
  name,
  description
}

export class CreateCategoryService{
  async execute({name, description}: CategoryRequest): Promise<Category | Error>{ //: Promise<Category | Error> NÃO É OBRIGATÓRIO. É somente para mostrar que retorna uma Promise, e já que retorna 2 tipos(error e category), se colocar o Promise, tem que preparar para retornar os dois
    const repo = getRepository(Category);

    if(await repo.findOne({name})){
      return new Error("Category Already Exists!!");
    }

    const category = repo.create({name, description});

    await repo.save(category);

    return category
  }


}