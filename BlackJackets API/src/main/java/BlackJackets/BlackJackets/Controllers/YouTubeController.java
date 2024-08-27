package BlackJackets.BlackJackets.Controllers;

import BlackJackets.BlackJackets.service.YouTubeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/youtube")
public class YouTubeController {

    @Autowired
    private YouTubeService youTubeService;

    @GetMapping("/search")
    public ResponseEntity<String> search(@RequestParam("query") String query){
        String result = youTubeService.getYouTubeData(query);
        return ResponseEntity.ok(result);
    }
}
