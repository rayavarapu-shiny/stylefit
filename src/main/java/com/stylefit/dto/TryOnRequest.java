package com.stylefit.dto;

public class TryOnRequest {

    private String userImage;
    private String dressImage;

    public String getUserImage() {
        return userImage;
    }

    public void setUserImage(String userImage) {
        this.userImage = userImage;
    }

    public String getDressImage() {
        return dressImage;
    }

    public void setDressImage(String dressImage) {
        this.dressImage = dressImage;
    }
}