package BlackJackets.BlackJackets.controllers;

import BlackJackets.BlackJackets.data.GigRepository;
import BlackJackets.BlackJackets.models.Gig;
import BlackJackets.BlackJackets.models.Venue;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

@RestController
@RequestMapping("gig")
//@CrossOrigin(origins = "http://localhost:5173")
public class GigController {

    @Autowired
    private GigRepository gigRepository;

    @PostMapping("add")
    public Gig processCreateGig(@RequestParam String name, String genre, ArrayList<String> bandArray, String ages) {
        Gig newGig = new Gig();
        newGig.setName(name);
        newGig.setGenre(genre);
        newGig.setBandArray(bandArray);
        newGig.setAges(ages);

        return gigRepository.save(newGig);
    }

//    Need to research how to use the DTOs and services to use the @RequestBody annotation
//    @PostMapping("add")
//    public Gig processCreateGig(@RequestBody Gig newGig) {
//        return gigRepository.save(newGig);
//    }

}
