package pb.bas.apteczkaSpring.entity;

import lombok.Data;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Entity
@Data
public class Pharmacy {
    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    private Integer id;

    private String name;

    private Float lon;

    private Float lat;

    @ManyToMany(mappedBy = "pharmacies", fetch = FetchType.LAZY)
    private List<Medicine> medicines = new ArrayList<>();
}
