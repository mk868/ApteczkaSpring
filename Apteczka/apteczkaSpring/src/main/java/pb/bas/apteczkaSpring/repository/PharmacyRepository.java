package pb.bas.apteczkaSpring.repository;

import org.springframework.data.repository.CrudRepository;
import pb.bas.apteczkaSpring.entity.Pharmacy;

public interface PharmacyRepository extends CrudRepository<Pharmacy, Integer> {
}
