package BlackJackets.BlackJackets;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.Bean;

import java.util.Arrays;

@SpringBootApplication()
public class BlackJacketsApplication {

	public static void main(String[] args) throws Throwable {
		SpringApplication.run(BlackJacketsApplication.class, args);
	}

}


