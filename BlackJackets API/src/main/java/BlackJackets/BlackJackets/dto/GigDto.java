package BlackJackets.BlackJackets.dto;

import java.time.LocalDate;

public class GigDto {
    private Long id;
    private String name;
    private LocalDate date;
    private String genre;
    private String ages;

    public GigDto() {
    }

    public GigDto(Long id, String name, LocalDate date, String genre, String ages) {
        this.id = id;
        this.name = name;
        this.date = date;
        this.genre = genre;
        this.ages = ages;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public LocalDate getDate() {
        return date;
    }

    public void setDate(LocalDate date) {
        this.date = date;
    }

    public String getGenre() {
        return genre;
    }

    public void setGenre(String genre) {
        this.genre = genre;
    }

    public String getAges() {
        return ages;
    }

    public void setAges(String ages) {
        this.ages = ages;
    }
}
