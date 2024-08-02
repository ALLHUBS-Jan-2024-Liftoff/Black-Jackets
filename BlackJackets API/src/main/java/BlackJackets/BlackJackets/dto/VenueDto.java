package BlackJackets.BlackJackets.dto;

import BlackJackets.BlackJackets.models.Gig;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.*;

import java.util.List;

@Data
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class VenueDto {

        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        private int id;

        private String name;

        private int capacity;

        private String location;

        private String email;

        private String venuePhone;
        
        private List<Gig> gigs;
}
