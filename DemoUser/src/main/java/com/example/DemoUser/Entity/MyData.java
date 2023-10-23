package com.example.DemoUser.Entity;

public class MyData {
    private int id;
    private String image;
    private String title;
    private String subtitle;
    private boolean joinNow;

    // Constructors, getters, and setters

    public MyData(int id, String image, String title, String subtitle, boolean joinNow) {
        this.id = id;
        this.image = image;
        this.title = title;
        this.subtitle = subtitle;
        this.joinNow = joinNow;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getSubtitle() {
        return subtitle;
    }

    public void setSubtitle(String subtitle) {
        this.subtitle = subtitle;
    }

    public boolean isJoinNow() {
        return joinNow;
    }

    public void setJoinNow(boolean joinNow) {
        this.joinNow = joinNow;
    }
}
