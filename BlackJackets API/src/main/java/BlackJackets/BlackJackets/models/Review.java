package BlackJackets.BlackJackets.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.*;

@Entity
@Data
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Review {


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String userName;
    private String comment;
    private int rating;

    @JsonIgnore
    @ManyToOne
    @JoinColumn(name = "venue_id")
    private Venue venue;

}
