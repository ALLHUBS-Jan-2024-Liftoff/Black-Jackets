package BlackJackets.BlackJackets.controller;

import BlackJackets.BlackJackets.dto.VenueDto;
import BlackJackets.BlackJackets.services.VenueService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.sql.SQLException;
import java.util.List;

@RestController
@RequestMapping("/venues")
public class VenueController {

    @Autowired
    private VenueService venueService;

//    @PostMapping(value = "/uploadFile", consumes = MediaType.MULTIPART_FORM_DATA_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
//    public ResponseEntity<String> uploadFile(@RequestPart(value = "file") MultipartFile file) {
//        service.uploadFile(file);
//        return new ResponseEntity<>("success", HttpStatus.OK);
//    }

    @PostMapping(value = "/uploadFile", consumes = MediaType.MULTIPART_FORM_DATA_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<String> uploadFile(@RequestPart(value = "file") MultipartFile file,
                                             @RequestPart(value = "data") String name) throws IOException, SQLException {
        //service.uploadFile(file);
        //VenueDto savedVenue = venueService.createVenue(venueDto);
        venueService.uploadFile(file,name);
//        return new ResponseEntity<>(savedVenue, HttpStatus.CREATED);
        return new ResponseEntity<>("success", HttpStatus.OK);
    }

    //Create Venue
    @PostMapping(value = "/add", consumes = {"*/*"})
    public ResponseEntity<VenueDto> createVenue(@RequestBody  VenueDto venueDto) throws IOException, SQLException {
        //venueDto.setVenue_Image();
        VenueDto savedVenue = venueService.createVenue(venueDto);
        return new ResponseEntity<>(savedVenue, HttpStatus.CREATED);
    }

    //Get Venue By Id
    @GetMapping("{id}")
    public ResponseEntity<VenueDto> getVenueById(@PathVariable Long id) throws SQLException, IOException {
        VenueDto venueDto = venueService.getVenueById(id);
        return ResponseEntity.ok(venueDto);
    }

    //Get All Venues
    @GetMapping
    public ResponseEntity<List<VenueDto>> getAllVenues(){
        List<VenueDto> venues = venueService.getAllVenues();
        return ResponseEntity.ok(venues);
    }

    // Update Venue
    @PutMapping("{id}")
    public ResponseEntity<VenueDto> updateVenue(@PathVariable Long id, @RequestBody VenueDto updatedVenue) throws SQLException, IOException {
        VenueDto venueDto = venueService.updateVenue(id, updatedVenue);
        return ResponseEntity.ok(venueDto);
    }

    //Delete Venue
    @DeleteMapping("{id}")
    public ResponseEntity<String> deleteVenue(@PathVariable Long id){
        venueService.deleteVenue(id);
        return ResponseEntity.ok("Employee Deleted Successfully!.");
    }
}
