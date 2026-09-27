import { prisma } from "../config/prisma";
import { CreateCategoryDTO, UpdateCategoryDTO } from "../types/category";

export const categoryRepository = {
  findAll: async () =>
    prisma.category.findMany({ include: { products: true } }),
  findById: async (id: number) =>
    prisma.category.findUnique({ where: { id }, include: { products: true } }),
  findByName: async (name: string) =>
    prisma.category.findUnique({ where: { name } }),
  create: async (data: CreateCategoryDTO) =>
    prisma.category.create({ data, include: { products: true } }),
  update: async (id: number, data: UpdateCategoryDTO) =>
    prisma.category.update({
      where: { id },
      data,
      include: { products: true },
    }),
  remove: async (id: number) => prisma.category.delete({ where: { id } }),
};
