package BlackJackets.BlackJackets.data;

import BlackJackets.BlackJackets.models.Gig;
import BlackJackets.BlackJackets.models.Review;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ReviewRepo extends JpaRepository<Review, Long> {

    List<Review> findByVenueId(int venueId);




}
