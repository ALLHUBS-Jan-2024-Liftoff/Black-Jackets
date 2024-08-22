package BlackJackets.BlackJackets.Controllers;

import BlackJackets.BlackJackets.dto.VenueDto;
import BlackJackets.BlackJackets.models.Gig;
import BlackJackets.BlackJackets.models.User;
import BlackJackets.BlackJackets.models.Venue;
import BlackJackets.BlackJackets.service.VenueService;
import com.fasterxml.jackson.databind.ObjectMapper;
import jakarta.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("venue")
@CrossOrigin(origins = "http://localhost:5173")
public class VenueController {
    @Autowired
    private VenueService venueService;
    @Autowired
    private UserController userController;

    //Create Venue
    @PostMapping("add")
    public ResponseEntity<Map> createVenue(@RequestBody VenueDto venueDto) throws IOException{
        ResponseEntity response = null;
        Map<String, String> responseBody = new HashMap<>();
        Venue venue = this.venueService.createNewVenue(venueDto);
        ObjectMapper objectMapper = new ObjectMapper();
        String venueString = objectMapper.writeValueAsString(venue);
        responseBody.put("message", "Venue created successfully");
        responseBody.put("venue", venueString);
        response = ResponseEntity
                .status(HttpStatusCode.valueOf(200))
                .body(responseBody);
        return response;
    }

    //Get Venue by Id
    @GetMapping("{Id}")
    public ResponseEntity<VenueDto> getVenueById(@PathVariable("Id") int venueId) {
        VenueDto venue = venueService.getVenueById(venueId);
        return new ResponseEntity<>(venue, HttpStatusCode.valueOf(200));
    }

    //Get All Venues
    @GetMapping
    public ResponseEntity<List<VenueDto>> getAllVenues(){
        List<VenueDto> venues = venueService.getAllVenues();
        return new ResponseEntity<>(venues,HttpStatusCode.valueOf(200));
    }

    //Update Venue
    @PutMapping("{Id}")
    public ResponseEntity<VenueDto> updateVenue(@RequestBody VenueDto venueDto, @PathVariable("Id") Integer venueId) throws IOException {
        VenueDto updateVenueObj = venueService.updateVenue(venueId,venueDto);
        return new ResponseEntity<VenueDto>(updateVenueObj,HttpStatusCode.valueOf(200));
    }


    //Delete Venue
    @DeleteMapping(value = "{Id}")
    public ResponseEntity<String> deleteVenue(@PathVariable("Id") Integer venueId){
        this.venueService.deleteVenue(venueId);
        return new ResponseEntity<String>("Venue deleted",HttpStatusCode.valueOf(200));
    }

    //Get Mapping For gigs
    @GetMapping("/allGigs/{venueId}")
    public ResponseEntity<List<Gig>> getAllGigsByVenueId(@PathVariable Integer venueId){
        return new ResponseEntity<>(this.venueService.getAllGigsByVenueId(venueId),HttpStatusCode.valueOf(200));
    }

}
