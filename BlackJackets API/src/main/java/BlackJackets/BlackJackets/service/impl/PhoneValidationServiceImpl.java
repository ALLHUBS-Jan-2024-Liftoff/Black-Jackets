package BlackJackets.BlackJackets.service.impl;

import BlackJackets.BlackJackets.service.PhoneValidationService;
import com.fasterxml.jackson.databind.util.JSONPObject;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.reactive.function.client.WebClient;

import java.util.HashMap;
import java.util.Map;

@Service
public class PhoneValidationServiceImpl implements PhoneValidationService {


    @Override
    public Boolean validatePhoneNumber(String phoneNumber){
        Boolean phoneIsValid = false;
        // validate phone number
        String uri = "https://phonevalidation.abstractapi.com/v1?api_key=eb0fe5c6dc4d451e9c842dbd7fafb01f&phone=" + phoneNumber;
        RestTemplate restTemplate = new RestTemplate();

//        String apiResponse = restTemplate.getForObject(uri, String.class);
//
//        JsonReader responseObj = new JSONPObject(apiResponse);

//        WebClient.Builder builder = WebClient.builder();
//        String apiResponse = builder.build().get().uri(uri).retrieve().bodyToMono(String.class).block();

//        System.out.println("--------------");
//        System.out.println(apiResponse);
//        System.out.println("--------------");



        return phoneIsValid;
    }
}
