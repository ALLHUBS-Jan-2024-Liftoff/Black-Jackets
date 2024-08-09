package BlackJackets.BlackJackets.Controllers;

import BlackJackets.BlackJackets.dto.LoginFormDTO;
import BlackJackets.BlackJackets.dto.RegisterFormDTO;
import BlackJackets.BlackJackets.models.User;
import BlackJackets.BlackJackets.responses.LoginResponse;
import BlackJackets.BlackJackets.service.AuthenticationService;
import BlackJackets.BlackJackets.service.JwtService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
@CrossOrigin
public class AuthenticationController {
    private final JwtService jwtService;

    private final AuthenticationService authenticationService;

    public AuthenticationController(JwtService jwtService, AuthenticationService authenticationService) {
        this.jwtService = jwtService;
        this.authenticationService = authenticationService;
    }

    @PostMapping("/register")
    public ResponseEntity<User> register(@RequestBody RegisterFormDTO registerFormDto) {
        User registeredUser = authenticationService.signup(registerFormDto);

        return ResponseEntity.ok(registeredUser);
    }

    @PostMapping("/login")
    public ResponseEntity<LoginResponse> authenticate(@RequestBody LoginFormDTO loginFormDto) {
        User authenticatedUser = authenticationService.authenticate(loginFormDto);

        String jwtToken = jwtService.generateToken(authenticatedUser);

        LoginResponse loginResponse = new LoginResponse();
                loginResponse.setToken(jwtToken);
                loginResponse.setExpiresIn(jwtService.getExpirationTime());

        return ResponseEntity.ok(loginResponse);
    }
}