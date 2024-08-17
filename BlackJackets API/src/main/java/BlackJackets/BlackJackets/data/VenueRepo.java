package BlackJackets.BlackJackets.data;

import BlackJackets.BlackJackets.models.Gig;
import BlackJackets.BlackJackets.models.Message;
import BlackJackets.BlackJackets.models.Venue;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface VenueRepo extends JpaRepository<Venue, Integer> {

    List<Message> findMessageById(int id);
}
