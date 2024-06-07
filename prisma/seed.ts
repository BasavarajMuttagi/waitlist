const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const PeopleData = [
  {
    createdOn: "2023-12-09T10:30:00Z",
    payer: "Layla Stewart",
    status: "Active",
    email: "laylastewart@example.com",
    payerPhone: "+966503534888",
    services: "Rooftop Garden",
    scheduled: "2023-12-12T10:30:00Z",
  },
  {
    createdOn: "2023-12-10T11:00:00Z",
    payer: "John Doe",
    status: "Active",
    email: "johndoe@example.com",
    payerPhone: "+1234567890",
    services: "Yoga Retreat",
    scheduled: "2023-12-13T09:00:00Z",
  },
  {
    createdOn: "2023-12-11T14:15:00Z",
    payer: "Jane Smith",
    status: "Active",
    email: "janesmith@example.com",
    payerPhone: "+1987654321",
    services: "Personal Training Sessions",
    scheduled: "2023-12-14T16:00:00Z",
  },
  {
    createdOn: "2023-12-12T13:45:00Z",
    payer: "Tom Johnson",
    status: "Active",
    email: "tomjohnson@example.com",
    payerPhone: "+1122334455",
    services: "Luxury Retreat Center",
    scheduled: "2023-12-15T15:30:00Z",
  },
  {
    createdOn: "2023-12-13T12:00:00Z",
    payer: "Emily Davis",
    status: "Active",
    email: "emilydavis@example.com",
    payerPhone: "+9988776655",
    services: "Dance Studio Membership",
    scheduled: "2023-12-16T11:00:00Z",
  },
  {
    createdOn: "2023-12-14T09:30:00Z",
    payer: "Michael Brown",
    status: "Active",
    email: "michaelbrown@example.com",
    payerPhone: "+7766554433",
    services: "Cooking Masterclass",
    scheduled: "2023-12-17T13:30:00Z",
  },
  {
    createdOn: "2023-12-15T15:00:00Z",
    payer: "Sarah Wilson",
    status: "Active",
    email: "sarahwilson@example.com",
    payerPhone: "+5566778899",
    services: "Co-working Space",
    scheduled: "2023-12-18T14:00:00Z",
  },
  {
    createdOn: "2023-12-16T08:15:00Z",
    payer: "David Martinez",
    status: "Active",
    email: "davidmartinez@example.com",
    payerPhone: "+2233445566",
    services: "Meditation Studio",
    scheduled: "2023-12-19T09:45:00Z",
  },
  {
    createdOn: "2023-12-17T10:00:00Z",
    payer: "Jessica Garcia",
    status: "Active",
    email: "jessicagarcia@example.com",
    payerPhone: "+6677889900",
    services: "Music Production Workshop",
    scheduled: "2023-12-20T11:30:00Z",
  },
  {
    createdOn: "2023-12-18T11:30:00Z",
    payer: "Daniel Robinson",
    status: "Active",
    email: "danielrobinson@example.com",
    payerPhone: "+3344556677",
    services: "Crossfit Box",
    scheduled: "2023-12-21T10:30:00Z",
  },
  {
    createdOn: "2023-12-19T12:45:00Z",
    payer: "Ashley Thompson",
    status: "Active",
    email: "ashleythompson@example.com",
    payerPhone: "+7788990011",
    services: "Pilates Studio",
    scheduled: "2023-12-22T13:00:00Z",
  },
  {
    createdOn: "2023-12-20T09:00:00Z",
    payer: "Matthew Clark",
    status: "Active",
    email: "matthewclark@example.com",
    payerPhone: "+4455667788",
    services: "Eco-friendly Home Decor Set",
    scheduled: "2023-12-23T09:30:00Z",
  },
  {
    createdOn: "2023-12-21T10:15:00Z",
    payer: "Amanda Lewis",
    status: "Active",
    email: "amandalewis@example.com",
    payerPhone: "+9988665544",
    services: "Photography Workshop",
    scheduled: "2023-12-24T14:00:00Z",
  },
  {
    createdOn: "2023-12-22T11:00:00Z",
    payer: "James Harris",
    status: "Active",
    email: "jamesharris@example.com",
    payerPhone: "+1234432155",
    services: "Ski Resort Season Pass",
    scheduled: "2023-12-25T11:30:00Z",
  },
  {
    createdOn: "2023-12-23T12:30:00Z",
    payer: "Rebecca Young",
    status: "Active",
    email: "rebeccayoung@example.com",
    payerPhone: "+2233446677",
    services: "Aromatherapy Package",
    scheduled: "2023-12-26T12:00:00Z",
  },
  {
    createdOn: "2023-12-24T09:45:00Z",
    payer: "Ethan Walker",
    status: "Active",
    email: "ethanwalker@example.com",
    payerPhone: "+5544332211",
    services: "Creative Writing Workshop",
    scheduled: "2023-12-27T09:00:00Z",
  },
  {
    createdOn: "2023-12-25T11:30:00Z",
    payer: "Olivia Martinez",
    status: "Active",
    email: "oliviamartinez@example.com",
    payerPhone: "+6677448899",
    services: "Fitness Center Membership",
    scheduled: "2023-12-28T11:00:00Z",
  },
  {
    createdOn: "2023-12-26T10:15:00Z",
    payer: "William Lopez",
    status: "Active",
    email: "williamlopez@example.com",
    payerPhone: "+8899001122",
    services: "Couples Massage",
    scheduled: "2023-12-29T12:30:00Z",
  },
  {
    createdOn: "2023-12-27T12:00:00Z",
    payer: "Sofia Gonzalez",
    status: "Active",
    email: "sofiagonzalez@example.com",
    payerPhone: "+6655447788",
    services: "Data Science Course",
    scheduled: "2023-12-30T11:30:00Z",
  },
  {
    createdOn: "2023-12-28T13:30:00Z",
    payer: "Jackson Hall",
    status: "Active",
    email: "jacksonhall@example.com",
    payerPhone: "+7766558899",
    services: "Mindfulness Center",
    scheduled: "2023-12-31T10:00:00Z",
  },
  {
    createdOn: "2023-12-29T09:00:00Z",
    payer: "Mia Allen",
    status: "Active",
    email: "miaallen@example.com",
    payerPhone: "+3344221133",
    services: "Pottery Class Series",
    scheduled: "2024-01-01T13:30:00Z",
  },
  {
    createdOn: "2023-12-30T11:15:00Z",
    payer: "Alexander Wright",
    status: "Active",
    email: "alexanderwright@example.com",
    payerPhone: "+4455778899",
    services: "Public Speaking Course",
    scheduled: "2024-01-02T10:30:00Z",
  },
  {
    createdOn: "2023-12-31T12:45:00Z",
    payer: "Chloe Green",
    status: "Active",
    email: "chloegreen@example.com",
    payerPhone: "+9988665522",
    services: "UX Design Masterclass",
    scheduled: "2024-01-03T12:00:00Z",
  },
  {
    createdOn: "2024-01-01T10:00:00Z",
    payer: "Henry Adams",
    status: "Active",
    email: "henryadams@example.com",
    payerPhone: "+5544336677",
    services: "Sustainable Fashion Box",
    scheduled: "2024-01-04T11:30:00Z",
  },
];


