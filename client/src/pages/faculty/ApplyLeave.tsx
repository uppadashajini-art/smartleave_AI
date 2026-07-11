import { useState } from "react";

export default function ApplyLeave() {

  const [leaveType, setLeaveType] = useState("");
  const [reason, setReason] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    alert("Leave request submitted successfully!");

    setLeaveType("");
    setReason("");
    setDate("");
  };


  return (
    <div className="min-h-screen bg-gray-100 p-6">

      <h1 className="text-3xl font-bold text-gray-800">
        Apply Leave
      </h1>

      <p className="text-gray-500 mt-2">
        Submit your leave request
      </p>


      <div className="bg-white mt-6 p-6 rounded-xl shadow max-w-2xl">

        <form onSubmit={handleSubmit} className="space-y-5">


          <div>
            <label className="block font-medium mb-2">
              Leave Type
            </label>

            <select
              value={leaveType}
              onChange={(e)=>setLeaveType(e.target.value)}
              className="w-full border p-3 rounded-lg"
            >

              <option value="">
                Select Leave Type
              </option>

              <option>
                Casual Leave
              </option>

              <option>
                Sick Leave
              </option>

              <option>
                Emergency Leave
              </option>

            </select>

          </div>



          <div>

            <label className="block font-medium mb-2">
              Leave Date
            </label>

            <input
              type="date"
              value={date}
              onChange={(e)=>setDate(e.target.value)}
              className="w-full border p-3 rounded-lg"
            />

          </div>



          <div>

            <label className="block font-medium mb-2">
              Reason
            </label>

            <textarea
              value={reason}
              onChange={(e)=>setReason(e.target.value)}
              placeholder="Enter reason for leave"
              className="w-full border p-3 rounded-lg h-32"
            />

          </div>



          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
          >
            Submit Leave Request
          </button>


        </form>

      </div>


    </div>
  );
}