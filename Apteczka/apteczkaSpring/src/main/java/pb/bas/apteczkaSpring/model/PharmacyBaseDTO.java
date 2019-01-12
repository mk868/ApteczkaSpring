package pb.bas.apteczkaSpring.model;

import lombok.Data;

@Data
public class PharmacyBaseDTO {
    private Integer id;

    private String name;

    private String description;

    private String company;

    private Float lon;

    private Float lat;
}
