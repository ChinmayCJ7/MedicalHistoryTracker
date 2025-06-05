package com.example.medicalhistory.controller;

import com.example.medicalhistory.model.MedicalRecord;
import com.example.medicalhistory.repository.MedicalRecordRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/records")
@CrossOrigin(origins = "*") // Allow frontend to call this API
public class MedicalRecordController {

    @Autowired
    private MedicalRecordRepository repository;

    // Create
    @PostMapping
    public MedicalRecord addRecord(@RequestBody MedicalRecord record) {
        return repository.save(record);
    }

    // Read all
    @GetMapping
    public List<MedicalRecord> getAllRecords() {
        return repository.findAll();
    }

    // Update
    @PutMapping("/{id}")
    public ResponseEntity<MedicalRecord> updateRecord(@PathVariable Long id, @RequestBody MedicalRecord updatedRecord) {
        return repository.findById(id).map(record -> {
            record.setPatientName(updatedRecord.getPatientName());
            record.setDateOfRecord(updatedRecord.getDateOfRecord());
            record.setEventType(updatedRecord.getEventType());
            record.setDescription(updatedRecord.getDescription());
            record.setHospitalName(updatedRecord.getHospitalName());
            record.setDoctorName(updatedRecord.getDoctorName());
            return ResponseEntity.ok(repository.save(record));
        }).orElse(ResponseEntity.notFound().build());
    }

    // Delete
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteRecord(@PathVariable Long id) {
        if (repository.existsById(id)) {
            repository.deleteById(id);
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.notFound().build();
    }

    // Filter by event type
    @GetMapping("/filter")
    public List<MedicalRecord> filterByEventType(@RequestParam String type) {
        return repository.findByEventTypeIgnoreCase(type);
    }
}
