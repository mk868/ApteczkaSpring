package pb.bas.apteczkaSpring.model;

import lombok.Data;

import java.util.ArrayList;
import java.util.List;

@Data
public class MedicineDetailsDTO extends MedicineBaseDTO {
    private String description;

    private List<PharmacyBaseDTO> pharmacies = new ArrayList<>();
}
