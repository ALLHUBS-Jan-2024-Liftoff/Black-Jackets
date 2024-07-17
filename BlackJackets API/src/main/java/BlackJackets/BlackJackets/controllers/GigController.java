package BlackJackets.BlackJackets.controllers;

import BlackJackets.BlackJackets.data.GigRepository;
import BlackJackets.BlackJackets.models.Gig;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("Gig")
public class GigController {

    @Autowired
    private GigRepository gigRepository;

    @PostMapping("Gig")
    public Gig processCreateGig(@RequestBody String gigName) {
        return new Gig(gigName);
    }

}
