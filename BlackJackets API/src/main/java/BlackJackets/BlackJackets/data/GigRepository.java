package BlackJackets.BlackJackets.data;


import BlackJackets.BlackJackets.models.Gig;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public interface GigRepository extends JpaRepository<Gig, Long> {
    List<Gig> findByVenueId(int venueId);
}
