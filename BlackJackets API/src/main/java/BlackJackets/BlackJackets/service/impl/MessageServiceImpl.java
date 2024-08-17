package BlackJackets.BlackJackets.service.impl;

import BlackJackets.BlackJackets.data.MessageRepo;
import BlackJackets.BlackJackets.dto.MessageDTO;
import BlackJackets.BlackJackets.models.Message;
import BlackJackets.BlackJackets.service.MessageService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

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

    // Get All Messages
    @Override
    public List<MessageDTO> getAllMessages() {
        List<Message> all = this.messageRepo.findAll();
        return all.stream().map(
                dto -> new MessageDTO(dto.getId(),
                        dto.getName(),
                        dto.getEmail(),
                        dto.getContent(),dto.getVenue().getId()
                )).collect(Collectors.toList());
    }
}
