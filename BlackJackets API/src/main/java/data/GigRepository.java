package data;

import models.Gig;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface GigRepository extends CrudRepository<Gig, Long> {
}
