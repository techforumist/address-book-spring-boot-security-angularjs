package org.techforumist.addressbook.web;

import java.security.Principal;
import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.techforumist.addressbook.repository.AddressRepository;

@RestController
public class HomeRestController {
	@Autowired
	private AddressRepository addressRepository;

	@RequestMapping("/welcome")
	public Object welcome(){
		Map<String, Object> m = new HashMap<String,Object>();
		m.put("message", "Welcome");
		m.put("users", addressRepository.findAll());
		
		return m;
	}
	
	@RequestMapping("/user")
	public Principal user(Principal principal ){
		return principal;
	}
}
