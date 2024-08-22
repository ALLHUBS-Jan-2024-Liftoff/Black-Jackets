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
    private UserController userController;
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
    @GetMapping("{id}")
    public Gig findGigById(@PathVariable("id") Long gigId) {
        return gigRepository.findById(gigId).get();
    }

    //Get all Gigs owned by Venue
    @GetMapping("list/{id}")
    public List<Gig> findGigsByVenue(@PathVariable("id") int venueId){
        return gigRepository.findByVenueIdOrderByDateAsc(venueId);
    }

    @PutMapping("edit/{id}")
    public Gig editGigById(@PathVariable("id") long id, @RequestBody Gig editedGig){
        Gig gigToEdit = gigRepository.getReferenceById(id);

        gigToEdit.setName(editedGig.getName());
        gigToEdit.setDate(editedGig.getDate());
        gigToEdit.setGenre(editedGig.getGenre());
        gigToEdit.setAges(editedGig.getAges());
        gigToEdit.setHeadliner(editedGig.getHeadliner());
        gigToEdit.setOpeningAct(editedGig.getOpeningAct());
        gigToEdit.setSupportingAct(editedGig.getSupportingAct());
        gigToEdit.setBandSlots(editedGig.getBandSlots());

        return gigRepository.save(gigToEdit);
    }

    //Delete Gig
    @DeleteMapping("{id}")
    public ResponseEntity<String> deleteGigById(@PathVariable("id") Long gigId){
        gigRepository.deleteById(gigId);
        return new ResponseEntity<String>("Gig deleted", HttpStatusCode.valueOf(200));
    }

}
