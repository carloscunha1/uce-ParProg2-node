import { productRepository } from "../repositories/productRepository";
import { CreateProductDTO, UpdateProductDTO } from "../types/product";
import { AppError } from "../middlewares/AppError";
import { categoryRepository } from "../repositories/categoryRepository";

export const productService = {
  findAll: async () => productRepository.findAll(),
  findById: async (id: number) => {
    const product = await productRepository.findById(id);
    if (!product) throw new AppError("Produto não encontrado", 404);
    return product;
  },
  create: async (data: CreateProductDTO) => {
    if (!data.name || data.name.trim() === "")
      throw new AppError("Nome é obrigatório", 400);
    if (data.price === undefined || data.price === null || data.price < 0)
      throw new AppError("Preço é obrigatório", 400);
    if (data.categoryId !== undefined) {
      const category = await categoryRepository.findById(data.categoryId);
      if (!category) throw new AppError("Categoria não encontrada", 404);
    }
    return productRepository.create(data);
  },
  update: async (id: number, data: UpdateProductDTO) => {
    const product = await productRepository.findById(id);
    if (!product) throw new AppError("Produto não encontrado", 404);
    if (data.categoryId !== undefined) {
      const category = await categoryRepository.findById(data.categoryId);
      if (!category) throw new AppError("Categoria não encontrada", 404);
    }
    return productRepository.update(id, data);
  },
  remove: async (id: number) => {
    const product = await productRepository.findById(id);
    if (!product) throw new AppError("Produto não encontrado", 404);
    return productRepository.remove(id);
  },
};
