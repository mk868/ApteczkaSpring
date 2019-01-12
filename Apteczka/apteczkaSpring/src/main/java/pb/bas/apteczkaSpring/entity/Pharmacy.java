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

    private String description;

    private String company;

    private Float lon;

    private Float lat;

    @ManyToMany(cascade = { CascadeType.ALL }, fetch = FetchType.LAZY)
    @JoinTable(
            name = "Pharmacy_Medicine",
            joinColumns = { @JoinColumn(name = "medicine_id") },
            inverseJoinColumns = { @JoinColumn(name = "pharmacy_id") }
    )
    private List<Medicine> medicines = new ArrayList<>();
}
