package BlackJackets.BlackJackets.config;

import BlackJackets.BlackJackets.dto.GigDto;
import BlackJackets.BlackJackets.models.Gig;

public class GigMapper {

    public static GigDto mapToGigDto(Gig gig){
        return new GigDto(
                gig.getId(),
                gig.getName(),
                gig.getDate(),
                gig.getGenre(),
                gig.getAges()
        );
    }

    public static Gig mapToGig(GigDto gigDto){
        return new Gig(
                gigDto.getId(),
                gigDto.getName(),
                gigDto.getDate(),
                gigDto.getGenre(),
                gigDto.getAges()
        );
    }
}
