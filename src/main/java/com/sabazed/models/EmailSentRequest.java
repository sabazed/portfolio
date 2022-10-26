package com.sabazed.models;

public class EmailSentRequest {

    private final String email;
    private final String name;
    private final String message;

    public EmailSentRequest(String email, String name, String message) {
        this.email = email;
        this.name = name;
        this.message = message;
    }

    public String getEmail() {
        return email;
    }

    public String getName() {
        return name;
    }

    public String getMessage() {
        return message;
    }

}
