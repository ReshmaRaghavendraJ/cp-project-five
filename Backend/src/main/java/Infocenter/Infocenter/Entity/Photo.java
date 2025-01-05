package Infocenter.Infocenter.Entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter

public class Photo {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer photoid;
    private String title;
    private String description;
    private String photo;

    public Photo()
    {
    }

    public Photo(Integer photoid, String title, String description, String photo, Facility facility2) {
        this.photoid = photoid;
        this.title = title;
        this.description = description;
        this.photo = photo;
        this.facility2 = facility2;
    }

    public Integer getPhotoid() {
        return photoid;
    }

    public void setPhotoid(Integer photoid) {
        this.photoid = photoid;
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

    public String getPhoto() {
        return photo;
    }

    public void setPhoto(String photo) {
        this.photo = photo;
    }

    public Facility getFacility2() {
        return facility2;
    }

    public void setFacility2(Facility facility2) {
        this.facility2 = facility2;
    }

    @ManyToOne
    @JoinColumn(name="facilityid")
    private Facility facility2;
}
