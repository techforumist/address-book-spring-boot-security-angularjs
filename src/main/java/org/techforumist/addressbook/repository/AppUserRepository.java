package org.techforumist.addressbook.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.techforumist.addressbook.domain.AppUser;

/**
 * @author Sarath Muraleedharan
 *
 */
public interface AppUserRepository extends JpaRepository<AppUser, Long> {
	public AppUser findOneByUsername(String username);
}
