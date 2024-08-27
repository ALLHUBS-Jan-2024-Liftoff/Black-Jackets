package BlackJackets.BlackJackets.Controllers;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

import java.util.Arrays;
import java.util.List;


@RestController
@RequestMapping("/youtube")
@CrossOrigin(origins = "http://localhost:5173")
public class YoutubeController {

    @RequestMapping(value = "/search/{termFromSearchBar}")
    public List<Object> getVideos(@PathVariable("termFromSearchBar") String term) {
            String url = "https://www.googleapis.com/youtube/v3/part=snippet&KEY=AIzaSyBfLPyRoAEbtvlZ71El7MNyOaVWBRsj9Lo" + term;
        RestTemplate restTemplate = new RestTemplate();

        Object[] videos = restTemplate.getForObject(url, Object[].class);

        return Arrays.asList(videos);
    }
}
