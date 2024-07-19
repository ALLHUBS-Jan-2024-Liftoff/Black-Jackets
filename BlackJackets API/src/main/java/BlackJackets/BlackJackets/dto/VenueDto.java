package BlackJackets.BlackJackets.dto;

import lombok.*;

@Data
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class VenueDto {

        private int venueId;

        private String venueName;

        private int venueCapacity;

        private String venueLocation;

        private String venueEmail;

        private String venuePhone;

        private String venueGenres;

        private int venueAge;
}
