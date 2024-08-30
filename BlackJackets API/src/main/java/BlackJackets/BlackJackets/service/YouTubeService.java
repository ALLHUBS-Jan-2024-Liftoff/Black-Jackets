package BlackJackets.BlackJackets.service;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class YouTubeService {

    private final String API_KEY = "AIzaSyBo-IqMlKnLRSVtRgoApx8pPLjqqV4gPu4";
    private final String YOUTUBE_API_URL = "https://www.googleapis.com/youtube/v3";

    public String getYouTubeData(String query) {
        RestTemplate restTemplate = new RestTemplate();
        String url = String.format("%s/search?part=snippet&q=%s&key=%s", YOUTUBE_API_URL, query, API_KEY);
        ResponseEntity<String> response = restTemplate.getForEntity(url, String.class);
        return response.getBody();
    }
}
