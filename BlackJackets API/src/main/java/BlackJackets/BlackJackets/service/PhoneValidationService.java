package BlackJackets.BlackJackets.service;

import org.springframework.http.ResponseEntity;

import java.util.Map;

public interface PhoneValidationService {

    Boolean validatePhoneNumber(String phoneNumber);
}
