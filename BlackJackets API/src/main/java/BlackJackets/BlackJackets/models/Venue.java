package BlackJackets.BlackJackets.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotEmpty;
import lombok.*;

import java.util.ArrayList;
import java.util.List;

@Entity
@Data
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Venue {

    @Id
    @Column(name = "venue_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @NotEmpty(message = "Name is required")
    private String name;

    private int capacity;

    private String location;

    @NotBlank(message = "Email is required")
    @Email(message = "Email should be valid")
    private String email;

    @NotBlank(message = "Phone number is required")
    private String phone;

    @OneToOne(mappedBy = "venue", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private User user;

    @JsonIgnore
    @OneToMany(mappedBy = "venue",cascade = CascadeType.ALL, /*fetch = FetchType.LAZY,*/ orphanRemoval = true)
    private List<Gig> gigs = new ArrayList<Gig>();

    public void addGig(Gig gig){
        gigs.add(gig);
    }

    @JsonIgnore
    @OneToMany(mappedBy = "venue",cascade = CascadeType.ALL)
    private List<Message> messages = new ArrayList<Message>();

    public void addMessage(Message message){
        messages.add(message);
    }

    @OneToMany(mappedBy = "venue", cascade = CascadeType.ALL, fetch = FetchType.LAZY, orphanRemoval = true)
    private List<Review> reviews = new ArrayList<Review>();


    public void addReview(Review review){
        reviews.add(review);
    }

}
