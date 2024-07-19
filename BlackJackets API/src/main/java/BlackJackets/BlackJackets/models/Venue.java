package BlackJackets.BlackJackets.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.*;

@Entity
@Data
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Venue {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int venueId;

    private String venueName;

    private int venueCapacity;

    private String venueLocation;

    private String venueEmail;

    private String venuePhone;

    private String venueGenres;

    private int venueAge;
}
