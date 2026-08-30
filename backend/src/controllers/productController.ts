import { Request, Response, NextFunction } from "express";
import { productService } from "../services/productService";

export const productController = {
  list: async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const products = await productService.findAll();
      res.status(200).json(products);
    } catch (error) { next(error); }
  },
  getById: async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const id = Number(req.params.id);
      const product = await productService.findById(id);
      res.status(200).json(product);
    } catch (error) { next(error); }
  },
  create: async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const product = await productService.create(req.body);
      res.status(201).json(product);
    } catch (error) { next(error); }
  },
  update: async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const id = Number(req.params.id);
      const product = await productService.update(id, req.body);
      res.status(200).json(product);
    } catch (error) { next(error); }
  },
  remove: async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const id = Number(req.params.id);
      await productService.remove(id);
      res.status(204).send();
    } catch (error) { next(error); }
  },
};
