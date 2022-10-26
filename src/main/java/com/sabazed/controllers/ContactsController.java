package com.sabazed.controllers;

import com.sabazed.models.EmailSentRequest;
import com.sabazed.services.EmailSender;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ContactsController {

    private final String recipient;
    private final String template;
    private final EmailSender emailSender;

    @Autowired
    public ContactsController(EmailSender emailSender) {
        this.emailSender = emailSender;
        recipient = "saba.2003.sz@gmail.com";
        template = "\n---\nThis is an automated email submitted to saba.2003.sz@gmail.com.\nIf you are seeing this it means that your email address has been set as a sender's email address at saba.portfolio.com";
    }

    @PostMapping("/contact")
    public void sendEmail(EmailSentRequest request) {
        emailSender.sendEmail(
                request.getEmail(),
                recipient,
                (request.getName() + " - Portfolio Contact Email"),
                request.getMessage() + template);
    }


}
