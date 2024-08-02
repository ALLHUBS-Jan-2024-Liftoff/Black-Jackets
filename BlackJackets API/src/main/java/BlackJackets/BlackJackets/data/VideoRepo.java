package BlackJackets.BlackJackets.data;

import BlackJackets.BlackJackets.models.Video;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface VideoRepo extends JpaRepository<Video, Long> {
    List<Video> findByVenueId(Long venueID);
}
