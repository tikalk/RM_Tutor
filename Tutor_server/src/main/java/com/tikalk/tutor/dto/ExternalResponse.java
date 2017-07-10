package com.tikalk.tutor.dto;

/**
 * Created by yaniv on 10/07/2017.
 */
public class ExternalResponse {
    private String message;

    public ExternalResponse(String message) {
        this.message = message;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }
}
