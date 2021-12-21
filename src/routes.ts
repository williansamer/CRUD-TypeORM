import { Router } from "express";

import { CreateCategoryController } from "./controllers/category/CreateCategoryController";
import { GetAllCategoriesController } from "./controllers/category/GetAllCategoriesController";
import { DeleteCategoryController } from "./controllers/category/DeleteCategoryController";
import { UpdateCategoryController } from "./controllers/category/UpdateCategoryController";

import { CreateVideoController } from "./controllers/video/CreateVideoController";
import { GetAllVideosController } from "./controllers/video/GetAllVideosController";
import { DeleteVideoController } from "./controllers/video/DeleteVideoController";
import { UpdateVideoController } from "./controllers/video/UpdateVideoController";

const routes = Router();

routes.post('/categories', new CreateCategoryController().handle);
routes.get('/categories', new GetAllCategoriesController().handle);
routes.delete('/category/:id', new DeleteCategoryController().handle);
routes.put('/category/:id', new UpdateCategoryController().handle);

routes.post('/videos', new CreateVideoController().handle);
routes.get('/videos', new GetAllVideosController().handle);
routes.delete('/video/:id', new DeleteVideoController().handle);
routes.put('/video/:id', new UpdateVideoController().handle);

export {routes};