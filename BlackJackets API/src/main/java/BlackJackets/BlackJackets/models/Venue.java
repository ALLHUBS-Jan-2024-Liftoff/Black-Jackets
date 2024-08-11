package BlackJackets.BlackJackets.models;

import jakarta.persistence.*;
import lombok.*;

import java.util.ArrayList;
import java.util.List;

@Entity
@Data
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Venue {

    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String name;

    private int capacity;

    private String location;

    private String email;

    private String phone;

    @OneToMany(mappedBy = "venue",cascade = CascadeType.ALL, fetch = FetchType.LAZY, orphanRemoval = true)
    private List<Gig> gigs = new ArrayList<Gig>();

    public void addGig(Gig gig){
        gigs.add(gig);
    }

    }
