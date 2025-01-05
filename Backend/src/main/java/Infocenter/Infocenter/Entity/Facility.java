package Infocenter.Infocenter.Entity;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;
import java.util.List;

@Entity
@Getter
@Setter
public class Facility
{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer facilityid;

    @JsonFormat(pattern="dd-MM-yyyy hh:mm a",timezone="Asia/Kolkata")
    private LocalDateTime uploadeddate;
    private String facilitydescription;
    private String logo;
    private String name;
    private String location;

    public Facility()
    {
    }

    public Facility(Integer facilityid, LocalDateTime uploadeddate, String facilitydescription, String logo, String name, String location, List<Video> video, List<Photo> photo, List<Text> text, Managers managers, Types types, City city, List<Ratings> ratings, List<Query> query10) {
        this.facilityid = facilityid;
        this.uploadeddate = uploadeddate;
        this.facilitydescription = facilitydescription;
        this.logo = logo;
        this.name = name;
        this.location = location;
        this.video = video;
        this.photo = photo;
        this.text = text;
        this.managers = managers;
        this.types = types;
        this.city = city;
        this.ratings = ratings;
        this.query10 = query10;
    }

    public Integer getFacilityid() {
        return facilityid;
    }

    public void setFacilityid(Integer facilityid) {
        this.facilityid = facilityid;
    }

    public LocalDateTime getUploadeddate() {
        return uploadeddate;
    }

    public void setUploadeddate(LocalDateTime uploadeddate) {
        this.uploadeddate = uploadeddate;
    }

    public String getFacilitydescription() {
        return facilitydescription;
    }

    public void setFacilitydescription(String facilitydescription) {
        this.facilitydescription = facilitydescription;
    }

    public String getLogo() {
        return logo;
    }

    public void setLogo(String logo) {
        this.logo = logo;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public List<Video> getVideo() {
        return video;
    }

    public void setVideo(List<Video> video) {
        this.video = video;
    }

    public List<Photo> getPhoto() {
        return photo;
    }

    public void setPhoto(List<Photo> photo) {
        this.photo = photo;
    }

    public List<Text> getText() {
        return text;
    }

    public void setText(List<Text> text) {
        this.text = text;
    }

    public Managers getManagers() {
        return managers;
    }

    public void setManagers(Managers managers) {
        this.managers = managers;
    }

    public Types getTypes() {
        return types;
    }

    public void setTypes(Types types) {
        this.types = types;
    }

    public City getCity() {
        return city;
    }

    public void setCity(City city) {
        this.city = city;
    }

    public List<Ratings> getRatings() {
        return ratings;
    }

    public void setRatings(List<Ratings> ratings) {
        this.ratings = ratings;
    }

    public List<Query> getQuery10() {
        return query10;
    }

    public void setQuery10(List<Query> query10) {
        this.query10 = query10;
    }

    @OneToMany(mappedBy = "facility1")
    @JsonIgnore
    private List<Video> video;

    @OneToMany(mappedBy = "facility2")
    @JsonIgnore
    private List<Photo> photo;

    @OneToMany(mappedBy = "facility3")
    @JsonIgnore
    private List<Text> text;

    @ManyToOne
    @JoinColumn(name="managerid")
    private Managers managers;

    @ManyToOne
    @JoinColumn(name="typeid")
    private Types types;

    @ManyToOne
    @JoinColumn(name="cityid")
    private City city;

    @OneToMany(mappedBy = "facility4")
    @JsonIgnore
    private List<Ratings> ratings;

    @OneToMany(mappedBy = "facility10")
    @JsonIgnore
    private List<Query> query10;

}
