package Infocenter.Infocenter.Entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.Length;

@Entity
@Getter
@Setter
public class Video
{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer videoid;
    private String title;
    private String description;
    @Column(length=50000)
    private String video;

    public Video()
    {
    }

    public Video(Integer videoid, String title, String description, String video, Facility facility1) {
        this.videoid = videoid;
        this.title = title;
        this.description = description;
        this.video = video;
        this.facility1 = facility1;
    }

    public Integer getVideoid() {
        return videoid;
    }

    public void setVideoid(Integer videoid) {
        this.videoid = videoid;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getVideo() {
        return video;
    }

    public void setVideo(String video) {
        this.video = video;
    }

    public Facility getFacility1() {
        return facility1;
    }

    public void setFacility1(Facility facility1) {
        this.facility1 = facility1;
    }

    @ManyToOne
    @JoinColumn(name="facilityid")
    private Facility facility1;
}
