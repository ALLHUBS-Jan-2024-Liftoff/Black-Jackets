package BlackJackets.BlackJackets.service;

import BlackJackets.BlackJackets.dto.MessageDTO;
import BlackJackets.BlackJackets.models.Message;

import java.util.List;

public interface MessageService {

    String createNewMessage(MessageDTO messageDTO);

    List<MessageDTO> getAllMessages();

    List<Message> getAllMessagesByVenueId(int venueId);
}
