package com.sabazed.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

import java.util.regex.Pattern;

@Service
public class EmailSender {

    private final Pattern pattern;
    private final JavaMailSender mailSender;

    @Autowired
    public EmailSender(JavaMailSender mailSender) {
        this.mailSender = mailSender;
        pattern = Pattern.compile("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\\.[a-zA-Z0-9-.]+$");
    }

    public void sendEmail(String from, String to, String subject, String body) {
        if (!(validateEmail(from) && validateEmail(to))) return;

        SimpleMailMessage message = new SimpleMailMessage();
        message.setCc(from);
        message.setTo(to);
        message.setSubject(subject);
        message.setText(body);

        mailSender.send(message);
    }

    private boolean validateEmail(String email) {
        return pattern.matcher(email.strip()).matches();
    }

}
