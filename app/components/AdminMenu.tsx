import {
  MapPin,
  NumberCircleOne,
  PhoneCall,
  Question,
  SignOut,
  UserGear,
  Wallet,
} from "@phosphor-icons/react/dist/ssr";

const AdminMenu = () => {
  return (
    <div className="bg-white rounded-md w-full shadow-md border p-1 font-medium text-slate-700 text-xs space-y-2 absolute -top-60 left-0">
      <div className="border border-white cursor-pointer select-none  flex items-center space-x-4 px-2 py-1  rounded-md hover:bg-slate-100 hover:border-slate-200">
        <MapPin size={16} />
        <div>Add Loaction</div>
      </div>

      <div className="border border-white cursor-pointer select-none  flex items-center space-x-4 px-2 py-1  rounded-md hover:bg-slate-100 hover:border-slate-200">
        <UserGear size={16} />
        <div>My Profile</div>
      </div>

      <div className="border border-white cursor-pointer select-none  flex items-center space-x-4 px-2 py-1  rounded-md hover:bg-slate-100 hover:border-slate-200">
        <Wallet size={16} />
        <div>Billing</div>
      </div>

      <div className="border border-white cursor-pointer select-none  flex items-center space-x-4 px-2 py-1  rounded-md hover:bg-slate-100 hover:border-slate-200">
        <div className="relative">
          <NumberCircleOne size={16} />
          <NumberCircleOne
            size={16}
            className="absolute top-1 left-2 rotate-45"
          />
        </div>
        <div>Plans & Pricing</div>
      </div>

      <div className="border border-white cursor-pointer select-none  flex items-center space-x-4 px-2 py-1  rounded-md hover:bg-slate-100 hover:border-slate-200">
        <Question size={16} />
        <div>Omnify Help Center</div>
      </div>

      <div className="border border-white cursor-pointer select-none  flex items-center space-x-4 px-2 py-1  rounded-md hover:bg-slate-100 hover:border-slate-200">
        <PhoneCall size={16} />
        <div>Contact support</div>
      </div>

      <div className="border-t-2 my-1"></div>
      <div className=" border border-white cursor-pointer select-none  flex items-center space-x-4 px-2 py-1  rounded-md hover:bg-red-100 hover:border-red-200 hover:text-red-500">
        <SignOut size={16} />
        <div>Logout</div>
      </div>
    </div>
  );
};

export default AdminMenu;
