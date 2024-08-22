package BlackJackets.BlackJackets.service.impl;

import BlackJackets.BlackJackets.data.MessageRepo;
import BlackJackets.BlackJackets.data.VenueRepo;
import BlackJackets.BlackJackets.dto.MessageDTO;
import BlackJackets.BlackJackets.models.Message;
import BlackJackets.BlackJackets.models.Venue;
import BlackJackets.BlackJackets.service.MessageService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class MessageServiceImpl implements MessageService {

    @Autowired
    private ModelMapper modelMapper;

    @Autowired
    private MessageRepo messageRepo;

    @Autowired
    private VenueRepo venueRepo;

    // Create Message
    @Override
    public String createNewMessage(MessageDTO messageDTO, int venueId) {
        Message message = this.modelMapper.map(messageDTO, Message.class);
        Optional<Venue> venue = venueRepo.findById(venueId);
        message.setVenue(venue.get());
        this.messageRepo.save(message);
        return "Message added successfully";
    }

    // Get All Messages
    @Override
    public List<MessageDTO> getAllMessages() {
        List<Message> all = this.messageRepo.findAll();
        return all.stream().map(
                dto -> new MessageDTO(dto.getId(),
                        dto.getName(),
                        dto.getEmail(),
                        dto.getContent()
                )).collect(Collectors.toList());
    }

    @Override
    public List<Message> getAllMessagesByVenueId(int venueId) {
        List<Message> messageList = this.messageRepo.findByVenueId(venueId);
        return messageList;
    }

}
