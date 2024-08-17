package BlackJackets.BlackJackets.service;

import BlackJackets.BlackJackets.dto.VenueDto;
import BlackJackets.BlackJackets.models.Gig;
import BlackJackets.BlackJackets.models.Message;

import java.util.List;

public interface VenueService {

    String createNewVenue(VenueDto venueDto);

    VenueDto getVenueById(int venueId);

    List<VenueDto> getAllVenues();

    VenueDto updateVenue(int venueId, VenueDto venueDto);

    void deleteVenue(int venueId);

    List<Gig> getAllGigsByVenueId(int venueId);

    List<Message> getAllMessagesByVenueId(int venueId);
}
