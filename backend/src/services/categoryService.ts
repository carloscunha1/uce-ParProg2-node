import { categoryRepository } from "../repositories/categoryRepository";
import { CreateCategoryDTO, UpdateCategoryDTO } from "../types/category";
import { AppError } from "../middlewares/AppError";

const validateName = (name: string | undefined): void => {
  if (!name || name.trim() === "")
    throw new AppError("Nome é obrigatório", 400);
};

export const categoryService = {
  findAll: async () => categoryRepository.findAll(),
  findById: async (id: number) => {
    const category = await categoryRepository.findById(id);
    if (!category) throw new AppError("Categoria não encontrada", 404);
    return category;
  },
  create: async (data: CreateCategoryDTO) => {
    validateName(data.name);
    const existing = await categoryRepository.findByName(data.name.trim());
    if (existing) throw new AppError("Categoria já cadastrada", 409);
    return categoryRepository.create({ ...data, name: data.name.trim() });
  },
  update: async (id: number, data: UpdateCategoryDTO) => {
    await categoryService.findById(id);
    if (data.name !== undefined) {
      validateName(data.name);
      const existing = await categoryRepository.findByName(data.name.trim());
      if (existing && existing.id !== id)
        throw new AppError("Categoria já cadastrada", 409);
      data = { ...data, name: data.name.trim() };
    }
    return categoryRepository.update(id, data);
  },
  remove: async (id: number) => {
    await categoryService.findById(id);
    return categoryRepository.remove(id);
  },
};
