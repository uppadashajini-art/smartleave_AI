import {
  CalendarDays,
  Clock,
  FileText,
  Bell,
  CheckCircle,
  XCircle,
} from "lucide-react";

export default function FacultyDashboard() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">

      {/* Header */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-800">
          Faculty Dashboard
        </h1>

        <p className="text-gray-500">
          Welcome back, Faculty 👋
        </p>
      </div>


      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-5">

        <div className="bg-white p-5 rounded-xl shadow">
          <FileText className="text-blue-600 mb-2"/>
          <h2 className="text-gray-500">
            Total Leaves
          </h2>
          <p className="text-3xl font-bold">
            24
          </p>
        </div>


        <div className="bg-white p-5 rounded-xl shadow">
          <CheckCircle className="text-green-600 mb-2"/>
          <h2 className="text-gray-500">
            Approved
          </h2>
          <p className="text-3xl font-bold">
            18
          </p>
        </div>


        <div className="bg-white p-5 rounded-xl shadow">
          <Clock className="text-yellow-600 mb-2"/>
          <h2 className="text-gray-500">
            Pending
          </h2>
          <p className="text-3xl font-bold">
            4
          </p>
        </div>


        <div className="bg-white p-5 rounded-xl shadow">
          <XCircle className="text-red-600 mb-2"/>
          <h2 className="text-gray-500">
            Rejected
          </h2>
          <p className="text-3xl font-bold">
            2
          </p>
        </div>

      </div>



      {/* Content */}
      <div className="grid lg:grid-cols-2 gap-6 mt-8">


        {/* Timetable */}
        <div className="bg-white rounded-xl shadow p-6">

          <div className="flex gap-2 items-center mb-5">
            <CalendarDays />
            <h2 className="text-xl font-bold">
              Today's Timetable
            </h2>
          </div>


          <div className="space-y-4">

            <div className="border p-4 rounded-lg">
              <h3 className="font-semibold">
                Data Structures
              </h3>
              <p className="text-gray-500">
                CSE-A | 9:00 AM
              </p>
            </div>


            <div className="border p-4 rounded-lg">
              <h3 className="font-semibold">
                Artificial Intelligence
              </h3>
              <p className="text-gray-500">
                CSE-B | 11:00 AM
              </p>
            </div>


            <div className="border p-4 rounded-lg">
              <h3 className="font-semibold">
                Machine Learning Lab
              </h3>
              <p className="text-gray-500">
                AI Lab | 2:00 PM
              </p>
            </div>

          </div>

        </div>



        {/* Notifications */}
        <div className="bg-white rounded-xl shadow p-6">

          <div className="flex gap-2 items-center mb-5">
            <Bell className="text-orange-500"/>
            <h2 className="text-xl font-bold">
              Notifications
            </h2>
          </div>


          <div className="space-y-4">

            <div className="bg-blue-50 p-4 rounded-lg">
              Leave request approved
            </div>


            <div className="bg-yellow-50 p-4 rounded-lg">
              Faculty meeting at 4 PM
            </div>


            <div className="bg-green-50 p-4 rounded-lg">
              Timetable updated
            </div>

          </div>

        </div>


      </div>


      {/* Actions */}
      <div className="mt-8 bg-white p-6 rounded-xl shadow">

        <h2 className="text-xl font-bold mb-4">
          Quick Actions
        </h2>


        <div className="grid md:grid-cols-3 gap-4">

          <button className="bg-blue-600 text-white p-4 rounded-lg">
            Apply Leave
          </button>

          <button className="bg-green-600 text-white p-4 rounded-lg">
            View Timetable
          </button>

          <button className="bg-purple-600 text-white p-4 rounded-lg">
            AI Assistant
          </button>

        </div>

      </div>


    </div>
  );
}