package BlackJackets.BlackJackets.models;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

import java.util.ArrayList;

@Entity
public class Gig {
    @Id
    @GeneratedValue
    private Long id;

    private String name;

    //Research Date object for gig's date

    //Ask Ryan/research image api for data type of img

    private String genre;

    private ArrayList<String> bandArray;

    private String ages;

    //add orm mapping
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

//    public Venue getVenue() {
//        return venue;
//    }
//
//    public void setVenue(Venue venue) {
//        this.venue = venue;
//    }
}
