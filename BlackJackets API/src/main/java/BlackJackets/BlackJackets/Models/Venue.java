package BlackJackets.BlackJackets.Models;

import jakarta.persistence.*;

import java.util.ArrayList;
import java.util.List;

@Entity
public class Venue {

    @Id
    @GeneratedValue
    int id;

    @OneToMany
    @JoinColumn(
            name = "gig_id"
    )
    private List<Gig> gigs = new ArrayList();

    public List<Gig> getGigs() {
        return this.gigs;
    }

    public void setGigs(List<Gig> jobs) {
        this.gigs = gigs;
    }
}
