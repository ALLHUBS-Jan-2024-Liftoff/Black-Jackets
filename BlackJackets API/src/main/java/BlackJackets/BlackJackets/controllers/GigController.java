package BlackJackets.BlackJackets.Controllers;

import BlackJackets.BlackJackets.data.GigRepository;
import BlackJackets.BlackJackets.data.VenueRepo;
import BlackJackets.BlackJackets.models.Gig;
import BlackJackets.BlackJackets.models.Venue;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("gigs")
@CrossOrigin(origins = "http://localhost:5173")
public class GigController {

    @Autowired
    private GigRepository gigRepository;

    @Autowired
    private VenueRepo venueRepo;

    //    Add Gig
    @PostMapping("add")
    public Gig processCreateGig(@RequestBody Gig newGig, @RequestParam int venueId) {
        Venue venue = venueRepo.findById(venueId).get();
        newGig.setVenue(venue);
       return gigRepository.save(newGig);
    }

    // Get all Gigs
    @GetMapping("list/all")
    public List<Gig> findAllGigs() {
        return gigRepository.findAllByOrderByDateAsc();
    }

    // Get one Gig
    @GetMapping("list/{id}")
    public Gig findGigById(@PathVariable("id") Long gigId) {
        return gigRepository.findById(gigId).get();
    }

    //Get all Gigs owned by Venue
    @GetMapping()
    public List<Gig> findGigsByVenue(@RequestParam int venueId){
        return gigRepository.findByVenueId(venueId);
    }

    //Delete Gig
    @DeleteMapping("{id}")
    public ResponseEntity<String> deleteGigById(@PathVariable("id") Long gigId){
        gigRepository.deleteById(gigId);
        return new ResponseEntity<String>("Gig deleted", HttpStatusCode.valueOf(200));
    }

}
