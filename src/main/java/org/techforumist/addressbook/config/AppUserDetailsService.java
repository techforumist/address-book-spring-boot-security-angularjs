package org.techforumist.addressbook.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.techforumist.addressbook.domain.AppUser;
import org.techforumist.addressbook.repository.AppUserRepository;

/**
 * This Service class for providing the user credentials from the database.
 * 
 * @author Sarath Muraleedharan
 *
 */
@Service
public class AppUserDetailsService implements UserDetailsService {

	@Autowired
	AppUserRepository appUserRepository;

	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		AppUser appUser = appUserRepository.findOneByUsername(username);
		return appUser;
	}

}
