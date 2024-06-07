import { z } from "zod";

const filterSchema = z.object({
  schedule: z.object({
    preset: z.string(),
    from: z.date(),
    to: z.date(),
  }),

  people: z.string().array(),

  product: z.object({
    searchType: z.string(),
    serviceName: z.string().array(),
    serviceTypeTag: z.string(),
    serviceStatusTag: z.string(),
  }),
});

type filterType = z.infer<typeof filterSchema>;

export { filterSchema };
export type { filterType };
