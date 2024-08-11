package BlackJackets.BlackJackets;

import BlackJackets.BlackJackets.data.ReviewRepo;
import BlackJackets.BlackJackets.models.Review;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.multipart.support.StandardServletMultipartResolver;

import java.util.List;

@SpringBootApplication
public class BlackJacketsApplication {

	public static void main(String[] args) throws Throwable {
		SpringApplication.run(BlackJacketsApplication.class, (args));

		}

	@Bean
	public StandardServletMultipartResolver multipartResolver() {
		return new  StandardServletMultipartResolver();
	}







}


