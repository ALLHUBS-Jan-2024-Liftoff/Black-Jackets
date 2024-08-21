package BlackJackets.BlackJackets.Controllers;

import BlackJackets.BlackJackets.dto.MessageDTO;
import BlackJackets.BlackJackets.models.Message;
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

    // Create Message
    @PostMapping
    public ResponseEntity<String> createMessage(@RequestBody MessageDTO messageDTO) throws IOException{
        String message = this.messageService.createNewMessage(messageDTO);
        return new ResponseEntity<>(message, HttpStatusCode.valueOf(200));
    }

    // Get All Messages By Venue Id
    @GetMapping("allMessages/{venueId}")
    public ResponseEntity<List<Message>> getAllMessagesByVenueId(@PathVariable Integer venueId){
        return new ResponseEntity<>(this.messageService.getAllMessagesByVenueId(venueId),HttpStatusCode.valueOf(200));
    }
}
