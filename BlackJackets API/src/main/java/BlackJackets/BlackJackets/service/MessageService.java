package BlackJackets.BlackJackets.service;

import BlackJackets.BlackJackets.dto.MessageDTO;

import java.util.List;

public interface MessageService {

    String createMessage(MessageDTO messageDTO);

    List<MessageDTO> getAllMessages();
}
