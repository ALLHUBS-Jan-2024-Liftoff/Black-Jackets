package BlackJackets.BlackJackets.Controllers;

import BlackJackets.BlackJackets.dto.VenueDto;
import BlackJackets.BlackJackets.models.Gig;
import BlackJackets.BlackJackets.service.VenueService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping("venue")
@CrossOrigin(origins = "*")
public class VenueController {
    @Autowired
    private VenueService venueService;

    //Create Venue
    @PostMapping("add")
    public ResponseEntity<String> createVenue(@RequestBody VenueDto venueDto) throws IOException{
        String message = this.venueService.createNewVenue(venueDto);
        return new ResponseEntity<String>(message, HttpStatusCode.valueOf(200));
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
    public ResponseEntity<List<Gig>> getAllGigsByVenueId(@PathVariable("Id") Integer venueId){
        return new ResponseEntity<>(this.venueService.getAllGigsByVenueId(venueId),HttpStatusCode.valueOf(200));
    }
}
