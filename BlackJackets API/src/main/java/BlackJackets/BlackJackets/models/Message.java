package BlackJackets.BlackJackets.models;

import jakarta.persistence.*;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotEmpty;
import lombok.*;

import java.util.ArrayList;

@Entity
@Data
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Message {

    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @NotEmpty(message = "Name is required")
    private String name;

    @NotBlank(message = "Email is required")
    @Email(message = "Email should be valid")
    private String email;

    @NotBlank(message = "Content is required")
    private String content;

    @ManyToOne
    @JoinColumn(name = "venue_id")
    private Venue venue;
}
