package BlackJackets.BlackJackets.models;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.Size;

import java.time.LocalDate;

@Entity
public class Gig {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotEmpty(message = "Name required")
    private String name;

    @NotEmpty(message = "Date required")
    private LocalDate date;

    @Size(min = 3, message = "Genre required")
    private String genre;

    @NotEmpty(message = "Please specify age restrictions if applicable")
    private String ages;

//    Will add orm mapping for Venue
//    private Venue venue;

//    Ask Ryan/research image api for data type of img
//    private image;

//    May need to change to Array or HashMap to be able to remove/replace a band in a specific slot
//    private ArrayList<String> bandArray;

    public Gig() {
    }

    public Gig(Long id, String name, LocalDate date, String genre, String ages) {
        this.id = id;
        this.name = name;
        this.date = date;
        this.genre = genre;
        this.ages = ages;
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

    public LocalDate getDate() {
        return date;
    }

    public void setDate(LocalDate date) {
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
}
