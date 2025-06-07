import { useState, useEffect } from "react";

function EditModal({ isOpen, onClose, onUpdate, record }) {
  const [formData, setFormData] = useState({ ...record });

  useEffect(() => {
    setFormData(record || {});
  }, [record]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdate(formData);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-xl">
        <h2 className="text-xl font-bold mb-4">Edit Record</h2>
        <form onSubmit={handleSubmit} className="space-y-3">
          <input name="patientName" value={formData.patientName || ""} onChange={handleChange} placeholder="Patient Name" className="w-full border p-2 rounded" />
          {/* <input name="patientId" value={formData.patientId || ""} onChange={handleChange} placeholder="Patient ID" className="w-full border p-2 rounded" /> */}
          <input type="date" name="dateOfRecord" value={formData.dateOfRecord || ""} onChange={handleChange} className="w-full border p-2 rounded" />
          <select
            name="eventType"
            value={formData.eventType || ""}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          >
            <option value="">Select event type</option>
            <option value="Illness">Illness</option>
            <option value="Surgery">Surgery</option>
            <option value="Allergy">Allergy</option>
            <option value="Vaccination">Vaccination</option>
          </select>
          <input name="hospitalName" value={formData.hospitalName || ""} onChange={handleChange} placeholder="Hospital" className="w-full border p-2 rounded" />
          <input name="doctorName" value={formData.doctorName || ""} onChange={handleChange} placeholder="Doctor" className="w-full border p-2 rounded" />
          <textarea name="description" value={formData.description || ""} onChange={handleChange} placeholder="Description" className="w-full border p-2 rounded" />
          <div className="flex justify-end gap-2 mt-4">
            <button type="button" onClick={onClose} className="px-4 py-2 bg-gray-400 text-white rounded">Cancel</button>
            <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded">Update</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditModal;
