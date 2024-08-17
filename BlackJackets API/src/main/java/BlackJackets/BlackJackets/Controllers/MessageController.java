package BlackJackets.BlackJackets.Controllers;

import BlackJackets.BlackJackets.dto.MessageDTO;
import BlackJackets.BlackJackets.dto.VenueDto;
import BlackJackets.BlackJackets.service.MessageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping("message")
@CrossOrigin(origins = "http://localhost:5173")
public class MessageController {

    @Autowired
    private MessageService messageService;

    //Create Message
    @PostMapping("add")
    public ResponseEntity<String> createMessage(@RequestBody MessageDTO messageDTO) throws IOException{
        String message = this.messageService.createMessage(messageDTO);
        return new ResponseEntity<String>(message, HttpStatusCode.valueOf(200));
    }

    //Get All Messages
    @GetMapping
    public ResponseEntity<List<MessageDTO>> getAllMessages(){
        List<MessageDTO> messages = messageService.getAllMessages();
        return new ResponseEntity<>(messages,HttpStatusCode.valueOf(200));
    }
}
