package Infocenter.Infocenter.Entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Entity
@Getter
@Setter

public class Guests
{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer guestid;
    private String guestname;
    private String mobileno;
    private String emailid;
    private String password;
    private String gender;

    public Guests()
    {
    }

    public Guests(Integer guestid, String guestname, String mobileno, String emailid, String password, String gender, List<Query> queryy) {
        this.guestid = guestid;
        this.guestname = guestname;
        this.mobileno = mobileno;
        this.emailid = emailid;
        this.password = password;
        this.gender = gender;
        this.queryy = queryy;
    }

    public Integer getGuestid() {
        return guestid;
    }

    public void setGuestid(Integer guestid) {
        this.guestid = guestid;
    }

    public String getGuestname() {
        return guestname;
    }

    public void setGuestname(String guestname) {
        this.guestname = guestname;
    }

    public String getMobileno() {
        return mobileno;
    }

    public void setMobileno(String mobileno) {
        this.mobileno = mobileno;
    }

    public String getEmailid() {
        return emailid;
    }

    public void setEmailid(String emailid) {
        this.emailid = emailid;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public List<Query> getQueryy() {
        return queryy;
    }

    public void setQueryy(List<Query> queryy) {
        this.queryy = queryy;
    }

    @OneToMany(mappedBy = "guestss")
    @JsonIgnore
    private List<Query> queryy;
}
