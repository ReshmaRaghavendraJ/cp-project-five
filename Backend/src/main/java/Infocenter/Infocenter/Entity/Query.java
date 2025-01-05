package Infocenter.Infocenter.Entity;

import com.fasterxml.jackson.annotation.JsonFormat;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Entity
@Getter
@Setter
public class Query
{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer queryid;
    private String query;
    private String reply;
    @JsonFormat(pattern="dd-MM-yyyy hh:mm a",timezone="Asia/Kolkata")
    private LocalDateTime posteddate;

    @JsonFormat(pattern="dd-MM-yyyy hh:mm a",timezone="Asia/Kolkata")
    private LocalDateTime replydate;
    private Integer ratings;

    public Query()
    {
    }

    public Query(Integer queryid, String query, String reply, LocalDateTime posteddate, LocalDateTime replydate, Integer ratings, Facility facility10, Managers managers11, Guests guestss) {
        this.queryid = queryid;
        this.query = query;
        this.reply = reply;
        this.posteddate = posteddate;
        this.replydate = replydate;
        this.ratings = ratings;
        this.facility10 = facility10;
        this.managers11 = managers11;
        this.guestss = guestss;
    }

    public Integer getQueryid() {
        return queryid;
    }

    public void setQueryid(Integer queryid) {
        this.queryid = queryid;
    }

    public String getQuery() {
        return query;
    }

    public void setQuery(String query) {
        this.query = query;
    }

    public String getReply() {
        return reply;
    }

    public void setReply(String reply) {
        this.reply = reply;
    }

    public LocalDateTime getPosteddate() {
        return posteddate;
    }

    public void setPosteddate(LocalDateTime posteddate) {
        this.posteddate = posteddate;
    }

    public LocalDateTime getReplydate() {
        return replydate;
    }

    public void setReplydate(LocalDateTime replydate) {
        this.replydate = replydate;
    }

    public Integer getRatings() {
        return ratings;
    }

    public void setRatings(Integer ratings) {
        this.ratings = ratings;
    }

    public Facility getFacility10() {
        return facility10;
    }

    public void setFacility10(Facility facility10) {
        this.facility10 = facility10;
    }

    public Managers getManagers11() {
        return managers11;
    }

    public void setManagers11(Managers managers11) {
        this.managers11 = managers11;
    }

    public Guests getGuestss() {
        return guestss;
    }

    public void setGuestss(Guests guestss) {
        this.guestss = guestss;
    }

    @ManyToOne
    @JoinColumn(name="facilityid")
    private Facility facility10;

    @ManyToOne
    @JoinColumn(name="managerid")
    private Managers managers11;

    @ManyToOne
    @JoinColumn(name="guestid")
    private Guests guestss;
}
