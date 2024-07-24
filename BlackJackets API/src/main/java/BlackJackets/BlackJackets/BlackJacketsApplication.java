package BlackJackets.BlackJackets;

import BlackJackets.BlackJackets.data.ReviewRepo;
import BlackJackets.BlackJackets.models.Reviews;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.util.List;

@SpringBootApplication
public class BlackJacketsApplication {

	public static void main(String[] args) throws Throwable {
		SpringApplication.run(BlackJacketsApplication.class, args);

		ReviewRepo reviewRepo = new ReviewRepo();
		reviewRepo.addReview(new Reviews("TheBand", "The venue was awesome and the crowd was electric", 5));
		List<Reviews> allReviews = reviewRepo.getAllReviews();
		for (Reviews reviews : allReviews) {
			System.out.println(reviews.getUserName() + " rated it" + reviews.getRating() + " stars. Comment: " + reviews.getComment());
		}
	}




}


