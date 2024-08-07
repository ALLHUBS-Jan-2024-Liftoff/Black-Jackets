package BlackJackets.BlackJackets.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.Positive;
import jakarta.validation.constraints.Size;

@Entity
public class Review {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @NotEmpty
    private String userName;

    @NotEmpty
    private String comment;

//    @Size(min = 1, max = 5, message = "Rating must be between 1 and 5 stars")
    @Positive(message = "Rating must be between 1 and 5 stars")
    @Max(value = 5, message = "Rating must be between 1 and 5 stars")
    private int rating;

    @JsonIgnore
    @ManyToOne
    @JoinColumn(name = "venue_id")
    private Venue venue;

    public Review() {
    }

    public Review(long id, String userName, String comment, int rating, Venue venue) {
        this.id = id;
        this.userName = userName;
        this.comment = comment;
        this.rating = rating;
        this.venue = venue;
    }

    public long getId() {
        return id;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getComment() {
        return comment;
    }

    public void setComment(String comment) {
        this.comment = comment;
    }

    public int getRating() {
        return rating;
    }

    public void setRating(int rating) {
        this.rating = rating;
    }

    public Venue getVenue() {
        return venue;
    }

    public void setVenue(Venue venue) {
        this.venue = venue;
    }
}
