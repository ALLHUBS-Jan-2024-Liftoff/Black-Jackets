package BlackJackets.BlackJackets.config;

import BlackJackets.BlackJackets.dto.VenueDto;
import BlackJackets.BlackJackets.entity.Venue;

import javax.sql.rowset.serial.SerialBlob;
import java.io.BufferedReader;
import java.io.IOException;
import java.sql.SQLException;

public class VenueMapper {

//    public static VenueDto mapToVenueDto(Venue venue){
//        return new VenueDto(
//                venue.getId(),
//                venue.getName()
//                //venue.getVenue_Image().
//        );
//    }

        public static VenueDto mapToVenueDto(Venue venue) throws SQLException, IOException {
            VenueDto v = new VenueDto();
            v.setName(venue.getName());
            //v.setVenue_Image(venue.getVenue_Image().getBinaryStream());
            java.io.InputStream myInputStream = venue.getVenue_Image().getBinaryStream();

            java.io.BufferedReader in = new BufferedReader(new java.io.InputStreamReader(myInputStream));
            String total="";
            String str;
            while ((str = in.readLine()) != null) {
                total += str;
            }
            myInputStream.close();
            v.setVenueImgData(total);
        return v;

    }

    public static Venue mapToVenue(VenueDto venueDto) throws IOException, SQLException {
        return new Venue(
                venueDto.getName(),
                new SerialBlob(venueDto.getVenue_Image().getBytes())
        );
    }
}
