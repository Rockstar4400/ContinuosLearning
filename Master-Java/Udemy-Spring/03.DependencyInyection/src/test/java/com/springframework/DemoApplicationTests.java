package com.springframework;

import com.springframework.controller.PropertyInjectedController;
import com.springframework.services.GreetingServiceImpl;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
class DemoApplicationTests {

	PropertyInjectedController controller;

	@BeforeEach
	void setUp(){
		controller = new PropertyInjectedController();

		controller.greetingService = new GreetingServiceImpl();
	}
	@Test
	void contextLoads() {
		System.out.println(controller.getGreeting());
	}
}
