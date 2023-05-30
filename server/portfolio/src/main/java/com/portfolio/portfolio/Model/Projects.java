package com.portfolio.portfolio.Model;

import javax.persistence.*;

@Entity
public class Projects {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "project_id")
    private Long id;

    @Column(name = "project_name")
    private String project_name;
    @Column(name = "project_tools")
    private String project_tools;
    @Column(name = "project_description")
    private String project_description;
    @Column(name = "project_image")
    private String project_image;
    @Column(name = "project_status")
    private String project_status;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getProject_name() {
        return project_name;
    }

    public void setProject_name(String project_name) {
        this.project_name = project_name;
    }

    public String getProject_tools() {
        return project_tools;
    }

    public void setProject_tools(String project_tools) {
        this.project_tools = project_tools;
    }

    public String getProject_description() {
        return project_description;
    }

    public void setProject_description(String project_description) {
        this.project_description = project_description;
    }

    public String getProject_image() {
        return project_image;
    }

    public void setProject_image(String project_image) {
        this.project_image = project_image;
    }

    public String getProject_status() {
        return project_status;
    }

    public void setProject_status(String project_status) {
        this.project_status = project_status;
    }
}
