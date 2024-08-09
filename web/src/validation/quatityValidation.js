import { z } from "zod";

export const quantitySchema = z
  .number()
  .min(1, "Selecione no mínimo um produto.")
  .max(10, "Produto máximo atingido.");
