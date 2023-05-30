package com.portfolio.portfolio.Model;
import javax.persistence.*;
import java.util.Date;

@Entity
public class Experiences {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id_experience;
    @Column(name = "title")
    private String title;
    @Column(name = "experience_name")
    private String experience_name;
    @Column(name = "experience_loc")
    private String stage_location;
    @Column(name = "date_deb")
    private Date date_deb;
    @Column(name = "date_fin")
    private Date date_fin;
    @Column(name = "expirence_desc")
    private String expirence_desc;

    @Column(name = "css")
    private String css;

    public String getCss() {
        return css;
    }

    public void setCss(String css) {
        this.css = css;
    }

    public Long getId_experience() {
        return id_experience;
    }

    public void setId_experience(Long id_experience) {
        this.id_experience = id_experience;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getExperience_name() {
        return experience_name;
    }

    public void setExperience_name(String experience_name) {
        this.experience_name = experience_name;
    }

    public String getStage_location() {
        return stage_location;
    }

    public void setStage_location(String stage_location) {
        this.stage_location = stage_location;
    }

    public Date getDate_deb() {
        return date_deb;
    }

    public void setDate_deb(Date date_deb) {
        this.date_deb = date_deb;
    }

    public Date getDate_fin() {
        return date_fin;
    }

    public void setDate_fin(Date date_fin) {
        this.date_fin = date_fin;
    }

    public String getExpirence_desc() {
        return expirence_desc;
    }

    public void setExpirence_desc(String expirence_desc) {
        this.expirence_desc = expirence_desc;
    }
}

