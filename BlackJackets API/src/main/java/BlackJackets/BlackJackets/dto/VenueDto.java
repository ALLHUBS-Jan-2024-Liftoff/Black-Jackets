package BlackJackets.BlackJackets.dto;

import BlackJackets.BlackJackets.models.Gig;
import BlackJackets.BlackJackets.models.Review;
import BlackJackets.BlackJackets.models.User;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotEmpty;
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

        @NotEmpty(message = "Name is required")
        private String name;

        private int capacity;

        private String location;

        @NotBlank(message = "Email is required")
        @Email(message = "Email should be valid")
        private String email;

        @NotBlank(message = "Phone number is required")
        private String phone;

        private String video;

        private List<Gig> gigs;

        private List<Review> reviews;

        private User user;

        public VenueDto(int id, String name, int capacity, String location, String email, String phone, List<Gig> gigs, List<Review> reviews, User user) {
        }
}
