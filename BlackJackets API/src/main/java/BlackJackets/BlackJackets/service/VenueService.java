package BlackJackets.BlackJackets.service;

import BlackJackets.BlackJackets.dto.VenueDto;
import BlackJackets.BlackJackets.models.Gig;
import BlackJackets.BlackJackets.models.Review;

import java.util.List;

public interface VenueService {

    String createNewVenue(VenueDto venueDto);

    VenueDto getVenueById(int venueId);

    List<VenueDto> getAllVenues();

    VenueDto updateVenue(int venueId, VenueDto venueDto);

    void deleteVenue(int venueId);

    List<Gig> getAllGigsByVenueId(int venueId);

    List<Review> getAllReviewsByVenueId(int venueId);

}
