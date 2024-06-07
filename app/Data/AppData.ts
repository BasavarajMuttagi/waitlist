const PeopleData = [
  { name: "John Doe", tag: "Payer" },
  { name: "Jane Smith", tag: "Attendee" },
  { name: "Michael Johnson", tag: "Payer" },
  { name: "Emily Davis", tag: "Attendee" },
  { name: "Robert Wilson", tag: "Payer" },
  { name: "Sophia Anderson", tag: "Attendee" },
  { name: "David Taylor", tag: "Payer" },
  { name: "Olivia Thomas", tag: "Attendee" },
  { name: "Joseph Moore", tag: "Payer" },
  { name: "Emma Martin", tag: "Attendee" },
  { name: "William Thompson", tag: "Payer" },
  { name: "Isabella Garcia", tag: "Attendee" },
  { name: "Daniel Martinez", tag: "Payer" },
  { name: "Ava Rodriguez", tag: "Attendee" },
  { name: "Matthew Hernandez", tag: "Payer" },
  { name: "Mia Gonzalez", tag: "Attendee" },
  { name: "Andrew Perez", tag: "Payer" },
  { name: "Abigail Sanchez", tag: "Attendee" },
  { name: "Joshua Ramirez", tag: "Payer" },
  { name: "Avery Torres", tag: "Attendee" },
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
];

const ScheduleData = [
  "All",
  "This month",
  "Last month",
  "This quarter",
  "2 quarter ago",
  "This year",
  "Last Year",
];

const ServiceType = [
  "Show all service type",
  "Class",
  "Appointment",
  "Facility",
  "Class Pack",
  "Membership",
  "General items",
];

const Status = ["Show all", "Public", "Private", "Disable", "Draft"];
const ProfileUrl =
  "https://s3-alpha-sig.figma.com/img/50bf/8335/ed36576c36a0ca9f2f12b142cec2231f?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WLJrDcPNwLeXl1fqOW9QH6WBak0JztYdJQoreyNZTv~WNzqoB6NIKmQbmJ549bbX2J3YgQSvbpvUVc26AtIQwAR7gBW-8423vbWmxX27y80kAneVljohzH7Ackx~BpBnYUtBzMrvh9QsKwyZWItZYKbaffFNXWTFteRzD0moBEMxeRq4XL-2SURMTm7n1doYAztaYGwhXRzt4SIQUR4rqd5oCCbY~Vgh4-KPuYZjDlH-WzEbBbj090XD-v6rT-lSAaq7dFzQCuCEj-5JU1N65e2GyuBdIE~c8AjEIuA-v7grY8H4TlJUL8pdL-6LOoGkVup1nddx41OLPaQs0qKEVg__";
export {
  PeopleData,
  ServicesData,
  ScheduleData,
  ServiceType,
  Status,
  ProfileUrl,
};
