package BlackJackets.BlackJackets.entity;

import jakarta.persistence.*;
import java.io.Serializable;
import java.sql.Blob;

@Entity
public class Venue implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;

     private Blob   venue_Image;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
    public Blob   getVenue_Image() {
        return venue_Image;
    }

    public void setVenue_Image(Blob venue_Image) {
        this.venue_Image = venue_Image;
    }

    public Venue() {
    }

    public Venue(String name, Blob venue_Image) {
       // this.id = id;
        this.name = name;
        this.venue_Image = venue_Image;
    }
//    public Venue(Long id, Blob venue_Image) {
//        this.id = id;
//        this.venue_Image = venue_Image;
//    }
}
