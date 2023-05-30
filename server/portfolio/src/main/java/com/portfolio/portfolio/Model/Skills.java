package com.portfolio.portfolio.Model;
import javax.persistence.*;

@Entity
@Table(name = "skills")
public class Skills {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "skill_id")
    private Long id;

    @Column(name = "skill_name")
    private String skill_name;

    @Column(name = "skill_list")
    private String skill_list;

    public Long getId() {
        return id;
    }

    public String getSkill_list() {
        return skill_list;
    }

    public void setSkill_list(String skill_list) {
        this.skill_list = skill_list;
    }

    public String getSkill_name() {
        return skill_name;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setSkill_name(String skill_name) {
        this.skill_name = skill_name;
    }
}

