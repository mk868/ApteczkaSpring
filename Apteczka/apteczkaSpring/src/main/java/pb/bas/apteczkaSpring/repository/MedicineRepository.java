package pb.bas.apteczkaSpring.repository;

import org.springframework.data.repository.CrudRepository;
import pb.bas.apteczkaSpring.entity.Medicine;

public interface MedicineRepository extends CrudRepository<Medicine, Integer> {
    Iterable<Medicine> findByNameContainingOrDescriptionContainingAllIgnoreCase(String name, String description);
}
