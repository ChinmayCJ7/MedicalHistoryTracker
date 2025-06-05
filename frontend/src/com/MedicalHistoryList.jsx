import { useState } from "react";

function MedicalHistoryList({ records, onDelete, onEdit }) {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredRecords = records.filter((rec) => {
    const term = searchTerm.toLowerCase();
    return (
      (rec.patientName?.toLowerCase() || "").includes(term) ||
      (rec.patientId?.toLowerCase() || "").includes(term) ||
      (rec.doctorName?.toLowerCase() || "").includes(term)
    );
  });

  const getCardColors = (type) => {
    switch (type) {
      case "Vaccination": return "bg-green-100 border-green-300";
      case "Illness": return "bg-red-100 border-red-300";
      case "Surgery": return "bg-yellow-100 border-yellow-300";
      case "Allergy": return "bg-purple-100 border-purple-300";
      default: return "bg-gray-100 border-gray-300";
    }
  };

  return (
    <div className="mt-10 max-w-5xl mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-blue-800 text-center flex items-center justify-center gap-2">
        <span>📋</span> Medical Records
      </h2>

      {/* Search Bar */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search by name, ID, or doctor..."
          className="w-full border border-blue-300 p-3 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400 outline-none"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Record Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {filteredRecords.map((rec, idx) => (
          <div
            key={idx}
            className={`rounded-xl p-6 shadow border ${getCardColors(rec.eventType)}`}
          >
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-xl font-semibold text-gray-800">{rec.patientName}</h3>
              <span className="text-sm px-3 py-1 bg-white text-gray-800 rounded-full border border-gray-300">
                {rec.eventType}
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-gray-800">
              <p><span className="font-medium">📅 Date:</span> {rec.dateOfRecord}</p>
              <p><span className="font-medium">🏥 Hospital:</span> {rec.hospitalName}</p>
              <p><span className="font-medium">👨‍⚕️ Doctor:</span> {rec.doctorName}</p>
              <p className="sm:col-span-2"><span className="font-medium">📝 Description:</span> {rec.description}</p>
            </div>

            {/* Action Buttons */}
            <div className="mt-4 flex gap-3">
              <button
                onClick={() => onEdit(rec)}
                className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded shadow"
              >
                ✏️ Edit
              </button>
              <button
                onClick={() => onDelete(rec.id)}
                className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded shadow"
              >
                🗑️ Delete
              </button>
            </div>
          </div>
        ))}

        {filteredRecords.length === 0 && (
          <p className="text-center text-gray-500">No matching records found.</p>
        )}
      </div>
    </div>
  );
}

export default MedicalHistoryList;
