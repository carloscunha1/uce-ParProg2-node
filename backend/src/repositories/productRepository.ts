import { prisma } from "../config/prisma";
import { CreateProductDTO, UpdateProductDTO } from "../types/product";

export const productRepository = {
  findAll: async () => prisma.product.findMany({ include: { category: true } }),
  findById: async (id: number) =>
    prisma.product.findUnique({ where: { id }, include: { category: true } }),
  create: async (data: CreateProductDTO) => prisma.product.create({ data }),
  update: async (id: number, data: UpdateProductDTO) =>
    prisma.product.update({ where: { id }, data }),
  remove: async (id: number) => prisma.product.delete({ where: { id } }),
};
