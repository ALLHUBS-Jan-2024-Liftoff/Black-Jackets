package BlackJackets.BlackJackets.service;

import BlackJackets.BlackJackets.data.VideoRepo;
import BlackJackets.BlackJackets.models.Video;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class VideoService {

    @Autowired
    private VideoRepo videoRepo;

    public Video saveVideo(Video video) {
        return videoRepo.save(video);
    }
    public List<Video> getVideosByUserId(Long userId) {
        return videoRepo.findByVenueId(userId);
    }
}
