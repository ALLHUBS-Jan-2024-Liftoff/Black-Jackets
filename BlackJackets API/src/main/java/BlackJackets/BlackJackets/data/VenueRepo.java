package BlackJackets.BlackJackets.data;

import BlackJackets.BlackJackets.models.Venue;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface VenueRepo extends JpaRepository<Venue, Integer> {
}
