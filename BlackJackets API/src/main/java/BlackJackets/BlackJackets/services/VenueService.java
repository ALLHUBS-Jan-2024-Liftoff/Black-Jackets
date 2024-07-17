package BlackJackets.BlackJackets.services;

import BlackJackets.BlackJackets.dto.VenueDto;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.sql.SQLException;
import java.util.List;

public interface VenueService {

    //String createVenue(VenueDto venueDto);
    VenueDto createVenue(VenueDto venueDto) throws IOException, SQLException;

    VenueDto getVenueById(Long id) throws SQLException, IOException;

    List<VenueDto> getAllVenues();

    VenueDto updateVenue(Long id, VenueDto updatedVenue) throws SQLException, IOException;

    void deleteVenue(long id);

    void uploadFile(MultipartFile File,String name) throws IOException, SQLException;

}
