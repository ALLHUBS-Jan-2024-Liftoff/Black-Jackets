package BlackJackets.BlackJackets.models;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

@Entity
public class Venue {
    @Id
    @GeneratedValue
    private Long id;
}
