package BlackJackets.BlackJackets.services.impl;

import BlackJackets.BlackJackets.config.VenueMapper;
import BlackJackets.BlackJackets.dto.VenueDto;
import BlackJackets.BlackJackets.entity.Venue;
import BlackJackets.BlackJackets.exception.ResourceNotFoundException;
import BlackJackets.BlackJackets.repositories.VenueRepo;
import BlackJackets.BlackJackets.services.VenueService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import javax.sql.rowset.serial.SerialBlob;
import java.io.IOException;
import java.sql.Blob;
import java.sql.SQLException;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class VenueServiceImpl implements VenueService {

       @Autowired
       private VenueRepo venueRepo;

//    @Override
//    public String createVenue(VenueDto venueDto) {
//        Venue venue = new Venue(
//                venueDto.getId(),
//                venueDto.getName()
//        );
//        venueRepo.save(venueDto);
//        return (venue.getName() == null?"error":venue.getName());
//    }

       @Override
       public VenueDto createVenue(VenueDto venueDto) throws IOException, SQLException {
           //byte[] bytearr = venueDto.getVenue_Image().getBytes();
           //bytearr.
           //venue.setI
           //Blob b = new Blob(bytearr);
           //bytearr.
           //bytearr.
           Venue venue = VenueMapper.mapToVenue(venueDto);
           //venue.setVenue_Image(bytearr);
           Venue savedVenue = venueRepo.save(venue);
           //return VenueMapper.mapToVenueDto(savedVenue);
           return venueDto;
       }

    @Override
    public VenueDto getVenueById(Long id) throws SQLException, IOException {
          Venue venue = venueRepo.findById(id)
                   .orElseThrow(() ->
                           new ResourceNotFoundException("Venue is not exists with given id : "+id));

        return VenueMapper.mapToVenueDto(venue);
    }

    @Override
    public List<VenueDto> getAllVenues() {
       List<Venue> venues = venueRepo.findAll();
        return venues.stream().map((venue)-> {
                    try {
                        return VenueMapper.mapToVenueDto(venue);
                    } catch (SQLException e) {
                        throw new RuntimeException(e);
                    } catch (IOException e) {
                        throw new RuntimeException(e);
                    }
                })
                .collect(Collectors.toList());
    }

    @Override
    public VenueDto updateVenue(Long id, VenueDto updatedVenue) throws SQLException, IOException {
        Venue venue = venueRepo.findById(id)
                .orElseThrow(() ->
                        new ResourceNotFoundException("Venue is not exists with given id : "+id));
        venue.setName(updatedVenue.getName());
        //venue.setVenue_Image(updatedVenue.getVenue_Image());
        Venue updatedVenueObj = venueRepo.save(venue);
        return VenueMapper.mapToVenueDto(updatedVenueObj);
    }

    @Override
    public void deleteVenue(long id) {
        Venue venue = venueRepo.findById(id)
                .orElseThrow(() ->
                        new ResourceNotFoundException("Venue is not exists with given id : "+id));
        venueRepo.deleteById(id);
    }

    @Override
    public void uploadFile(MultipartFile file,String venueName) throws IOException, SQLException {
           Venue v = new Venue();
           //v.setId(10l);
        v.setName(venueName);
        Blob blob = new SerialBlob(file.getBytes() );
        System.out.println("blob length"+blob.length());
        System.out.println("venueName"+venueName);
           v.setVenue_Image(blob);

        Venue savedVenue = venueRepo.save(v);
//        Venue venue = venueRepo.findById(id)
//                .orElseThrow(() ->
//                        new ResourceNotFoundException("Venue is not exists with given id : "+id));
//        venueRepo.deleteById(id);
    }
}
