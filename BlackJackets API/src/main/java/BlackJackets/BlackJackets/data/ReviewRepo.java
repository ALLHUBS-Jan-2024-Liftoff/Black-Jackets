package BlackJackets.BlackJackets.data;

import BlackJackets.BlackJackets.models.Reviews;

import java.util.ArrayList;
import java.util.List;

public class ReviewRepo {

    private final List reviews;

    public ReviewRepo() {
        this.reviews = new ArrayList<Reviews>();
    }

    public void addReview(Reviews review) {
        reviews.add(review);
    }

    public List getAllReviews() {
        return  reviews;
    }
}
