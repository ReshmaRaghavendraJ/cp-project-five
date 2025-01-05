package Infocenter.Infocenter.Entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Entity
@Getter
@Setter
public class City
{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer cityid;
    private String city;

    public City()
    {
    }

    public City(Integer cityid, String city, List<Facility> facility, List<Types> types) {
        this.cityid = cityid;
        this.city = city;
        this.facility = facility;
        this.types = types;
    }

    public Integer getCityid() {
        return cityid;
    }

    public void setCityid(Integer cityid) {
        this.cityid = cityid;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public List<Facility> getFacility() {
        return facility;
    }

    public void setFacility(List<Facility> facility) {
        this.facility = facility;
    }

    public List<Types> getTypes() {
        return types;
    }

    public void setTypes(List<Types> types) {
        this.types = types;
    }

    @OneToMany(mappedBy = "city")
    @JsonIgnore
    private List<Facility> facility;

   @OneToMany(mappedBy = "city2")
    @JsonIgnore
    private List<Types>types;
}
