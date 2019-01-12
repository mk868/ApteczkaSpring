package pb.bas.apteczkaSpring.model;

import lombok.Data;

@Data
public class MedicineBaseDTO {
    private Integer id;

    private String name;

    private String company;

    private String composition;

    private String image;
}
