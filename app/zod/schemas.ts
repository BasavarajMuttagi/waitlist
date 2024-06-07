import { boolean, z } from "zod";

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

const columnFilterSchema = z.object({
  CreatedOn: z.boolean().optional(),
  Payer: z.boolean().optional(),
  Status: z.boolean().optional(),
  Email: z.boolean().optional(),
  Phone: z.boolean().optional(),
  Service: z.boolean().optional(),
  Scheduled: z.boolean().optional(),
});
type columnFilterType = z.infer<typeof columnFilterSchema>;

export { filterSchema, columnFilterSchema };
export type { filterType, columnFilterType };