const ServicesData = [
  { name: "Yoga Retreat", type: "Facility", status: "Public" },
  { name: "Photography Workshop", type: "ClassAppointment", status: "Private" },
  {
    name: "Fitness Center Membership",
    type: "PackMembership",
    status: "Public",
  },
  { name: "Art Supplies Bundle", type: "General", status: "Draft" },
  { name: "Cooking Masterclass", type: "Class", status: "Disable" },
  { name: "Wellness Spa Package", type: "PackMembership", status: "Private" },
  { name: "Outdoor Adventure Gear", type: "General", status: "Public" },
  {
    name: "Language Learning Course",
    type: "ClassAppointment",
    status: "Draft",
  },
  { name: "Meditation Studio", type: "Facility", status: "Private" },
  {
    name: "Personal Training Sessions",
    type: "ClassAppointment",
    status: "Public",
  },
  { name: "DIY Crafting Supplies", type: "General", status: "Disable" },
  { name: "Dance Studio Membership", type: "PackMembership", status: "Draft" },
  { name: "Music Production Workshop", type: "Class", status: "Private" },
  { name: "Luxury Retreat Center", type: "Facility", status: "Public" },
  { name: "Productivity App Subscription", type: "General", status: "Public" },
  { name: "Pilates Studio", type: "Facility", status: "Public" },
  {
    name: "Web Development Bootcamp",
    type: "ClassAppointment",
    status: "Private",
  },
  {
    name: "Gym Membership - Premium",
    type: "PackMembership",
    status: "Public",
  },
  { name: "Eco-friendly Home Decor Set", type: "General", status: "Draft" },
  { name: "Gourmet Wine Tasting", type: "Class", status: "Disable" },
  { name: "Couples Massage", type: "PackMembership", status: "Private" },
  { name: "Camping Equipment Bundle", type: "General", status: "Public" },
  { name: "Public Speaking Course", type: "ClassAppointment", status: "Draft" },
  { name: "Rooftop Garden", type: "Facility", status: "Private" },
  {
    name: "Life Coaching Sessions",
    type: "ClassAppointment",
    status: "Public",
  },
  { name: "Organic Gardening Kit", type: "General", status: "Disable" },
  { name: "Pool & Sauna Access", type: "PackMembership", status: "Draft" },
  { name: "Pottery Class Series", type: "Class", status: "Private" },
  { name: "Co-working Space", type: "Facility", status: "Public" },
  { name: "Project Management Tool - Pro", type: "General", status: "Public" },
  { name: "Crossfit Box", type: "Facility", status: "Public" },
  { name: "Data Science Course", type: "ClassAppointment", status: "Private" },
  { name: "Tennis Club Membership", type: "PackMembership", status: "Public" },
  { name: "Smart Home Starter Kit", type: "General", status: "Draft" },
  { name: "Sushi Making Class", type: "Class", status: "Disable" },
  { name: "Aromatherapy Package", type: "PackMembership", status: "Private" },
  { name: "Travel Photography Gear", type: "General", status: "Public" },
  {
    name: "Creative Writing Workshop",
    type: "ClassAppointment",
    status: "Draft",
  },
  { name: "Mindfulness Center", type: "Facility", status: "Private" },
  {
    name: "Nutritionist Consultation",
    type: "ClassAppointment",
    status: "Public",
  },
  { name: "Sustainable Fashion Box", type: "General", status: "Disable" },
  { name: "Rock Climbing Passes", type: "PackMembership", status: "Draft" },
  { name: "Improv Comedy Classes", type: "Class", status: "Private" },
  { name: "Podcast Recording Studio", type: "Facility", status: "Public" },
  { name: "Design Software License", type: "General", status: "Public" },
  { name: "Martial Arts Dojo", type: "Facility", status: "Public" },
  {
    name: "UX Design Masterclass",
    type: "ClassAppointment",
    status: "Private",
  },
  { name: "Golf Club Membership", type: "PackMembership", status: "Public" },
  { name: "Professional Camera Rental", type: "General", status: "Draft" },
  { name: "Molecular Gastronomy Workshop", type: "Class", status: "Disable" },
  {
    name: "Executive Health Checkup",
    type: "PackMembership",
    status: "Private",
  },
  { name: "Home Office Essentials Kit", type: "General", status: "Public" },
  { name: "Children's Art Camp", type: "ClassAppointment", status: "Draft" },
  { name: "Sensory Deprivation Tank", type: "Facility", status: "Private" },
  {
    name: "Personal Stylist Session",
    type: "ClassAppointment",
    status: "Public",
  },
  { name: "Virtual Reality Gaming Set", type: "General", status: "Disable" },
  { name: "Ski Resort Season Pass", type: "PackMembership", status: "Draft" },
  { name: "Screenwriting Workshop", type: "Class", status: "Private" },
  { name: "3D Printing Lab", type: "Facility", status: "Public" },
  { name: "Cloud Storage - Business", type: "General", status: "Public" },
];

async function main() {
  await prisma.person.createMany({ data: PeopleData });
  await prisma.service.createMany({ data: ServicesData });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
