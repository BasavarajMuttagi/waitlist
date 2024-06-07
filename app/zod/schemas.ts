import { z } from "zod";

const filterSchema = z.object({
  schedule: z.object({
    preset: z.string().optional(),
    from: z.date().optional(),
    to: z.date().optional(),
  }),
  people: z.string().array().optional(),
  product: z.object({
    searchType: z.string().optional(),
    serviceName: z.string().array().optional(),
    serviceTypeTag: z.string().optional(),
    serviceStatusTag: z.string().optional(),
  }),
});

type filterType = z.infer<typeof filterSchema>;

export { filterSchema };
export type { filterType };
