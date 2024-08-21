package BlackJackets.BlackJackets.Controllers;

import BlackJackets.BlackJackets.data.MessageRepo;
import BlackJackets.BlackJackets.data.VenueRepo;
import BlackJackets.BlackJackets.dto.MessageDTO;
import BlackJackets.BlackJackets.models.Message;
import BlackJackets.BlackJackets.models.Venue;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("message")
@CrossOrigin(origins = "http://localhost:5173")
public class MessageController {

    @Autowired
    private MessageRepo messageRepo;

    @Autowired
    private VenueRepo venueRepo;

    //Create Message
//    @PostMapping("add")
//    public ResponseEntity<String> createMessage(@RequestBody MessageDTO messageDTO) throws IOException{
//        String message = this.messageService.createMessage(messageDTO);
//        return new ResponseEntity<String>(message, HttpStatusCode.valueOf(200));
//    }

    //Create Message
    @PostMapping("add/{venueId}")
    public Message addMessage(@RequestBody Message message, @PathVariable Integer venueId){
         Venue venue = venueRepo.findById(venueId).get();
         message.setVenue(venue);
        return messageRepo.save(message);
    }

    // Get All Messages by venue id
    @GetMapping("{id}")
    public List<Message> findMessagesByVenue(@PathVariable("id") int venueId){
        return messageRepo.findByVenueId(venueId);
    }

    //Get All Messages
    @GetMapping
    public ResponseEntity<List<Message>> getAllMessages(){
        List<Message> messages = messageRepo.findAll();
        return new ResponseEntity<>(messages,HttpStatusCode.valueOf(200));
    }
}
