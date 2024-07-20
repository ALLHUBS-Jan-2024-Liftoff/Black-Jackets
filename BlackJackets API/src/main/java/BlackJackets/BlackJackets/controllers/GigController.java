package BlackJackets.BlackJackets.controllers;

import BlackJackets.BlackJackets.data.GigRepository;
import BlackJackets.BlackJackets.models.Gig;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("gigs")
//@CrossOrigin(origins = "http://localhost:5173")
public class GigController {

//    private GigService gigService;

    @Autowired
    private GigRepository gigRepository;

//    // Add Gig REST API with service
//    @PostMapping("add")
//    public ResponseEntity<GigDto> createGig(@RequestBody GigDto gigDto) {
//        GigDto savedGig = gigService.createGig(gigDto);
//        return new ResponseEntity<>(savedGig, HttpStatus.CREATED);
//    }

//    Add Gig
    @PostMapping("add")
    public Gig processCreateGig(@RequestBody Gig newGig) {
        return gigRepository.save(newGig);
    }

}
