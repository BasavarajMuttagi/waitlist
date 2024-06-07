import ColumnHeader from "./ColumnHeader";
import {
  Calendar,
  Circle,
  Dot,
  Hash,
  User,
} from "@phosphor-icons/react/dist/ssr";
import StatusBadge from "./StatusBadge";

const tableData = [
  {
    createdOn: "Sun, 07 Jan 2024 2:42 PM",
    payer: "Theodore T.C. Calvin",
    status: "Lead",
    email: "theodore@gmail.com",
    payerPhone: "+91 +966559188876",
    services: "Private Language Session",
    scheduled: "Sun, 07 Jan 2024 2:42 PM",
  },
  {
    createdOn: "Sat, 06 Jan 2024 2:42 PM",
    payer: "Hannibal Smith",
    status: "Active",
    email: "hannibalsmith@gmail.com",
    payerPhone: "+91 +966577632254",
    services: "Swim beginner for class new Session",
    scheduled: "Sun, 07 Jan 2024 2:42 PM",
  },
  {
    createdOn: "Fri, 05 Jan 2024 2:42 PM",
    payer: "April Curtis",
    status: "Inactive",
    email: "aprilcurtis@gmail.com",
    payerPhone: "+91 +966558441503",
    services: "Fitness Session",
    scheduled: "Sat, 06 Jan 2024 2:42 PM",
  },
  {
    createdOn: "Thu, 04 Jan 2024 2:42 PM",
    payer: "Michael Knight",
    status: "Active",
    email: "smith@gmail.com",
    payerPhone: "+91 +966536605363",
    services: "Aerobics Session",
    scheduled: "Sun, 07 Jan 2024 2:42 PM",
  },
  {
    createdOn: "Wed, 03 Jan 2024 2:42 PM",
    payer: "Templeton Peck",
    status: "Active",
    email: "michaelknight@gmail.com",
    payerPhone: "+91 +966503534287",
    services: "Boxing Session",
    scheduled: "Fri, 05 Jan 2024 2:42 PM",
  },
  {
    createdOn: "Tue, 02 Jan 2024 2:42 PM",
    payer: "John Doe",
    status: "Lead",
    email: "johndoe@example.com",
    payerPhone: "+91 +966559188800",
    services: "Personal Training Session",
    scheduled: "Sat, 06 Jan 2024 2:42 PM",
  },
  {
    createdOn: "Mon, 01 Jan 2024 2:42 PM",
    payer: "Jane Smith",
    status: "Active",
    email: "janesmith@example.com",
    payerPhone: "+91 +966577632200",
    services: "Yoga Session",
    scheduled: "Sun, 07 Jan 2024 2:42 PM",
  },
  {
    createdOn: "Sun, 31 Dec 2023 2:42 PM",
    payer: "Alex Johnson",
    status: "Inactive",
    email: "alexjohnson@example.com",
    payerPhone: "+91 +966558441500",
    services: "Pilates Session",
    scheduled: "Fri, 05 Jan 2024 2:42 PM",
  },
  {
    createdOn: "Sat, 30 Dec 2023 2:42 PM",
    payer: "Emily Davis",
    status: "Active",
    email: "emilydavis@example.com",
    payerPhone: "+91 +966536605300",
    services: "Zumba Session",
    scheduled: "Sun, 07 Jan 2024 2:42 PM",
  },
  {
    createdOn: "Fri, 29 Dec 2023 2:42 PM",
    payer: "Robert Wilson",
    status: "Lead",
    email: "robertwilson@example.com",
    payerPhone: "+91 +966503534200",
    services: "Spin Class",
    scheduled: "Sat, 06 Jan 2024 2:42 PM",
  },
  {
    createdOn: "Thu, 28 Dec 2023 2:42 PM",
    payer: "Sarah Lee",
    status: "Active",
    email: "sarahlee@example.com",
    payerPhone: "+91 +966559188777",
    services: "Kickboxing Session",
    scheduled: "Sun, 07 Jan 2024 2:42 PM",
  },
  {
    createdOn: "Wed, 27 Dec 2023 2:42 PM",
    payer: "David Chen",
    status: "Inactive",
    email: "davidchen@example.com",
    payerPhone: "+91 +966577632111",
    services: "Strength Training",
    scheduled: "Fri, 05 Jan 2024 2:42 PM",
  },
  {
    createdOn: "Tue, 26 Dec 2023 2:42 PM",
    payer: "Lisa Patel",
    status: "Lead",
    email: "lisapatel@example.com",
    payerPhone: "+91 +966558441222",
    services: "Cardio Session",
    scheduled: "Sat, 06 Jan 2024 2:42 PM",
  },
  {
    createdOn: "Mon, 25 Dec 2023 2:42 PM",
    payer: "Chris Nguyen",
    status: "Active",
    email: "chrisng uyen@example.com",
    payerPhone: "+91 +966536605444",
    services: "Barre Class",
    scheduled: "Sun, 07 Jan 2024 2:42 PM",
  },
  {
    createdOn: "Sun, 24 Dec 2023 2:42 PM",
    payer: "Samantha Patel",
    status: "Lead",
    email: "samanthapatel@example.com",
    payerPhone: "+91 +966503534555",
    services: "Pilates Reformer",
    scheduled: "Fri, 05 Jan 2024 2:42 PM",
  },
  {
    createdOn: "Sat, 23 Dec 2023 2:42 PM",
    payer: "Michael Gonzalez",
    status: "Active",
    email: "michaelgonzalez@example.com",
    payerPhone: "+91 +966559188888",
    services: "Circuit Training",
    scheduled: "Sun, 07 Jan 2024 2:42 PM",
  },
  {
    createdOn: "Fri, 22 Dec 2023 2:42 PM",
    payer: "Jessica Hernandez",
    status: "Inactive",
    email: "jessicahernandez@example.com",
    payerPhone: "+91 +966577632999",
    services: "Spin Class",
    scheduled: "Sat, 06 Jan 2024 2:42 PM",
  },
  {
    createdOn: "Thu, 21 Dec 2023 2:42 PM",
    payer: "Daniel Morales",
    status: "Lead",
    email: "danielmorales@example.com",
    payerPhone: "+91 +966558441888",
    services: "Yoga Sculpt",
    scheduled: "Sun, 07 Jan 2024 2:42 PM",
  },
  {
    createdOn: "Wed, 20 Dec 2023 2:42 PM",
    payer: "Olivia Gutierrez",
    status: "Active",
    email: "oliviagutierrez@example.com",
    payerPhone: "+91 +966536605777",
    services: "Kickboxing",
    scheduled: "Fri, 05 Jan 2024 2:42 PM",
  },
  {
    createdOn: "Tue, 19 Dec 2023 2:42 PM",
    payer: "Gabriel Flores",
    status: "Inactive",
    email: "gabrielflores@example.com",
    payerPhone: "+91 +966503534666",
    services: "Barre Fusion",
    scheduled: "Sat, 06 Jan 2024 2:42 PM",
  },
  {
    createdOn: "Mon, 18 Dec 2023 2:42 PM",
    payer: "Isabella Diaz",
    status: "Lead",
    email: "isabelladiaz@example.com",
    payerPhone: "+91 +966559188999",
    services: "Pilates Reformer",
    scheduled: "Sun, 07 Jan 2024 2:42 PM",
  },
  {
    createdOn: "Sun, 17 Dec 2023 2:42 PM",
    payer: "Ethan Ramirez",
    status: "Active",
    email: "ethanramirez@example.com",
    payerPhone: "+91 +966577632222",
    services: "Zumba",
    scheduled: "Fri, 05 Jan 2024 2:42 PM",
  },
  {
    createdOn: "Sat, 16 Dec 2023 2:42 PM",
    payer: "Sophia Santana",
    status: "Inactive",
    email: "sophiasantana@example.com",
    payerPhone: "+91 +966558441333",
    services: "Strength Training",
    scheduled: "Sat, 06 Jan 2024 2:42 PM",
  },
  {
    createdOn: "Fri, 15 Dec 2023 2:42 PM",
    payer: "Lucas Moreno",
    status: "Lead",
    email: "lucasmoreno@example.com",
    payerPhone: "+91 +966536605555",
    services: "Cardio Kickboxing",
    scheduled: "Sun, 07 Jan 2024 2:42 PM",
  },
  {
    createdOn: "Thu, 14 Dec 2023 2:42 PM",
    payer: "Mia Fernandez",
    status: "Active",
    email: "miafernandez@example.com",
    payerPhone: "+91 +966503534444",
    services: "Barre Blend",
    scheduled: "Fri, 05 Jan 2024 2:42 PM",
  },
  {
    createdOn: "Wed, 13 Dec 2023 2:42 PM",
    payer: "Lucas Ortiz",
    status: "Inactive",
    email: "lucasortiz@example.com",
    payerPhone: "+91 +966559188777",
    services: "Yoga Sculpt",
    scheduled: "Sat, 06 Jan 2024 2:42 PM",
  },
  {
    createdOn: "Tue, 12 Dec 2023 2:42 PM",
    payer: "Isabella Dominguez",
    status: "Lead",
    email: "isabelladominguez@example.com",
    payerPhone: "+91 +966577632111",
    services: "Circuit Training",
    scheduled: "Sun, 07 Jan 2024 2:42 PM",
  },
  {
    createdOn: "Mon, 11 Dec 2023 2:42 PM",
    payer: "Ethan Vargas",
    status: "Active",
    email: "ethanvargas@example.com",
    payerPhone: "+91 +966558441222",
    services: "Pilates Reformer",
    scheduled: "Fri, 05 Jan 2024 2:42 PM",
  },
  {
    createdOn: "Sun, 10 Dec 2023 2:42 PM",
    payer: "Sophia Torres",
    status: "Inactive",
    email: "sophiatorres@example.com",
    payerPhone: "+91 +966536605444",
    services: "Zumba",
    scheduled: "Sat, 06 Jan 2024 2:42 PM",
  },
  {
    createdOn: "Sat, 09 Dec 2023 2:42 PM",
    payer: "Lucas Morales",
    status: "Lead",
    email: "lucasmorales@example.com",
    payerPhone: "+91 +966503534555",
    services: "Strength Training",
    scheduled: "Sun, 07 Jan 2024 2:42 PM",
  },
  {
    createdOn: "Fri, 08 Dec 2023 2:42 PM",
    payer: "Mia Castro",
    status: "Active",
    email: "miacastro@example.com",
    payerPhone: "+91 +966559188888",
    services: "Kickboxing",
    scheduled: "Fri, 05 Jan 2024 2:42 PM",
  },
  {
    createdOn: "Thu, 07 Dec 2023 2:42 PM",
    payer: "Lucas Gutierrez",
    status: "Inactive",
    email: "lucasgutierrez@example.com",
    payerPhone: "+91 +966577632999",
    services: "Barre Fusion",
    scheduled: "Sat, 06 Jan 2024 2:42 PM",
  },
  {
    createdOn: "Wed, 06 Dec 2023 2:42 PM",
    payer: "Isabella Diaz",
    status: "Lead",
    email: "isabelladiaz@example.com",
    payerPhone: "+91 +966558441888",
    services: "Yoga Sculpt",
    scheduled: "Sun, 07 Jan 2024 2:42 PM",
  },
  {
    createdOn: "Tue, 05 Dec 2023 2:42 PM",
    payer: "Ethan Ramirez",
    status: "Active",
    email: "ethanramirez@example.com",
    payerPhone: "+91 +966536605777",
    services: "Barre Blend",
    scheduled: "Fri, 05 Jan 2024 2:42 PM",
  },
  {
    createdOn: "Mon, 04 Dec 2023 2:42 PM",
    payer: "Sophia Santana",
    status: "Inactive",
    email: "sophiasantana@example.com",
    payerPhone: "+91 +966503534666",
    services: "Cardio Kickboxing",
    scheduled: "Sat, 06 Jan 2024 2:42 PM",
  },
  {
    createdOn: "Sun, 03 Dec 2023 2:42 PM",
    payer: "Lucas Moreno",
    status: "Lead",
    email: "lucasmoreno@example.com",
    payerPhone: "+91 +966559188999",
    services: "Circuit Training",
    scheduled: "Sun, 07 Jan 2024 2:42 PM",
  },
  {
    createdOn: "Sat, 02 Dec 2023 2:42 PM",
    payer: "Mia Fernandez",
    status: "Active",
    email: "miafernandez@example.com",
    payerPhone: "+91 +966577632222",
    services: "Pilates Reformer",
    scheduled: "Fri, 05 Jan 2024 2:42 PM",
  },
];
const WaitListTable = () => {
  return (
    <div
      className="border border-slate-200 rounded-md  h-[60vh] overflow-hidden overflow-x-auto"
      style={{ scrollbarWidth: "thin" }}
    >
      <table className="w-full">
        <thead className="bg-slate-100 border-b border-slate-200 sticky top-0 z-10">
          <tr className="text-nowrap">
            <th className="p-2 text-left">
              <input
                type="checkbox"
                className="h-4 w-4 checked:appearance-none  bg-slate-500 rounded-sm"
              />
            </th>
            <th className="p-2">
              <ColumnHeader>
                <Calendar size={18} />
                <span>Created On</span>
              </ColumnHeader>
            </th>
            <th className="p-2 text-left">
              <ColumnHeader>
                <User size={18} />
                <span>Payer</span>
              </ColumnHeader>
            </th>
            <th className="p-2 text-left">
              <ColumnHeader>
                <div className="relative">
                  <Circle size={18} />
                  <Dot
                    weight="bold"
                    size={18}
                    className="absolute top-0 left-0"
                  />
                </div>
                <span>Status</span>
              </ColumnHeader>
            </th>
            <th className="p-2 text-left">
              <ColumnHeader>
                <Hash size={18} />
                <span>Email</span>
              </ColumnHeader>
            </th>
            <th className="p-2 text-left">
              <ColumnHeader>
                <Hash size={18} />
                <span>Payer Phone</span>
              </ColumnHeader>
            </th>
            <th className="p-2 text-left">
              <ColumnHeader>
                <Hash size={18} />
                <span>Services</span>
              </ColumnHeader>
            </th>
            <th className="p-2 text-left">
              <ColumnHeader>
                <Calendar size={18} />
                <span>Scheduled</span>
              </ColumnHeader>
            </th>
          </tr>
        </thead>
        <tbody className="text-slate-700 font-medium text-xs">
          {tableData.map(
            (
              {
                createdOn,
                email,
                payer,
                payerPhone,
                scheduled,
                services,
                status,
              },
              key
            ) => {
              return (
                <tr
                  key={email + key}
                  className="border-b border-slate-200 text-nowrap"
                >
                  <td className="p-2">
                    <input
                      type="checkbox"
                      className="h-4 w-4 checked:appearance-none  bg-slate-500 rounded-sm"
                    />
                  </td>
                  <td className="p-2">{createdOn}</td>
                  <td className="p-2">{payer}</td>
                  <td className="p-2">
                    <StatusBadge type={status} />
                  </td>
                  <td className="p-2">{email}</td>
                  <td className="p-2">{payerPhone}</td>
                  <td className="p-2">{services}</td>
                  <td className="p-2">{scheduled}</td>
                </tr>
              );
            }
          )}
        </tbody>
      </table>
    </div>
  );
};

export default WaitListTable;
