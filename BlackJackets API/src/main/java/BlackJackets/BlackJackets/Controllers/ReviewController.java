package BlackJackets.BlackJackets.Controllers;

import BlackJackets.BlackJackets.data.ReviewRepo;
import BlackJackets.BlackJackets.models.Review;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("reviews")
@CrossOrigin(origins = "http://localhost:5173")
public class ReviewController {

    @Autowired
    private ReviewRepo reviewRepo;

    // Create Review
    @PostMapping("/{venueId}/add")
    public Review addReview(@RequestBody Review review, @PathVariable Integer venueId){
        Review newReview = review;
        // add venueId to newReview
        return reviewRepo.save(review);
    }


    // Read Review needed

    // Update and Delete need band profile functionality
}
