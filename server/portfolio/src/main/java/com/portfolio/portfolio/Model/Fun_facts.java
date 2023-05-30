package com.portfolio.portfolio.Model;

import javax.persistence.*;

@Entity
public class Fun_facts {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "fact_id")
    private Long id;

    @Column(name = "fact_desc")
    private String fact_desc;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getFact_desc() {
        return fact_desc;
    }

    public void setFact_desc(String fact_desc) {
        this.fact_desc = fact_desc;
    }


}
