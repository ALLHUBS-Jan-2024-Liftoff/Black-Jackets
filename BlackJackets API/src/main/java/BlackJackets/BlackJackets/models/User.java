package BlackJackets.BlackJackets.models;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

@Entity
public class User{

    @Id
    @GeneratedValue
    private int id;
    private String email;

    private String pwHash;

    private String fullName;

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

}
