import { useEffect, useState } from "react";
import MedicalHistoryForm from "./com/MedicalHistoryForm";
import MedicalHistoryList from "./com/MedicalHistoryList";
import EditModal from "./com/EditModal";
import api from "./api/axiosConfig";

function App() {
  const [records, setRecords] = useState([]);
  const [selectedRecord, setSelectedRecord] = useState(null); // record being edited
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Fetch records on load
  useEffect(() => {
    api.get("/records")
      .then(res => setRecords(res.data))
      .catch(err => console.error("Failed to fetch records", err));
  }, []);

  // Add new record
  const handleAddRecord = (newRecord) => {
    api.post("/records", newRecord)
      .then(res => setRecords(prev => [...prev, res.data]))
      .catch(err => alert("Failed to add record"));
  };

  // Delete a record
  const handleDelete = (id) => {
    api.delete(`/records/${id}`)
      .then(() => setRecords(prev => prev.filter(rec => rec.id !== id)))
      .catch(err => alert("Failed to delete record"));
  };

  // Open modal to edit
  const openEditModal = (record) => {
    setSelectedRecord(record);
    setIsModalOpen(true);
  };

  // Update a record after modal submit
  const handleUpdate = (updatedRecord) => {
    api.put(`/records/${updatedRecord.id}`, updatedRecord)
      .then(res =>
        setRecords(prev =>
          prev.map(rec => rec.id === updatedRecord.id ? res.data : rec)
        )
      )
      .catch(err => alert("Failed to update record"));
  };

  return (
    <>
    <div className="bg-blue-50 p-5">
        <h1 className="text-3xl font-bold text-center mb-6">Medical History Management</h1>
    </div>

    <div className="grid grid-cols-1  gap-5 max-w-5xl mx-auto ">

      <MedicalHistoryForm onAddRecord={handleAddRecord} existingRecords={records} />

      <MedicalHistoryList
        records={records}
        onDelete={handleDelete}
        onEdit={openEditModal} // now just opens modal
      />
    

      <EditModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onUpdate={handleUpdate}
        record={selectedRecord}
      />
    </div>
    </>
  );
}

export default App;
