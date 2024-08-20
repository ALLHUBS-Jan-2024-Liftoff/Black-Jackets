package BlackJackets.BlackJackets.models;

import jakarta.persistence.*;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

@Entity
public class User{

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String email;

    private String pwHash;

    private String fullName;

    @OneToOne (fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    @JoinColumn(name = "venue_id")
    private Venue venue;

    private static final BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();

    public User() {}

    public User(String email, String password, String fullName) {
        this.email = email;
        this.pwHash = encoder.encode(password);
        this.fullName = fullName;
    }
    public int getId() {
        return id;
    }
    public String getEmail() {
        return email;
    }

    public boolean isMatchingPassword(String password) {
        return encoder.matches(password, pwHash);
    }


    public String getFullName() {
        return fullName;
    }
    public void setFullName(String fullName) {
        this.fullName = fullName;
    }

    public Venue getVenue() {
        return venue;
    }

    public void setVenue(Venue venue) {
        this.venue = venue;
    }
}