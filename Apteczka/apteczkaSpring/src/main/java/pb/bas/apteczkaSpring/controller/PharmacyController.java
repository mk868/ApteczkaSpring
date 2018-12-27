package pb.bas.apteczkaSpring.controller;

import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import pb.bas.apteczkaSpring.entity.Pharmacy;
import pb.bas.apteczkaSpring.model.PharmacyBaseDTO;
import pb.bas.apteczkaSpring.model.PharmacyDetailsDTO;
import pb.bas.apteczkaSpring.repository.PharmacyRepository;

import java.lang.reflect.Type;
import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping(path="/api/pharmacy")
@CrossOrigin(origins = "http://localhost:4200") //DEV
public class PharmacyController {
    @Autowired
    private PharmacyRepository pharmacyRepository;
    @Autowired
    private ModelMapper modelMapper;

    @GetMapping(path="/get")
    public PharmacyDetailsDTO getPharmacies(@RequestParam Integer id) {
        return modelMapper.map(pharmacyRepository.findById(id).orElseGet(null), PharmacyDetailsDTO.class);
    }

    @GetMapping(path="/all")
    public List<PharmacyBaseDTO> getAllMedicines() {
        Iterable<Pharmacy> entries = pharmacyRepository.findAll();
        Type listType = new TypeToken<List<PharmacyBaseDTO>>() {}.getType();
        List<PharmacyBaseDTO> result = modelMapper.map(entries, listType);
        return result;
    }
}
