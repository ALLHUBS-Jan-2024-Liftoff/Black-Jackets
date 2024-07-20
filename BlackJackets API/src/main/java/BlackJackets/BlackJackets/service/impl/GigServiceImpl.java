//package BlackJackets.BlackJackets.service.impl;
//
//import BlackJackets.BlackJackets.config.GigMapper;
//import BlackJackets.BlackJackets.data.GigRepository;
//import BlackJackets.BlackJackets.dto.GigDto;
//import BlackJackets.BlackJackets.models.Gig;
//import BlackJackets.BlackJackets.service.GigService;
//import lombok.AllArgsConstructor;
//import org.springframework.stereotype.Service;
//
//@Service
//@AllArgsConstructor
//public class GigServiceImpl implements GigService {
//
//    private GigRepository gigRepository;
//
//    @Override
//    public GigDto createGig(GigDto gigDto) {
//
//        Gig gig = GigMapper.mapToGig(gigDto);
//        Gig savedGig = gigRepository.save(gig);
//
//        return GigMapper.mapToGigDto(savedGig);
//    }
//
//
//}
