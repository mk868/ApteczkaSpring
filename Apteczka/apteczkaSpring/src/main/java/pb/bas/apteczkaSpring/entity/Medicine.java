package pb.bas.apteczkaSpring.entity;

import lombok.Data;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Entity
@Data
public class Medicine {
    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    private Integer id;

    private String name;

    private String description;

    private String company;

    private String composition;

    private String image;

    @ManyToMany(mappedBy = "medicines", fetch = FetchType.LAZY)
    private List<Pharmacy> pharmacies = new ArrayList<>();
}
