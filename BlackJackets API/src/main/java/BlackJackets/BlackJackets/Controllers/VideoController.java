package BlackJackets.BlackJackets.Controllers;

import BlackJackets.BlackJackets.models.Video;
import BlackJackets.BlackJackets.service.VideoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/videos")
public class VideoController {

    @Autowired
    private VideoService videoService;

    @PostMapping("/upload")
        public Video uploadVideo(@RequestBody Video video) {
            return videoService.saveVideo(video);
        }
    @GetMapping("/{venueId}")
    public List<Video> getVideosByVenueId(@PathVariable Long venueId) {
        return videoService.getVideosByUserId(venueId);
    }
}
