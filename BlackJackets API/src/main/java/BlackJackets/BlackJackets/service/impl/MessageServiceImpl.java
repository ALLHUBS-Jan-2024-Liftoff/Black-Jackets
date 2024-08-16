package BlackJackets.BlackJackets.service.impl;

import BlackJackets.BlackJackets.data.MessageRepo;
import BlackJackets.BlackJackets.dto.MessageDTO;
import BlackJackets.BlackJackets.models.Message;
import BlackJackets.BlackJackets.service.MessageService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class MessageServiceImpl implements MessageService {

    @Autowired
    private ModelMapper modelMapper;

    @Autowired
    private MessageRepo messageRepo;

    // Create Message
    @Override
    public String createMessage(MessageDTO messageDTO) {
        Message message = this.modelMapper.map(messageDTO, Message.class);
        this.messageRepo.save(message);
        return "Message added successfully";
    }
}
