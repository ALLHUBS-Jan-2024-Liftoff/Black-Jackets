package BlackJackets.BlackJackets.models;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.validation.constraints.FutureOrPresent;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;

import java.time.LocalDateTime;
import java.util.HashMap;

@Entity
public class Gig {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotEmpty(message = "Name required")
    private String name;

    // Will use <input type="datetime-local"> in form for LocalDateTime
    // Accepts date/time in format: "yyyy-MM-ddTHH:mm:ss" e.g. "2028-06-12T19:30:00"
    @NotNull(message = "Date required")
    @FutureOrPresent(message = "Date must not be past")
    private LocalDateTime date;

    @Size(min = 3, message = "Genre required")
    private String genre;

    @NotEmpty(message = "Please specify age restrictions if applicable")
    private String ages;

//    Will add orm mapping for connecting to a Venue

//    Image API will be used to store an image for the event

    //  Bands will be their own class in the future
    private HashMap<Integer, String> bandLineup;

    private String headliner = "To be determined";

    public Gig() {
    }

    public Gig(String name, LocalDateTime date, String genre, String ages, HashMap<Integer, String> bandLineup, String headliner) {
        this.name = name;
        this.date = date;
        this.genre = genre;
        this.ages = ages;
        this.bandLineup = bandLineup;
        this.headliner = headliner;
    }

    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public LocalDateTime getDate() {
        return date;
    }

    public void setDate(LocalDateTime date) {
        this.date = date;
    }

    public String getGenre() {
        return genre;
    }

    public void setGenre(String genre) {
        this.genre = genre;
    }

    public String getAges() {
        return ages;
    }

    public void setAges(String ages) {
        this.ages = ages;
    }

    public String getHeadliner() {
        return headliner;
    }

    public void setHeadliner(String headliner) {
        this.headliner = headliner;
    }

    public HashMap<Integer, String> getBandLineup() {
        return bandLineup;
    }

    public void setBandLineup(HashMap<Integer, String> bandLineup) {
        this.bandLineup = bandLineup;
    }
}
