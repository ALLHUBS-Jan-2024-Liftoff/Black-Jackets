package BlackJackets.BlackJackets.Controllers;

import BlackJackets.BlackJackets.dto.MessageDTO;
import BlackJackets.BlackJackets.service.MessageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;

@RestController
@RequestMapping("message")
public class MessageController {

    @Autowired
    private MessageService messageService;

    //Create Message
    @PostMapping("add")
    public ResponseEntity<String> createMessage(@RequestBody MessageDTO messageDTO) throws IOException{
        String message = this.messageService.createMessage(messageDTO);
        return new ResponseEntity<String>(message, HttpStatusCode.valueOf(200));
    }

}
