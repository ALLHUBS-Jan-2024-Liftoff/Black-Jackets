package BlackJackets.BlackJackets.dto;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import org.springframework.web.multipart.MultipartFile;


//@Entity
public class VenueDto {

//    @Id
//    @GeneratedValue(strategy = GenerationType.IDENTITY)
//    private Long id;
    private String name;
    private MultipartFile venue_Image;

    private String venueImgData;

//

    public String getVenueImgData() {
        return venueImgData;
    }

    public void setVenueImgData(String venueImgData) {
        this.venueImgData = venueImgData;
    }
//    public Long getId() {
//        return id;
//    }
//
//    public void setId(Long id) {
//        this.id = id;
//    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
    public MultipartFile  getVenue_Image() {
        return venue_Image;
    }

    public void setVenue_Image(MultipartFile  venue_Image) {
        this.venue_Image = venue_Image;
    }

    public VenueDto() {
    }

//    public VenueDto(Long id, String name ) {//, MultipartFile  venue_Image) {
//        this.id = id;
//        this.name = name;
//        //this.venue_Image = venue_Image;
//    }
}
