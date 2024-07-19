package BlackJackets.BlackJackets.models;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

import java.time.LocalDate;
import java.util.ArrayList;

@Entity
public class Gig {
    @Id
    @GeneratedValue
    private Long id;

    private String name;

    private LocalDate date;

    //Ask Ryan/research image api for data type of img
    // private image;

    private String genre;

    // May need to change to Array or HashMap to be able to remove/replace a band in a specific slot
    private ArrayList<String> bandArray;

    private String ages;

    //add orm mapping for Venue
//    private Venue venue;

    public Gig() {
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

    public ArrayList<String> getBandArray() {
        return bandArray;
    }

    public void setBandArray(ArrayList<String> bandArray) {
        this.bandArray = bandArray;
    }

    public String getAges() {
        return ages;
    }

    public void setAges(String ages) {
        this.ages = ages;
    }

//    Add after Venue is mapped
//    public Venue getVenue() {
//        return venue;
//    }
//
//    public void setVenue(Venue venue) {
//        this.venue = venue;
//    }
}
