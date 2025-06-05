import { useState } from "react";

const defaultFormData = {
  patientName: "",
  patientId: "",
  dateOfRecord: "",
  eventType: "",
  description: "",
  hospitalName: "",
  doctorName: "",
};

const MedicalHistoryForm = ({ onAddRecord, existingRecords }) => {
  const [formData, setFormData] = useState(defaultFormData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const isDuplicate = () => {
    return existingRecords.some(
      (record) =>
        record.patientId === formData.patientId &&
        record.dateOfRecord === formData.dateOfRecord &&
        record.eventType === formData.eventType
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isIncomplete = Object.values(formData).some((val) => val.trim() === "");
    if (isIncomplete) {
      alert("Please fill all fields.");
      return;
    }

    if (isDuplicate()) {
      alert("Duplicate entry detected.");
      return;
    }

    onAddRecord({ ...formData, id: Date.now() });
    setFormData(defaultFormData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-md rounded-xl p-6 space-y-5 border border-gray-200 h-200"
    >
      <h2 className="text-xl font-bold text-blue-700 flex items-center gap-2 mb-2">
        <span className="text-blue-600">🩺</span> New Medical Record
      </h2>

      {[
        { label: "Patient Name", name: "patientName" },
        { label: "Patient ID", name: "patientId" },
        { label: "Hospital/Clinic Name", name: "hospitalName" },
        { label: "Doctor's Name", name: "doctorName" },
      ].map(({ label, name }) => (
        <div key={name} className="flex flex-col">
          <label className="font-medium text-gray-700">{label}</label>
          <input
            name={name}
            value={formData[name]}
            onChange={handleChange}
            className="border p-2 rounded"
          />
        </div>
      ))}

      <div className="flex flex-col">
        <label className="font-medium text-gray-700">Date of Record</label>
        <input
          type="date"
          name="dateOfRecord"
          value={formData.dateOfRecord}
          onChange={handleChange}
          className="border p-2 rounded"
        />
      </div>

      <div className="flex flex-col">
        <label className="font-medium text-gray-700">Type of Event</label>
        <select
          name="eventType"
          value={formData.eventType}
          onChange={handleChange}
          className="border p-2 rounded"
        >
          <option value="">Select event type</option>
          <option value="Illness">Illness</option>
          <option value="Surgery">Surgery</option>
          <option value="Allergy">Allergy</option>
          <option value="Vaccination">Vaccination</option>
        </select>
      </div>

      <div className="flex flex-col">
        <label className="font-medium text-gray-700">Description</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          className="border p-2 rounded"
        />
      </div>

      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 w-full"
      >
        ➕ Add Record
      </button>
    </form>
  );
};

export default MedicalHistoryForm;
