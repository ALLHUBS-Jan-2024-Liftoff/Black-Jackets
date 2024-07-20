package BlackJackets.BlackJackets.models;

public class Reviews {

    private String userName;
    private String comment;
    private int rating;

    public Reviews(String userName, String comment, int rating) {
        this.userName = userName;
        this.comment = comment;
        this.rating = rating;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getComment() {
        return comment;
    }

    public void setComment(String comment) {
        this.comment = comment;
    }

    public int getRating() {
        return rating;
    }

    public void setRating(int rating) {
        this.rating = rating;
    }
}
