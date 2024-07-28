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
import java.util.Objects;

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
    private String headliner = "To be determined";

    private String supportingAct = "";

    private String openingAct = "";

    private int bandSlots;

    public Gig() {
    }

    public Gig(String name, LocalDateTime date, String genre, String ages, String headliner, String supportingAct, String openingAct, int bandSlots) {
        this.name = name;
        this.date = date;
        this.genre = genre;
        this.ages = ages;
        this.headliner = headliner;
        this.supportingAct = supportingAct;
        this.openingAct = openingAct;
        this.bandSlots = bandSlots;
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

    public String getSupportingAct() {
       if(supportingAct.isBlank()){return "This show has no supporting act slot";}
        return supportingAct;
    }

    public void setSupportingAct(String supportingAct) {
        this.supportingAct = supportingAct;
    }

    public String getOpeningAct() {
        if(openingAct.isBlank()){return "This show has no opening act slot";}
        return openingAct;
    }

    public void setOpeningAct(String openingAct) {
        this.openingAct = openingAct;
    }

    public int getBandSlots() {
        return bandSlots;
    }

    public void setBandSlots(int bandSlots) {
        this.bandSlots = bandSlots;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Gig gig = (Gig) o;
        return Objects.equals(id, gig.id);
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(id);
    }

    @Override
    public String toString() {
        return "Gig{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", date=" + date +
                ", genre='" + genre + '\'' +
                ", ages='" + ages + '\'' +
                ", headliner='" + headliner + '\'' +
                ", supportingAct='" + this.getSupportingAct() + '\'' +
                ", openingAct='" + this.getOpeningAct() + '\'' +
                ", bandSlots=" + bandSlots +
                '}';
    }
}
