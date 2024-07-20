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

    @Autowired
    private GigRepository gigRepository;

//    Add Gig
    @PostMapping("add")
    public Gig processCreateGig(@RequestBody Gig newGig) {
        return gigRepository.save(newGig);
    }

}
