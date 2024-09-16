package BlackJackets.BlackJackets.service.impl;

import BlackJackets.BlackJackets.service.PhoneValidationService;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class PhoneValidationServiceImpl implements PhoneValidationService {

    @Override
    public /*Boolean*/ String validatePhoneNumber(String phoneNumber){
        Boolean phoneIsValid = false;
        // validate phone number
        String uri = "https://phonevalidation.abstractapi.com/v1?api_key=eb0fe5c6dc4d451e9c842dbd7fafb01f&phone=" + phoneNumber;

        RestTemplate restTemplate = new RestTemplate();

        System.out.println(uri);

        ResponseEntity<String> response = restTemplate.getForEntity(uri, String.class);

        String phoneInfo = response.getBody();

        System.out.println(phoneInfo);

        return /*phoneIsValid*/ phoneInfo;
    }

// Before Phillip
    /*@Override
    public Boolean validatePhoneNumber(String phoneNumber){
        Boolean phoneIsValid = false;
        // validate phone number
        String uri = "https://phonevalidation.abstractapi.com/v1?api_key=eb0fe5c6dc4d451e9c842dbd7fafb01f&phone=" + phoneNumber;

        // Molaleni's video
//        try {
//            Unirest.setTimeouts(0, 0);
//            HttpResponse<String> response = (HttpResponse<String>) Unirest.get(uri).asString();
//
//            String body = response.body();
//            JSONParser parser = new JSONParser(body);
//
//            LinkedHashMap<String, Object> phoneData = parser.object();
//            System.out.println(phoneData);
//        } catch (Exception e){}

        // Nil's article
//        try {
//            URL url = new URL(uri);
//
//            HttpURLConnection conn = (HttpURLConnection) url.openConnection();
//            conn.setRequestMethod("GET");
//            conn.connect();
//
//            int responsecode = conn.getResponseCode();
//
//            if (responsecode != 200) {
//                throw new RuntimeException(("HttpResponseCode: " + responsecode));
//            } else {
//                String inline = "";
//                Scanner scanner = new Scanner(url.openStream());
//
//                //Write all the JSON data into a string using a scanner
//                while (scanner.hasNext()) {
//                    inline += scanner.nextLine();
//                }
//
//                //Close the scanner
//                scanner.close();
//
//                //Using the JSON simple library parse the string into a json object
//                JSONParser parse = new JSONParser();
//                JSONObject data_obj = (JSONObject) parse.parse(inline);
//
//                //Get the required object from the above created object
//                JSONObject obj = (JSONObject) data_obj.get("Global");
//
//                //Get the required data using its key
//                System.out.println(obj.get("TotalRecovered"));
//            }
//
//        } catch (Exception e){}

        RestTemplate restTemplate = new RestTemplate();

        String apiResponse = restTemplate.getForObject(uri, String.class);

//        JsonReader responseObj = new JSONPObject(apiResponse);
//
//        WebClient.Builder builder = WebClient.builder();
//        String apiResponse = builder.build().get().uri(uri).retrieve().bodyToMono(String.class).block();

        System.out.println("--------------");
        System.out.println(apiResponse);
//        System.out.println("--------------");

        if (apiResponse.contains("\"valid\":true")){
            phoneIsValid = true;
        }
//        ObjectMapper objectMapper = new ObjectMapper();
//       Map <String, Object> jsonMap = objectMapper.readValue(apiResponse, new TypeReference<Map<String, Object>>() {});


        return phoneIsValid;
    }*/
}
