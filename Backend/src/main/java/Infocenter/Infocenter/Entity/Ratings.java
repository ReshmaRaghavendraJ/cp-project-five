package Infocenter.Infocenter.Entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Entity
@Getter
@Setter

public class Ratings
{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer ratingsid;
    private Integer ratings;

    public Ratings() {
    }

    public Ratings(Integer ratingsid, Integer ratings, Facility facility4) {
        this.ratingsid = ratingsid;
        this.ratings = ratings;
        this.facility4 = facility4;
    }

    public Integer getRatingsid() {
        return ratingsid;
    }

    public void setRatingsid(Integer ratingsid) {
        this.ratingsid = ratingsid;
    }

    public Integer getRatings() {
        return ratings;
    }

    public void setRatings(Integer ratings) {
        this.ratings = ratings;
    }

    public Facility getFacility4() {
        return facility4;
    }

    public void setFacility4(Facility facility4) {
        this.facility4 = facility4;
    }

    @ManyToOne
    @JoinColumn(name="facilityid")
    private Facility facility4;
}
