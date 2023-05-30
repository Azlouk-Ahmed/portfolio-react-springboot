package com.portfolio.portfolio.Model;

import javax.persistence.*;

@Entity
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id_category;
    @Column(name = "user_name")
    private String user_name;

    @Column(name = "isAdmin")
    private int isAdmin;

    @Column(name = "github")
    private String github;

    public String getGithub() {
        return github;
    }

    public void setGithub(String github) {
        this.github = github;
    }

    public int getIsAdmin() {
        return isAdmin;
    }

    public void setIsAdmin(int isAdmin) {
        this.isAdmin = isAdmin;
    }

    @Column(name = "user_surname")
    private String user_surname;

    @Column(name = "user_email")
    private String user_email;

    @Column(name = "user_speciality")
    private String user_speciality;

    @Column(name = "instagram")
    private String instagram;

    @Column(name = "whats_app")
    private String whats_app;

    public Long getId_category() {
        return id_category;
    }

    public String getUser_name() {
        return user_name;
    }

    public String getUser_surname() {
        return user_surname;
    }

    public String getUser_email() {
        return user_email;
    }

    public String getUser_speciality() {
        return user_speciality;
    }

    public String getInstagram() {
        return instagram;
    }

    public String getWhats_app() {
        return whats_app;
    }

    public void setId_category(Long id_category) {
        this.id_category = id_category;
    }

    public void setUser_name(String user_name) {
        this.user_name = user_name;
    }

    public void setUser_surname(String user_surname) {
        this.user_surname = user_surname;
    }

    public void setUser_email(String user_email) {
        this.user_email = user_email;
    }

    public void setUser_speciality(String user_speciality) {
        this.user_speciality = user_speciality;
    }

    public void setInstagram(String instagram) {
        this.instagram = instagram;
    }

    public void setWhats_app(String whats_app) {
        this.whats_app = whats_app;
    }
}
