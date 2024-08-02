package BlackJackets.BlackJackets.Controllers;

import BlackJackets.BlackJackets.data.GigRepository;
import BlackJackets.BlackJackets.data.VenueRepo;
import BlackJackets.BlackJackets.models.Gig;
import BlackJackets.BlackJackets.models.Venue;
import org.springframework.beans.factory.annotation.Autowired;
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
    @GetMapping("all")
    public List<Gig> findAllGigs() {
        return gigRepository.findAll();
    }

    // Get one Gig
    @GetMapping("{id}")
    public Gig findGigById(@PathVariable("id") Long gigId) {
        return gigRepository.findById(gigId).get();
    }

    //Get all Gigs owned by one Venue
    // Will Finish after ORM Mapping
//    @GetMapping()
//    public List<Gig> findGigsByVenue(@RequestParam int venueId){
//        return gigRepository.findByVenue(venueId);
//    }

}
