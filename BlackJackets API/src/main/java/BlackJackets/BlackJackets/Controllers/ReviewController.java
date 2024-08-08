package BlackJackets.BlackJackets.Controllers;

import BlackJackets.BlackJackets.data.ReviewRepo;
import BlackJackets.BlackJackets.data.VenueRepo;
import BlackJackets.BlackJackets.models.Review;
import BlackJackets.BlackJackets.models.Venue;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("reviews")
@CrossOrigin(origins = "http://localhost:5173")
public class ReviewController {

    @Autowired
    private ReviewRepo reviewRepo;

    @Autowired
    private VenueRepo venueRepo;

    // Create Review
    @PostMapping("/{venueId}/add")
    public Review addReview(@RequestBody Review review, @PathVariable Integer venueId){
        Review newReview = review;
        Venue reviewedVenue = venueRepo.getReferenceById(venueId);
        newReview.setVenue(reviewedVenue);
        return reviewRepo.save(newReview);
    }


    // Read Review needed

    // Update and Delete need band profile functionality
}
