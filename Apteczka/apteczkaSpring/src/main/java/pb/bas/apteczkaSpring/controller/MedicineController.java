package pb.bas.apteczkaSpring.controller;

import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import pb.bas.apteczkaSpring.entity.Medicine;
import pb.bas.apteczkaSpring.model.MedicineDetailsDTO;
import pb.bas.apteczkaSpring.model.MedicineItemDTO;
import pb.bas.apteczkaSpring.repository.MedicineRepository;

import java.lang.reflect.Type;
import java.util.List;

@RestController
@RequestMapping(path="/api/medicine")
@CrossOrigin(origins = "http://localhost:4200") //DEV
public class MedicineController {
    @Autowired
    private MedicineRepository medicineRepository;
    @Autowired
    private ModelMapper modelMapper;


    @GetMapping(path="/get")
    public MedicineDetailsDTO getMedicine(@RequestParam Integer id) {
        return modelMapper.map(medicineRepository.findById(id).orElseGet(null), MedicineDetailsDTO.class);
    }

    //FIXME change arg to DTO
    @PostMapping(path="/add")
    public Integer addMedicine(@RequestBody Medicine medicine) {
        Medicine added = medicineRepository.save(medicine);
        return medicine.getId();
    }

    @GetMapping(path="/all")
    public List<MedicineItemDTO> getAllMedicines() {
        Iterable<Medicine> entries = medicineRepository.findAll();
        Type listType = new TypeToken<List<MedicineItemDTO>>() {}.getType();
        List<MedicineItemDTO> result = modelMapper.map(entries, listType);
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
