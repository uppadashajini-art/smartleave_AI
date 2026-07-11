import { Link, useLocation } from "react-router-dom";

export default function Sidebar() {

  const location = useLocation();

  const menuItems = [
    {
      name: "Dashboard",
      path: "/faculty",
      icon: "📊",
    },
    {
      name: "Apply Leave",
      path: "/faculty/apply-leave",
      icon: "📝",
    },
    {
      name: "Timetable",
      path: "/faculty/timetable",
      icon: "📅",
    },
    {
      name: "Leave History",
      path: "/faculty/history",
      icon: "📚",
    },
    {
      name: "Notifications",
      path: "/faculty/notifications",
      icon: "🔔",
    },
  ];


  return (

    <div
      className="
      w-64
      min-h-screen
      bg-blue-600
      text-white
      p-5
      shadow-lg
      "
    >


      {/* Logo */}

      <div className="mb-10">

        <h1 className="
        text-2xl
        font-bold
        ">
          SmartLeave AI
        </h1>

        <p className="
        text-sm
        text-blue-100
        mt-1
        ">
          Faculty Portal
        </p>

      </div>



      {/* Menu */}

      <nav className="space-y-3">


        {menuItems.map((item) => (

          <Link
            key={item.path}
            to={item.path}

            className={`
              flex
              items-center
              gap-3
              px-4
              py-3
              rounded-lg
              transition

              ${
                location.pathname === item.path
                ? "bg-white text-blue-600 font-semibold"
                : "hover:bg-blue-500"
              }

            `}
          >

            <span className="text-xl">
              {item.icon}
            </span>


            <span>
              {item.name}
            </span>


          </Link>

        ))}


      </nav>



      {/* User Section */}

      <div
        className="
        absolute
        bottom-5
        w-52
        bg-blue-700
        rounded-lg
        p-3
        "
      >

        <p className="font-semibold">
          Dr. Ravi Kumar
        </p>

        <p className="
        text-sm
        text-blue-200
        ">
          CSE Department
        </p>

      </div>


    </div>

  );
}