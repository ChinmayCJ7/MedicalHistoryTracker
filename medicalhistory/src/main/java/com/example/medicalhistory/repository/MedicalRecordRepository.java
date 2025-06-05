package com.example.medicalhistory.repository;

import com.example.medicalhistory.model.MedicalRecord;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface MedicalRecordRepository extends JpaRepository<MedicalRecord, Long> {
    List<MedicalRecord> findByEventTypeIgnoreCase(String eventType);
}
