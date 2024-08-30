package BlackJackets.BlackJackets.Controllers;

import BlackJackets.BlackJackets.service.YouTubeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/youtube")
@CrossOrigin(origins = "http://localhost:5173")
public class YouTubeController {

    @Autowired
    private YouTubeService youTubeService;

    @GetMapping("/search")
    public ResponseEntity<String> search(@RequestParam("query") String query){
        String result = youTubeService.getYouTubeData(query);
        return ResponseEntity.ok(result);
    }
}
