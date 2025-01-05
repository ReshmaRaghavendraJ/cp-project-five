package Infocenter.Infocenter.Entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
public class Text {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer textid;
    private String heading;
    private String description;

    public Text()
    {
    }

    public Text(Integer textid, String heading, String description, Facility facility3) {
        this.textid = textid;
        this.heading = heading;
        this.description = description;
        this.facility3 = facility3;
    }

    public Integer getTextid() {
        return textid;
    }

    public void setTextid(Integer textid) {
        this.textid = textid;
    }

    public String getHeading() {
        return heading;
    }

    public void setHeading(String heading) {
        this.heading = heading;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Facility getFacility3() {
        return facility3;
    }

    public void setFacility3(Facility facility3) {
        this.facility3 = facility3;
    }

    @ManyToOne
    @JoinColumn(name="facilityid")
    private Facility facility3;

}
