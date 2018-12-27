package pb.bas.apteczkaSpring.model;

import lombok.Data;

import java.util.ArrayList;
import java.util.List;

@Data
public class PharmacyDetailsDTO extends PharmacyBaseDTO {
    private List<MedicineItemDTO> medicines = new ArrayList<>();
}
