package BlackJackets.BlackJackets;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@SpringBootApplication
public class BlackJacketsApplication {

	public static void main(String[] args) throws Throwable {
		SpringApplication.run(BlackJacketsApplication.class, args);

//		ReviewRepo reviewRepo = new ReviewRepo();
//		reviewRepo.addReview(new Reviews("TheBand", "The venue was awesome and the crowd was electric", 5));
//		List<Reviews> allReviews = reviewRepo.getAllReviews();
//		for (Reviews reviews : allReviews) {
//			System.out.println(reviews.getUserName() + " rated it" + reviews.getRating() + " stars. Comment: " + reviews.getComment());
//		}
	}

	@Bean
	public WebMvcConfigurer corsConfigurer() {
		return new WebMvcConfigurer() {
			@Override
			public void addCorsMappings(CorsRegistry registry) {
				registry.addMapping("/*").allowedOrigins("http://localhost:5173").allowedMethods("GET","POST", "PUT", "OPTIONS", "DELETE").allowCredentials(true);
			}
		};


	}
}




