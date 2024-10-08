package BlackJackets.BlackJackets.service.impl;
import BlackJackets.BlackJackets.Controllers.UserController;
import BlackJackets.BlackJackets.data.GigRepository;
import BlackJackets.BlackJackets.dto.VenueDto;
import BlackJackets.BlackJackets.models.Gig;
import BlackJackets.BlackJackets.models.User;
import BlackJackets.BlackJackets.models.Venue;
import BlackJackets.BlackJackets.data.VenueRepo;
import BlackJackets.BlackJackets.data.UserRepository;
import BlackJackets.BlackJackets.service.VenueService;
import jakarta.servlet.http.HttpSession;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class VenueServiceImpl implements VenueService {

    @Autowired
    private ModelMapper modelMapper;

    @Autowired
    private VenueRepo venueRepo;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private GigRepository gigRepository;

    @Autowired
    private UserController userController;

    // Create Venue
    @Override
    public Venue createNewVenue(VenueDto venueDto) {

        Venue venue = this.modelMapper.map(venueDto, Venue.class);
        System.out.println(venue);
        this.venueRepo.save(venue);

        return venue;
    }

    // Get Venue By Id
    @Override
    public VenueDto getVenueById(int venueId) {
       Venue venue = this.venueRepo.findById(venueId).orElseThrow();
        return this.modelMapper.map(venue,VenueDto.class);
    }

    // Get All Venues
    @Override
    public List<VenueDto> getAllVenues() {
        List<Venue> all = this.venueRepo.findAll();
        return all.stream().map(
                dto -> new VenueDto(dto.getId(),
                        dto.getName(),
                        dto.getCapacity(),
                        dto.getLocation(),
                        dto.getEmail(),
                        dto.getPhone(),
                        dto.getUser(),
                        dto.getGigs(),
                        dto.getReviews()

                        )).collect(Collectors.toList());

    }

    // Update Venue
    @Override
    public VenueDto updateVenue(int venueId, VenueDto venueDto) {
        Venue venue = this.venueRepo.findById(venueId).orElseThrow();
        venue.setName(venueDto.getName());
        venue.setCapacity(venueDto.getCapacity());
        venue.setLocation(venueDto.getLocation());
        venue.setEmail(venueDto.getEmail());
        venue.setPhone(venueDto.getPhone());

        venueRepo.save(venue);
        return this.modelMapper.map(venue, VenueDto.class);
    }

    // Delete Venue
    @Override
    public void deleteVenue(int venueId) {
        this.venueRepo.deleteById(venueId);
    }

    //Get All Gigs By VenueId
    @Override
    public List<Gig> getAllGigsByVenueId(int venueId) {
        List<Gig> gigList = gigRepository.findByVenueId(venueId);
        return gigList;
    }

}
