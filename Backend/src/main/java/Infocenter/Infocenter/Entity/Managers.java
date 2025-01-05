package Infocenter.Infocenter.Entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Entity
@Getter
@Setter
public class Managers
{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer managerid;
    private String username;
    private String password;
    private String address;
    private String contactno;
    private String emailid;

    public Managers()
    {
    }

    public Managers(Integer managerid, String username, String password, String address, String contactno, String emailid, List<Facility> facility, List<Query> query11) {
        this.managerid = managerid;
        this.username = username;
        this.password = password;
        this.address = address;
        this.contactno = contactno;
        this.emailid = emailid;
        this.facility = facility;
        this.query11 = query11;
    }

    public Integer getManagerid() {
        return managerid;
    }

    public void setManagerid(Integer managerid) {
        this.managerid = managerid;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getContactno() {
        return contactno;
    }

    public void setContactno(String contactno) {
        this.contactno = contactno;
    }

    public String getEmailid() {
        return emailid;
    }

    public void setEmailid(String emailid) {
        this.emailid = emailid;
    }

    public List<Facility> getFacility() {
        return facility;
    }

    public void setFacility(List<Facility> facility) {
        this.facility = facility;
    }

    public List<Query> getQuery11() {
        return query11;
    }

    public void setQuery11(List<Query> query11) {
        this.query11 = query11;
    }

    @OneToMany(mappedBy = "managers")
    @JsonIgnore
    private List<Facility> facility;

    @OneToMany(mappedBy = "managers11")
    @JsonIgnore
    private List<Query> query11;
}
