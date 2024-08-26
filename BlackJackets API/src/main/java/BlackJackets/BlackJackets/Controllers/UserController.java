package BlackJackets.BlackJackets.Controllers;

import BlackJackets.BlackJackets.data.ConfirmationTokenRepository;
import BlackJackets.BlackJackets.data.UserRepository;
import BlackJackets.BlackJackets.dto.LoginFormDTO;
import BlackJackets.BlackJackets.dto.RegisterFormDTO;
import BlackJackets.BlackJackets.dto.VenueDto;
import BlackJackets.BlackJackets.models.ConfirmationToken;
import BlackJackets.BlackJackets.models.Gig;
import BlackJackets.BlackJackets.models.User;
import BlackJackets.BlackJackets.models.Venue;
import BlackJackets.BlackJackets.service.EmailService;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.web.bind.annotation.*;


import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("user")
@CrossOrigin(origins = "http://localhost:5173")
public class UserController {

    @Autowired
    UserRepository userRepository;

    @Autowired
    ConfirmationTokenRepository confirmationTokenRepository;

    @Autowired
    EmailService emailService;

    private static final String userSessionKey = "user";

    public User getUserFromSession(HttpSession session) {
        Integer userId = (Integer) session.getAttribute(userSessionKey);
        if (userId == null) {
            return null;
        }

        Optional<User> user = userRepository.findById(userId);

        if (user.isEmpty()) {
            return null;
        }

        return user.get();
    }

    private static void setUserInSession(HttpSession session, User user) {
        session.setAttribute(userSessionKey, user.getId());
    }

    @PostMapping(value= "/register" )
    public ResponseEntity<Map> processRegistrationForm(@RequestBody RegisterFormDTO registerFormDTO,
                                                       HttpServletRequest request )  {
        ResponseEntity response = null;
        Map<String, String> responseBody = new HashMap<>();
        try{
            User existingUser = userRepository.findByEmail(registerFormDTO.getEmail());
            if (existingUser == null && !registerFormDTO.getEmail().isEmpty() && !registerFormDTO.getPassword().isEmpty()){
                User newUser = new User(registerFormDTO.getEmail(), registerFormDTO.getPassword(), registerFormDTO.getFullName());
                setUserInSession(request.getSession(), newUser);
                userRepository.save(newUser);

                ConfirmationToken confirmationToken = new ConfirmationToken(newUser);

                confirmationTokenRepository.save(confirmationToken);
                System.out.println("Confirmation Token: " + confirmationToken.getConfirmationToken());
                SimpleMailMessage mailMessage = new SimpleMailMessage();
                mailMessage.setTo(newUser.getEmail());
                mailMessage.setSubject("Complete Registration!");
                mailMessage.setText("To confirm your account, please click here : "
                        +"http://localhost:8090/user/confirm-account?token="+confirmationToken.getConfirmationToken());
                emailService.sendEmail(mailMessage);

                ObjectMapper objectMapper = new ObjectMapper();
                String userString = objectMapper.writeValueAsString(newUser);
                responseBody.put("message", "Registration successful. Please verify email by the link sent on your email address");
//                responseBody.put("User", userString);
                response = ResponseEntity
                        .status(HttpStatus.CREATED)
                        .body(responseBody);
            } else if(existingUser != null) {
                responseBody.put("message", "User Already Exists.");
                response = ResponseEntity
                        .status(HttpStatus.BAD_REQUEST)
                        .body(responseBody);
            } else if(registerFormDTO.getEmail().isEmpty()) {
                responseBody.put("message", "Username required.");
                response = ResponseEntity
                        .status(HttpStatus.BAD_REQUEST)
                        .body(responseBody);
            } else if (registerFormDTO.getPassword().isEmpty()) {
                responseBody.put("message", "Password required");
                response = ResponseEntity
                        .status(HttpStatus.BAD_REQUEST)
                        .body(responseBody);
            }
        }catch (Exception ex){
            responseBody.put("message", "An exception occurred due to " + ex.getMessage());
            response = ResponseEntity
                    .status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(responseBody);
        }
        return response;
    }

    @PostMapping("/login")
    public ResponseEntity<User> processLoginForm(@RequestBody LoginFormDTO loginFormDTO, HttpServletRequest request) throws JsonProcessingException {

        ResponseEntity response = null;
        Map<String, String> responseBody = new HashMap<>();
        User theUser = userRepository.findByEmail(loginFormDTO.getEmail());
        String password = loginFormDTO.getPassword();
        if (theUser == null) {
            responseBody.put("message", "Username does not exist");
            response = ResponseEntity
                    .status(HttpStatus.BAD_REQUEST)
                    .body(responseBody);
        }else if (!theUser.isMatchingPassword(password)) {
            responseBody.put("message", "Password does not match");
            response = ResponseEntity
                    .status(HttpStatus.BAD_REQUEST)
                    .body(responseBody);
        } else {
            setUserInSession(request.getSession(), theUser);
            ObjectMapper objectMapper = new ObjectMapper();
            String userString = objectMapper.writeValueAsString(theUser);
            responseBody.put("message", "User successfully logged in.");
            responseBody.put("User", userString);
            response = ResponseEntity
                    .status(HttpStatus.CREATED)
                    .body(responseBody);
        }
        return  response;
    }

    @GetMapping("/logout")
    public String logout(HttpServletRequest request){
        request.getSession().invalidate();
        return "/login";
    }

    @RequestMapping(value="/confirm-account", method= {RequestMethod.GET, RequestMethod.POST})
    public ResponseEntity<?> confirmEmail(@RequestParam("token")String confirmationToken) throws JsonProcessingException {
        ConfirmationToken token = confirmationTokenRepository.findByConfirmationToken(confirmationToken);

        if(token != null)
        {
            User user = userRepository.findByEmail(token.getUserEntity().getEmail());
            user.setEnabled(true);
            userRepository.save(user);
            return ResponseEntity.ok("Email verified successfully!");
        }
        return ResponseEntity.badRequest().body("Error: Couldn't verify email");
}
    @GetMapping("{Id}")
    public ResponseEntity<User> getUserById(@PathVariable("Id") int userId) {
        User user = userRepository.getUserById(userId);
        return new ResponseEntity<>(user, HttpStatusCode.valueOf(200));
    }
}