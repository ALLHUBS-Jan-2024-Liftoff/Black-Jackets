package BlackJackets.BlackJackets.data;

import BlackJackets.BlackJackets.models.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Integer> {

    User findByEmail(String email);
//
    User getUserById(Integer id);


}
