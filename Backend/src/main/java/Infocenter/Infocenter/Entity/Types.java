package Infocenter.Infocenter.Entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Entity
@Getter
@Setter
public class Types
{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer typeid;
    private String type;


    public Types() {
    }

    public Types(Integer typeid, String type, String name, String location, List<Facility> facility, City city2) {
        this.typeid = typeid;
        this.type = type;
        this.facility = facility;
        this.city2 = city2;
    }

    public Integer getTypeid() {
        return typeid;
    }

    public void setTypeid(Integer typeid) {
        this.typeid = typeid;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public List<Facility> getFacility() {
        return facility;
    }

    public void setFacility(List<Facility> facility) {
        this.facility = facility;
    }

    public City getCity2() {
        return city2;
    }

    public void setCity2(City city2) {
        this.city2 = city2;
    }

    @OneToMany(mappedBy = "types")
    @JsonIgnore
    private List<Facility> facility;

    @ManyToOne
    @JoinColumn(name ="cityid")
    private City city2;

}
