package BlackJackets.BlackJackets.repository;

import BlackJackets.BlackJackets.entity.Venue;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface VenueRepo extends JpaRepository<Venue, Integer> {
}
