package BlackJackets.BlackJackets.Models;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;

@Entity
public class Gig {

    @Id
    @GeneratedValue
    int id;

    @ManyToOne
    private Venue venue;

    public Venue getVenue() {
        return this.venue;
    }

    public void setVenue(Venue venue) {
        this.venue = venue;
    }
}
