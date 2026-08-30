import { prisma } from "../config/prisma";
import { CreateProductDTO, UpdateProductDTO } from "../types/product";

export const productRepository = {
  findAll: async () => prisma.product.findMany(),
  findById: async (id: number) => prisma.product.findUnique({ where: { id } }),
  create: async (data: CreateProductDTO) => prisma.product.create({ data }),
  update: async (id: number, data: UpdateProductDTO) => prisma.product.update({ where: { id }, data }),
  remove: async (id: number) => prisma.product.delete({ where: { id } }),
};
