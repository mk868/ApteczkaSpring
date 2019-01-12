package pb.bas.apteczkaSpring.controller;

import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import pb.bas.apteczkaSpring.entity.Medicine;
import pb.bas.apteczkaSpring.entity.Pharmacy;
import pb.bas.apteczkaSpring.model.MedicineDetailsDTO;
import pb.bas.apteczkaSpring.model.MedicineItemDTO;
import pb.bas.apteczkaSpring.model.PharmacyBaseDTO;
import pb.bas.apteczkaSpring.model.PharmacyDetailsDTO;
import pb.bas.apteczkaSpring.repository.MedicineRepository;
import pb.bas.apteczkaSpring.repository.PharmacyRepository;

import java.lang.reflect.Type;
import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping(path="/api/medicine")
@CrossOrigin(origins = "http://localhost:4200") //DEV
public class MedicineController {
    @Autowired
    private MedicineRepository medicineRepository;
    @Autowired
    private PharmacyRepository pharmacyRepository;
    @Autowired
    private ModelMapper modelMapper;

    @GetMapping(path="/get")
    public MedicineDetailsDTO getMedicine(@RequestParam Integer id) {
        return modelMapper.map(medicineRepository.findById(id).orElseGet(null), MedicineDetailsDTO.class);
    }

    @GetMapping(path="/delete")
    public void removeMedicine(@RequestParam Integer id) {
        Medicine medicine = medicineRepository.findById(id).orElse(null);
        if(medicine != null) {
            medicineRepository.deleteById(id);
        }
    }

    @PostMapping(path="/add")
    public void addMedicine(@RequestBody Medicine medicine) {
        medicineRepository.save(medicine);
    }

    @GetMapping(path="/all")
    public List<MedicineItemDTO> getAllMedicines() {
        Iterable<Medicine> entries = medicineRepository.findAll();
        Type listType = new TypeToken<List<MedicineItemDTO>>() {}.getType();
        List<MedicineItemDTO> result = modelMapper.map(entries, listType);
        return result;
    }

    @GetMapping(path="/available")
    public List<MedicineItemDTO> getAllAvaliableMedicines(@RequestParam Integer id) {
        PharmacyDetailsDTO pharmacy = modelMapper.map(pharmacyRepository.findById(id).orElseGet(null), PharmacyDetailsDTO.class);

        Iterable<Medicine> entries = medicineRepository.findAll();
        Type listType = new TypeToken<List<MedicineItemDTO>>() {}.getType();
        List<MedicineItemDTO> medicines = modelMapper.map(entries, listType);
        List<MedicineItemDTO> result =new ArrayList<>();
        for (MedicineItemDTO medicine:medicines) {

            if(!pharmacy.getMedicines().contains(medicine))
            {
               result.add(medicine);
            }
        }
        return result;
    }

    @GetMapping(path="/search")
    public List<MedicineItemDTO> searchMedicines(@RequestParam String text) {
        Iterable<Medicine> entries = medicineRepository.findByNameContainingOrDescriptionContainingAllIgnoreCase(text, text);
        Type listType = new TypeToken<List<MedicineItemDTO>>() {}.getType();
        List<MedicineItemDTO> result = modelMapper.map(entries, listType);
        return result;
    }
}
