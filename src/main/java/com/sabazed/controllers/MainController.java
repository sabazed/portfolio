package com.sabazed.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class MainController {

    @GetMapping("/")
    public String homePage() {
        return "redirect:welcome";
    }

    @GetMapping("/welcome")
    public ModelAndView welcomePage() {
        return new ModelAndView("/index.html");
    }

}