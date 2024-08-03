package BlackJackets.BlackJackets.Controllers;

import BlackJackets.BlackJackets.data.GigRepository;
import BlackJackets.BlackJackets.models.Gig;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("gigs")
@CrossOrigin(origins = "http://localhost:5173")
public class GigController {

    @Autowired
    private GigRepository gigRepository;

//    Add Gig
    @PostMapping("add")
    public Gig processCreateGig(@RequestBody Gig newGig) {
        return gigRepository.save(newGig);
    }

    @GetMapping("all")
    public List<Gig> renderAllGigs(){
        return gigRepository.findAll();
    }

}
