package com.example.DemoUser;

import com.example.DemoUser.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class DemoUserApplication {

	public static void main(String[] args) {
		SpringApplication.run(DemoUserApplication.class, args);
	}
	@Autowired
	private UserRepository userRepository;

//	public void run(String... args) throws Exception {
//
//	}
}
