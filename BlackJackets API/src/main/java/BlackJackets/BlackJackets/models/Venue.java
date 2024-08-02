package BlackJackets.BlackJackets.models;

import jakarta.persistence.*;
import lombok.*;

import java.util.List;

@Entity
@Data
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Venue {


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String name;

    private int capacity;

    private String location;

    private String email;

    private String venuePhone;

    @OneToMany(mappedBy = "venue")
    private List<Gig> gigs;

    }
